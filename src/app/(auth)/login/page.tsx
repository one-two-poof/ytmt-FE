import type { Metadata } from "next";
import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "./login.css";

export const metadata: Metadata = {
  title: "너도나도 - 로그인",
};

export default function LoginPage() {
  return (
    <div className={styles.loginRoot}>
      <div className={styles.decor1} aria-hidden />
      <div className={styles.decor2} aria-hidden />
      <main className={styles.main}>
        <div className={styles.logoSection}>
          <div className={styles.logoGlowWrap}>
            <div className={styles.logoBlur} aria-hidden />
            <h1 className={styles.logoTitle}>너도나도</h1>
          </div>
          <p className={styles.tagline}>나와 같은 생각을 하는 사람을 만나는 곳</p>
        </div>
        <div className={styles.connectionRow}>
          <div className={styles.connectionLine} aria-hidden />
          <div className={styles.connectionIcons}>
            <div className={styles.glassOrb}>
              <MaterialIcon name="person" filled style={{ color: "#4343d5" }} />
            </div>
            <div className={styles.sparkWrap}>
              <MaterialIcon
                name="spark"
                filled
                className={styles.sparkPulse}
                style={{ color: "#705d00", fontSize: "24px" }}
              />
            </div>
            <div className={styles.glassOrb}>
              <MaterialIcon name="diversity_1" filled style={{ color: "#5d5fef" }} />
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href="/home" className={styles.kakaoBtn}>
          <MaterialIcon name="chat_bubble" filled />
          <span>카카오로 시작하기</span>
        </Link>
        <p className={styles.footerNote}>따뜻한 연결의 시작, 너도나도</p>
      </footer>
    </div>
  );
}
