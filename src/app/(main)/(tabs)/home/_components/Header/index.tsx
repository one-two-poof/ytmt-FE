"use client";

import { Avatar } from "@/components/ui";
import { MaterialIcon } from "@/components/shell";
import { useMe } from "@/hooks/useMe";
import * as styles from "../../home.css";

export default function Header() {
  const { data: me } = useMe();
  console.log(me);
  return (
    <header className={styles.header}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button type="button" className={styles.headerBtn} aria-label="메뉴">
          <MaterialIcon name="menu" />
        </button>
        <h1 className={styles.headerTitle}>너도나도</h1>
      </div>
      <Avatar src={me?.profile_image ?? undefined} alt="프로필" size="sm" />
    </header>
  );
}
