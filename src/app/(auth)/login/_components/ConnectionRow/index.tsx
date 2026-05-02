import { MaterialIcon } from "@/components/shell";
import * as styles from "../../login.css";

export default function ConnectionRow() {
  return (
    <div className={styles.connectionRow}>
      <div className={styles.connectionLine} aria-hidden />
      <div className={styles.connectionIcons}>
        <div className={styles.glassOrb}>
          <MaterialIcon name="person" filled style={{ color: "#4343d5" }} />
        </div>
        <div className={styles.sparkWrap}>
          <MaterialIcon name="spark" filled className={styles.sparkPulse} style={{ color: "#705d00", fontSize: "24px" }} />
        </div>
        <div className={styles.glassOrb}>
          <MaterialIcon name="diversity_1" filled style={{ color: "#5d5fef" }} />
        </div>
      </div>
    </div>
  );
}
