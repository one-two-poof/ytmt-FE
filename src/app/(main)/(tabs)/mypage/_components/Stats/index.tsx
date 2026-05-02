import * as styles from "../../mypage.css";

interface Props {
  sentenceCount: number;
  empathyCount: number;
}

export default function Stats({ sentenceCount, empathyCount }: Props) {
  return (
    <section className={styles.statsGrid}>
      <div className={styles.statCard}>
        <p style={{ fontSize: "13px", fontWeight: 600, color: "#464555", marginBottom: "4px" }}>등록한 문장</p>
        <p style={{ fontSize: "24px", fontWeight: 600, color: "#4343d5" }}>{sentenceCount}</p>
      </div>
      <div className={styles.statCard}>
        <p style={{ fontSize: "13px", fontWeight: 600, color: "#464555", marginBottom: "4px" }}>찾은 공감</p>
        <p style={{ fontSize: "24px", fontWeight: 600, color: "#705d00" }}>{empathyCount}</p>
      </div>
    </section>
  );
}
