import axios from "axios";

const axiosWithCredentials = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000",
});

const API_BASE = "/api/users";

export const findMyCourses = async () => {
  try {
    const response = await axiosWithCredentials.get(
      `${API_BASE}/current/courses`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const createCourse = async (course: any) => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/current/courses`,
    course
  );
  return response.data;
};

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/signin`,
    credentials
  );
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.get(`${API_BASE}/profile`);
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${API_BASE}/signup`, user);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${API_BASE}/signout`);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${API_BASE}/${user._id}`,
    user
  );
  return response.data;
};
