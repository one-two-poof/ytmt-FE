import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "너도나도 - 나와 비슷한 생각들",
};

export default function MatchesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
