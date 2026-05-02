import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../chat.css";

interface Props {
  name: string;
  avatar: string;
}

export default function ChatHeader({ name, avatar }: Props) {
  return (
    <header className={styles.header}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Link href="/chats" aria-label="뒤로" style={{ display: "flex", padding: "8px", borderRadius: "999px" }}>
          <MaterialIcon name="arrow_back_ios_new" style={{ color: "#464555" }} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "999px", overflow: "hidden", border: "2px solid white", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <Image src={avatar} alt="" width={40} height={40} style={{ objectFit: "cover" }} />
          </div>
          <div>
            <h1 style={{ fontSize: "16px", fontWeight: 700 }}>{name}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#fcd400", boxShadow: "0 0 8px rgba(252,212,0,0.4)" }} />
              <span style={{ fontSize: "10px", fontWeight: 600, color: "#767586", textTransform: "uppercase", letterSpacing: "0.08em" }}>연결됨</span>
            </div>
          </div>
        </div>
      </div>
      <button type="button" aria-label="더보기" style={{ padding: "8px", borderRadius: "999px", border: "none", background: "transparent", cursor: "pointer" }}>
        <MaterialIcon name="more_vert" style={{ color: "#464555" }} />
      </button>
    </header>
  );
}
