const BASE_URL = import.meta.env.VITE_API_URL;

if (!BASE_URL) {
  throw new Error("VITE_API_URL is not defined in the environment variables");
}

interface UserData {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

export async function registerUser(userData: UserData): Promise<Response> {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response;
}
