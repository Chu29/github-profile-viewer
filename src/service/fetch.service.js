import { api } from "./api";

export const getUserInfo = async (name) => {
  const res = api.get(`users/${name}`);
  return res.json();
};
