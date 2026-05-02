import { MaterialIcon } from "@/components/shell";
import * as styles from "../../support.css";

const FAQ = [
  {
    q: "매칭은 어떻게 되나요?",
    a: "맞춤 알고리즘이 서로의 문장에서 겹치는 감정의 결과 서사를 찾아요. 프로필 매칭이 아니라, 생각이 만나는 '너도나도' 순간에 초점을 둡니다.",
  },
  {
    q: "하루에 문장은 몇 번까지?",
    a: "천천히 성찰할 수 있도록 하루 최대 3번까지 깊은 한 문장을 나눌 수 있어요. 양보다 질을 생각해요.",
  },
  {
    q: "내 글은 비공개인가요?",
    a: "기본은 익명이에요. 연결된 상대에게만 프로필을 공개할지 선택할 수 있습니다.",
  },
];

export default function FaqSection() {
  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <MaterialIcon name="auto_awesome" filled style={{ color: "#e9c400" }} />
        <h3 style={{ fontSize: "24px", fontWeight: 600 }}>자주 묻는 질문</h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {FAQ.map((item) => (
          <div key={item.q} className={styles.glassCard}>
            <details style={{ cursor: "pointer" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none", fontWeight: 600, fontSize: "16px", color: "#4343d5" }}>
                <span style={{ paddingRight: "16px" }}>{item.q}</span>
                <MaterialIcon name="expand_more" style={{ color: "#767586", flexShrink: 0 }} />
              </summary>
              <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
                <p style={{ color: "#464555", lineHeight: 1.6 }}>{item.a}</p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
