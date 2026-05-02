import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "너도나도 - 생각 등록",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
