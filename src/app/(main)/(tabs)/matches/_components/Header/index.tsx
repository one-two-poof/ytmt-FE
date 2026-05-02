import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../matches.css";

interface Props {
  avatarSrc: string;
}

export default function Header({ avatarSrc }: Props) {
  return (
    <header className={styles.header}>
      <Link href="/home" className={styles.headerBtn} aria-label="뒤로">
        <MaterialIcon name="arrow_back" style={{ color: "#4343d5" }} />
      </Link>
      <h1 className={styles.headerTitle}>나와 비슷한 생각들</h1>
      <div className={styles.avatar}>
        <Image src={avatarSrc} alt="" width={40} height={40} className={styles.avatarImg} />
      </div>
    </header>
  );
}
