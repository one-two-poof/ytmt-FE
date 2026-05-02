import { MaterialIcon } from "@/components/shell";
import * as styles from "../../support.css";

export default function ActionButtons() {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <button type="button" className={styles.primaryBtn}>
        <MaterialIcon name="chat_bubble" />
        1:1 문의하기
      </button>
      <button type="button" className={styles.secondaryBtn}>
        <MaterialIcon name="draw" />
        의견 보내기
      </button>
    </section>
  );
}
