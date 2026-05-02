import { MaterialIcon } from "@/components/shell";
import * as styles from "../../account.css";

interface Props {
  displayName: string;
  email: string;
}

export default function AccountSettings({ displayName, email }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div className={styles.glassCard}>
        <label className={styles.label} htmlFor="display-name">표시 이름</label>
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <input id="display-name" className={styles.input} type="text" defaultValue={displayName} />
          <MaterialIcon name="edit" style={{ position: "absolute", right: "16px", color: "#c7c4d7" }} />
        </div>
      </div>

      <div className={styles.glassCard}>
        <span className={styles.label}>이메일</span>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", backgroundColor: "rgba(236,238,241,0.5)", borderRadius: "12px" }}>
          <MaterialIcon name="mail" style={{ color: "#767586" }} />
          <span style={{ color: "#767586", flex: 1 }}>{email}</span>
          <MaterialIcon name="lock" filled style={{ fontSize: "16px", color: "#c7c4d7" }} />
        </div>
      </div>

      <div className={styles.glassCard} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#FEE500", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <MaterialIcon name="chat_bubble" filled style={{ color: "#544600" }} />
          </div>
          <div>
            <p style={{ fontWeight: 600 }}>카카오 연동</p>
            <p style={{ fontSize: "12px", color: "#705d00" }}>연결됨 · 활성</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#fcd400" }} />
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#705d00" }}>동기화됨</span>
        </div>
      </div>
    </div>
  );
}
