import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../account.css";

interface Props {
  avatarSrc: string;
}

export default function Header({ avatarSrc }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/mypage" aria-label="뒤로" style={{ display: "flex", padding: "8px" }}>
          <MaterialIcon name="arrow_back" style={{ color: "#4343d5" }} />
        </Link>
        <h1 style={{ fontSize: "18px", fontWeight: 600, color: "#4343d5" }}>너도나도</h1>
        <div style={{ width: "40px", display: "flex", justifyContent: "flex-end" }}>
          <Image src={avatarSrc} alt="" width={32} height={32} style={{ borderRadius: "999px", border: "2px solid #5d5fef" }} />
        </div>
      </div>
    </header>
  );
}
