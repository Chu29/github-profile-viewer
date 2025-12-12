import { api } from "./api";

export const getUserInfo = async (query) => {
  const res = api.get(`users/${query}`);
  return res.json();
};

export const getUserRepos = async (query) => {
  const res = api.get(`users/${query}/repos?per_page=10&sort=pushed`);
  return res.json();
};
