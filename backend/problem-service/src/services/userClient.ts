import axios from "axios";

const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL || "http://localhost:3001";

export const getUserById = async (id: number) => {
  try {
    const response = await axios.get(`${USER_SERVICE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    throw new Error("User service 호출 실패");
  }
};
