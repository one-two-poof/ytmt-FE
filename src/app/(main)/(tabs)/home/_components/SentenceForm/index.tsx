"use client";

import { useState } from "react";
import { Badge, Button, Card, Textarea } from "@/components/ui";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../home.css";

const MAX_LEN = 150;
const ON_SURFACE_VARIANT = "#464555";

export default function SentenceForm() {
  const [text, setText] = useState("");

  return (
    <>
      <section className={styles.statusBar}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <MaterialIcon name="auto_awesome" filled className={styles.connectionSpark} style={{ color: "#fcd400" }} />
          <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em", color: ON_SURFACE_VARIANT }}>
            오늘의 문장 등록
          </span>
        </div>
        <Badge variant="primary">남은 횟수: 2/3</Badge>
      </section>

      <Card style={{ position: "relative" }}>
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
          <Textarea
            id="thought-input"
            multiline
            placeholder="지금 머릿속을 스치는 생각을 자유롭게 적어보세요..."
            rows={6}
            maxLength={MAX_LEN}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ paddingBottom: "40px", fontSize: "18px", minHeight: "140px" }}
          />
          <span className={styles.charCount}>{text.length}/{MAX_LEN}</span>
        </div>
        <div className={styles.sparkDecor} aria-hidden />
      </Card>

      <div className={styles.fabRow}>
        <Button variant="fab" size="lg">
          <MaterialIcon name="send" filled />
          등록하기
        </Button>
      </div>
    </>
  );
}
