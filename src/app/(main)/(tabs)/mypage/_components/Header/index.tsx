import { Avatar } from "@/components/ui";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../mypage.css";

interface Props {
  avatarSrc?: string;
}

export default function Header({ avatarSrc }: Props) {
  return (
    <header className={styles.header}>
      <button type="button" aria-label="메뉴">
        <MaterialIcon name="menu" style={{ color: "#4343d5" }} />
      </button>
      <h1 className={styles.headerTitle}>마이페이지</h1>
      <Avatar src={avatarSrc} alt="" size="sm" />
    </header>
  );
}
