import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../login.css";

export default function KakaoButton() {
  return (
    <footer className={styles.footer}>
      <Link href="/home" className={styles.kakaoBtn}>
        <MaterialIcon name="chat_bubble" filled />
        <span>카카오로 시작하기</span>
      </Link>
      <p className={styles.footerNote}>따뜻한 연결의 시작, 너도나도</p>
    </footer>
  );
}
