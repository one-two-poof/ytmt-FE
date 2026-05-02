import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "너도나도 - 채팅",
};

export default function ChatsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
