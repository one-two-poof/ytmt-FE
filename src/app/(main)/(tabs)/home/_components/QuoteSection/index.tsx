import Image from "next/image";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../home.css";

const QUOTE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBUlDUCiU0v8XRlMu1KswOsbPlbXPojPm8kpv2ZP7x6yv_0FDbPOGX4b5_-IxQFUkHoL--u-lzojV8dxS0wwWViboBOUp8Dm43I0aR_aFYlEhDLQt5ia3TZyz7ufAJX7wZyPuYy0jQldj0UVVA1Bcby7evXlUH5tf2onUtFnREM-t2p5TibLWX9gYwDv0AiaAqKA1BrSOPz7XDZfHelrsdxqXcuyWBNUja-CJmAEqI5yGx5I6cj92RlLW8hu9pNPvAm96Iumbq7kKY";

const ON_SURFACE_VARIANT = "#464555";

export default function QuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.quoteHeader}>
        <MaterialIcon name="format_quote" style={{ color: "#818cf8" }} />
        <h3 style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em", color: ON_SURFACE_VARIANT }}>
          오늘의 영감
        </h3>
      </div>
      <div className={styles.quoteImgWrap}>
        <Image src={QUOTE_IMG} alt="" fill className={styles.quoteImg} sizes="100vw" unoptimized />
        <div className={styles.quoteOverlay}>
          <p style={{ color: "#fff", fontStyle: "italic", marginBottom: "4px" }}>
            &quot;때로는 말하지 않아도 전해지는 진심이 있습니다.&quot;
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: 600 }}>— 익명의 대화가</p>
        </div>
      </div>
    </section>
  );
}
