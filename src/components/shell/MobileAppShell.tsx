import type { ReactNode } from "react";
import * as styles from "./MobileAppShell.css";

export function MobileAppShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <div className={styles.shellInner}>{children}</div>
    </div>
  );
}
