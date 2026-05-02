import Link from "next/link";
import { Avatar, Badge, Card } from "@/components/ui";
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
    <Card style={{ display: "flex", flexDirection: "column", gap: "12px", position: "relative", overflow: "hidden" }}>
      <Badge variant="spark" style={{ position: "absolute", top: "16px", right: "16px" }}>
        <MaterialIcon name="bolt" filled style={{ fontSize: "14px" }} />
        {pct} 일치
      </Badge>
      <div className={styles.row}>
        <Avatar src={img} alt="" size="md" />
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
    </Card>
  );
}
