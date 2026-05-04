import { MaterialIcon } from "@/components/shell";
import * as styles from "../../login.css";

const KAKAO_AUTH_URL =
  `https://kauth.kakao.com/oauth/authorize` +
  `?response_type=code` +
  `&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}` +
  `&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`;

export default function KakaoButton() {
  return (
    <footer className={styles.footer}>
      <a href={KAKAO_AUTH_URL} className={styles.kakaoBtn}>
        <MaterialIcon name="chat_bubble" filled />
        <span>카카오로 시작하기</span>
      </a>
      <p className={styles.footerNote}>따뜻한 연결의 시작, 너도나도</p>
    </footer>
  );
}
