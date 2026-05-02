import { MaterialIcon } from "@/components/shell";
import * as styles from "../../account.css";

export default function DangerZone() {
  return (
    <section style={{ paddingTop: "24px" }}>
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(199,196,215,0.3), transparent)", marginBottom: "16px" }} />
      <button type="button" className={styles.dangerBtn}>
        <MaterialIcon name="delete_forever" />
        계정 삭제
      </button>
      <p style={{ textAlign: "center", fontSize: "12px", color: "#464555", opacity: 0.5, padding: "0 32px", lineHeight: 1.6, marginTop: "12px" }}>
        계정을 삭제하면 공유한 생각과 연결 기록이 영구적으로 삭제됩니다.
      </p>
    </section>
  );
}
