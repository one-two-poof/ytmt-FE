import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// request: 카카오 로그인 후 발급된 JWT를 Authorization 헤더에 첨부
api.interceptors.request.use((config) => {
  return config;
});

// response: 401 응답 시 /login으로 리다이렉트 (토큰 만료 처리)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
