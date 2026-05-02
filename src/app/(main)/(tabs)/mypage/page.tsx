import * as styles from "./mypage.css";
import Header from "./_components/Header";
import Profile from "./_components/Profile";
import Stats from "./_components/Stats";
import MySentences, { type SentenceItem } from "./_components/MySentences";
import Settings from "./_components/Settings";

const PROFILE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAf5GMkpJRT8k1ZpUxfR9rrwmCF3in-b7n4VzJ0WP1ZPPPKA974O7K4ZL3qCX3l_CQdOuYRywwb9JlCFTCF-f9yDSx0c_lWW_jKeMcrJNt65JUpQrQAPbFY30WIaohi8Pb7_QY1bZw4GxJXLYD2UDP2g9qM6bXFo_K6rNyinK4ujiCz6kTo3MtshhJO27Em04S9JNVEZl6MV3MWbBVyaK9TcdUK54PDoQuIeSj0_XO3YTXZSZrBwAhj8kqToda36EPp1JdgCxDur98";

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
  return (
    <div className={styles.page}>
      <Header avatarSrc={PROFILE} />
      <main className={styles.main}>
        <Profile avatarSrc={PROFILE} name="김너도" email="neodo.kim@kakaomail.com" />
        <Stats sentenceCount={24} empathyCount={158} />
        <MySentences sentences={SENTENCES} />
        <Settings />
      </main>
    </div>
  );
}
