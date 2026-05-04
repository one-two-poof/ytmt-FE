"use client";

import * as styles from "./mypage.css";
import Header from "./_components/Header";
import Profile from "./_components/Profile";
import Stats from "./_components/Stats";
import MySentences, { type SentenceItem } from "./_components/MySentences";
import Settings from "./_components/Settings";
import { useMe } from "@/hooks/useMe";

const SENTENCES: SentenceItem[] = [
  {
    id: "1",
    type: "today",
    text: "가끔은 아무것도 하지 않는 시간이 우리를 가장 멀리 데려다주기도 합니다.",
    date: "2023.11.24",
    empathyCount: 12,
  },
  {
    id: "2",
    type: "past",
    text: "비 오는 날 창가에 앉아 마시는 따뜻한 차 한 잔의 위로를 믿어요.",
    date: "2023.11.20",
    empathyCount: 45,
  },
];

export default function MyPage() {
  const { data: me } = useMe();

  return (
    <div className={styles.page}>
      <Header avatarSrc={me?.profile_image ?? undefined} />
      <main className={styles.main}>
        <Profile
          avatarSrc={me?.profile_image ?? null}
          name={me?.nickname ?? me?.name ?? ""}
          email={me?.email ?? ""}
        />
        <Stats sentenceCount={24} empathyCount={158} />
        <MySentences sentences={SENTENCES} />
        <Settings />
      </main>
    </div>
  );
}
