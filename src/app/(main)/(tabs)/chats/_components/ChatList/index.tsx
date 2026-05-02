import Link from "next/link";
import { Avatar } from "@/components/ui";
import * as styles from "../../chats.css";

export interface ThreadItem {
  id: string;
  name: string;
  last: string;
  img: string;
}

interface Props {
  threads: ThreadItem[];
}

export default function ChatList({ threads }: Props) {
  return (
    <main className={styles.main}>
      {threads.map((t) => (
        <Link key={t.id} href={`/chat/${t.id}`} className={styles.row}>
          <Avatar src={t.img} alt="" size="lg" />
          <div style={{ minWidth: 0, flex: 1 }}>
            <p style={{ fontWeight: 700, marginBottom: "4px" }}>{t.name}</p>
            <p className={styles.preview}>{t.last}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
