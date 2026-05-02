import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "너도나도 - 마이페이지",
};

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
