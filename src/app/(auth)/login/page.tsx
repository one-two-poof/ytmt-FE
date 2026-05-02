import type { Metadata } from "next";
import * as styles from "./login.css";
import LogoSection from "./_components/LogoSection";
import ConnectionRow from "./_components/ConnectionRow";
import KakaoButton from "./_components/KakaoButton";

export const metadata: Metadata = { title: "너도나도 - 로그인" };

export default function LoginPage() {
  return (
    <div className={styles.loginRoot}>
      <div className={styles.decor1} aria-hidden />
      <div className={styles.decor2} aria-hidden />
      <main className={styles.main}>
        <LogoSection />
        <ConnectionRow />
      </main>
      <KakaoButton />
    </div>
  );
}
