import Image from "next/image";
import Link from "next/link";
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
          <div className={styles.avatar}>
            <Image src={t.img} alt="" width={52} height={52} style={{ objectFit: "cover" }} />
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <p style={{ fontWeight: 700, marginBottom: "4px" }}>{t.name}</p>
            <p className={styles.preview}>{t.last}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
