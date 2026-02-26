import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
  fullName: string;
  username: string;
  email: string;
  passwordHash: string;
}

export interface IUserDocument extends IUser, Document {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    fullName: { type: String, required: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true },
);
// Hash password before save
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
});

// Compare password for login
userSchema.methods.comparePassword = async function (
  candidatePassword: string,
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.passwordHash);
};

const User = mongoose.model("User", userSchema);

export default User;
