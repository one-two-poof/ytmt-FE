import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../matches.css";

export interface MatchData {
  id: string;
  pct: string;
  name: string;
  time: string;
  img: string;
  text: string;
}

export default function MatchCard({ id, pct, name, time, img, text }: MatchData) {
  return (
    <article className={styles.card}>
      <div className={styles.matchBadge}>
        <MaterialIcon name="bolt" filled style={{ fontSize: "14px" }} />
        <span>{pct} 일치</span>
      </div>
      <div className={styles.row}>
        <div className={styles.miniAvatar}>
          <Image src={img} alt="" width={48} height={48} className={styles.avatarImg} />
        </div>
        <div>
          <p style={{ fontWeight: 600, fontSize: "13px", letterSpacing: "0.05em" }}>{name}</p>
          <p style={{ fontSize: "12px", color: "#94a3b8" }}>{time}</p>
        </div>
      </div>
      <p className={styles.quote}>{text}</p>
      <Link href={`/chat/${id}`} className={styles.chatBtn}>
        <MaterialIcon name="forum" />
        대화 시작하기
      </Link>
    </article>
  );
}
