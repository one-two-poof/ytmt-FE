import { MaterialIcon } from "@/components/shell";
import * as styles from "../../chat.css";

export default function MessageInput() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <button type="button" style={{ width: "48px", height: "48px", borderRadius: "16px", border: "none", background: "#f2f4f7", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#464555" }} aria-label="추가">
          <MaterialIcon name="add" />
        </button>
        <div className={styles.inputArea}>
          <textarea className={styles.textarea} placeholder="공감을 이어가세요..." rows={1} />
          <button type="button" className={styles.sendBtn} aria-label="전송">
            <MaterialIcon name="send" filled />
          </button>
        </div>
      </div>
    </footer>
  );
}
