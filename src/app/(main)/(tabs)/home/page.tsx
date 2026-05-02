"use client";

import Image from "next/image";
import { useState } from "react";
import { MaterialIcon } from "@/components/shell";
import * as styles from "./home.css";

const AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEnyFoJuVaq7JvuirZv2ECOti8PPczsVJCqiDaC5T_ziVX5xkrPzsHZuMplaUi2RmRkcBaM3Y_ylzRjx48NRz0lF-Lf3VpGGEvXdEe9UX92cMRhzwzRGpzlD0stbXOg2eth1kXYoIViymQjlTEvF_S5ddRlCuJhZKzvHWKCIapg3KOEYQS8Y4rM2g7X1GSK5bnIWF7h2zcSokzq3kMdX7C3ZFCL5HVb6o6GnbyqxO8_Jvh7sWJt8tnHa065IC1WTelpg6sfyfbcJU";
const QUOTE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBUlDUCiU0v8XRlMu1KswOsbPlbXPojPm8kpv2ZP7x6yv_0FDbPOGX4b5_-IxQFUkHoL--u-lzojV8dxS0wwWViboBOUp8Dm43I0aR_aFYlEhDLQt5ia3TZyz7ufAJX7wZyPuYy0jQldj0UVVA1Bcby7evXlUH5tf2onUtFnREM-t2p5TibLWX9gYwDv0AiaAqKA1BrSOPz7XDZfHelrsdxqXcuyWBNUja-CJmAEqI5yGx5I6cj92RlLW8hu9pNPvAm96Iumbq7kKY";

const MAX_LEN = 150;

export default function HomePage() {
  const [text, setText] = useState("");

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button type="button" className={styles.headerBtn} aria-label="메뉴">
            <MaterialIcon name="menu" />
          </button>
          <h1 className={styles.headerTitle}>너도나도</h1>
        </div>
        <Image
          src={AVATAR}
          alt="프로필"
          width={32}
          height={32}
          className={styles.avatarSm}
          unoptimized
        />
      </header>

      <main className={styles.main}>
        <section className={styles.statusBar}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <MaterialIcon
              name="auto_awesome"
              filled
              className={styles.connectionSpark}
              style={{ color: "#fcd400" }}
            />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: vars.onSurfaceVariant,
              }}
            >
              오늘의 문장 등록
            </span>
          </div>
          <span className={styles.badge}>남은 횟수: 2/3</span>
        </section>

        <div className={styles.glassCard}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <label htmlFor="thought-input" className={styles.cardTitle}>
              당신의 진심 어린
              <br />
              한 문장을 적어주세요.
            </label>
            <p className={styles.cardDesc}>
              익명으로 공유된 당신의 생각은
              <br />
              누군가에게 따뜻한 공감이 됩니다.
            </p>
          </div>
          <div className={styles.textareaWrap}>
            <textarea
              id="thought-input"
              className={styles.textarea}
              placeholder="지금 머릿속을 스치는 생각을 자유롭게 적어보세요..."
              rows={6}
              maxLength={MAX_LEN}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <span className={styles.charCount}>
              {text.length}/{MAX_LEN}
            </span>
          </div>
          <div className={styles.sparkDecor} aria-hidden />
        </div>

        <div className={styles.fabRow}>
          <button type="button" className={styles.submitBtn}>
            <MaterialIcon name="send" filled />
            등록하기
          </button>
        </div>

        <section className={styles.quoteSection}>
          <div className={styles.quoteHeader}>
            <MaterialIcon name="format_quote" style={{ color: "#818cf8" }} />
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: vars.onSurfaceVariant,
              }}
            >
              오늘의 영감
            </h3>
          </div>
          <div className={styles.quoteImgWrap}>
            <Image src={QUOTE_IMG} alt="" fill className={styles.quoteImg} sizes="100vw" unoptimized />
            <div className={styles.quoteOverlay}>
              <p style={{ color: "#fff", fontStyle: "italic", marginBottom: "4px" }}>
                &quot;때로는 말하지 않아도 전해지는 진심이 있습니다.&quot;
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: 600 }}>
                — 익명의 대화가
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const vars = {
  onSurfaceVariant: "#464555",
};
