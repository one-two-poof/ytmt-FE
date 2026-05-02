import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../support.css";

interface Props {
  avatarSrc: string;
}

export default function Header({ avatarSrc }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/mypage" aria-label="뒤로" style={{ padding: "8px", display: "flex", color: "#4343d5" }}>
          <MaterialIcon name="arrow_back" />
        </Link>
        <h1 style={{ fontSize: "18px", fontWeight: 700, color: "#4343d5" }}>너도나도</h1>
        <div style={{ width: "32px", height: "32px", borderRadius: "999px", overflow: "hidden", border: "2px solid #e1e0ff" }}>
          <Image src={avatarSrc} alt="" width={32} height={32} />
        </div>
      </div>
    </header>
  );
}
