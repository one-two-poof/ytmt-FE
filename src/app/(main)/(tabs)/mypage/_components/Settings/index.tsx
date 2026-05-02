import Link from "next/link";
import { Card } from "@/components/ui";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../mypage.css";

export default function Settings() {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <h3 style={{ fontSize: "18px", fontWeight: 700, paddingLeft: "8px" }}>설정</h3>
      <Card style={{ overflow: "hidden", padding: 0 }}>
        <nav>
          <Link href="#" className={styles.menuRow}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div className={styles.menuIconWrap} style={{ backgroundColor: "rgba(225,224,255,0.5)" }}>
                <MaterialIcon name="notifications" style={{ color: "#4343d5" }} />
              </div>
              <span style={{ fontWeight: 500 }}>알림 설정</span>
            </div>
            <MaterialIcon name="chevron_right" style={{ color: "#464555" }} />
          </Link>
          <Link href="/account" className={styles.menuRow}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div className={styles.menuIconWrap} style={{ backgroundColor: "#e6e8eb" }}>
                <MaterialIcon name="account_circle" style={{ color: "#464555" }} />
              </div>
              <span style={{ fontWeight: 500 }}>계정 관리</span>
            </div>
            <MaterialIcon name="chevron_right" style={{ color: "#464555" }} />
          </Link>
          <Link href="/support" className={styles.menuRow}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div className={styles.menuIconWrap} style={{ backgroundColor: "#e6e8eb" }}>
                <MaterialIcon name="help" style={{ color: "#464555" }} />
              </div>
              <span style={{ fontWeight: 500 }}>고객 지원</span>
            </div>
            <MaterialIcon name="chevron_right" style={{ color: "#464555" }} />
          </Link>
          <button type="button" className={styles.logoutBtn}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div className={styles.menuIconWrap} style={{ backgroundColor: "rgba(255,218,214,0.4)" }}>
                <MaterialIcon name="logout" style={{ color: "#ba1a1a" }} />
              </div>
              <span style={{ fontWeight: 500, color: "#ba1a1a" }}>로그아웃</span>
            </div>
          </button>
        </nav>
      </Card>
    </section>
  );
}
