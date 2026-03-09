const BASE_URL = import.meta.env.VITE_API_URL;

if (!BASE_URL) {
  throw new Error("VITE_API_URL is not defined in the environment variables");
}

export interface RegisterUserPayload {
  fullName?: string;
  username?: string;
  email: string;
  passwordHash: string;
}

export async function registerUser(
  userData: RegisterUserPayload,
): Promise<{ message?: string; token?: string }> {
  const response = await fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      data && typeof data === "object" && "message" in data
        ? String(data.message)
        : "Registration failed";
    throw new Error(message);
  }

  return data;
}

export async function loginUser(
  email: string,
  passwordHash: string,
): Promise<{ message?: string; token?: string }> {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, passwordHash }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      data && typeof data === "object" && "message" in data
        ? String(data.message)
        : "Login failed";
    throw new Error(message);
  }

  return data;
}
