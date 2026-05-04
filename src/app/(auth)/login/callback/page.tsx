"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/axios";

export default function KakaoCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const code = searchParams.get("code");
    const error = searchParams.get("error");

    if (error || !code) {
      router.replace("/login");
      return;
    }

    api
      .post("/auth/kakao/code", {
        code,
        redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
      })
      .then((res) => {
        const token = res.data?.access_token;
        if (token) {
          localStorage.setItem("access_token", token);
        }
        router.replace("/home");
      })
      .catch(() => {
        router.replace("/login");
      });
  }, [router, searchParams]);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        color: "#767586",
      }}
    >
      로그인 중...
    </div>
  );
}
