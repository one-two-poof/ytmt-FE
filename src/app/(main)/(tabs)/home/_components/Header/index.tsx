import Image from "next/image";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../home.css";

interface Props {
  avatarSrc: string;
}

export default function Header({ avatarSrc }: Props) {
  return (
    <header className={styles.header}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button type="button" className={styles.headerBtn} aria-label="메뉴">
          <MaterialIcon name="menu" />
        </button>
        <h1 className={styles.headerTitle}>너도나도</h1>
      </div>
      <Image src={avatarSrc} alt="프로필" width={32} height={32} className={styles.avatarSm} unoptimized />
    </header>
  );
}
