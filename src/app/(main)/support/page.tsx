import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "./support.css";

export const metadata: Metadata = {
  title: "너도나도 - 고객 지원",
};

const AV =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5VziVrVUZg6dFjjZa_CFivTzW2H_2p4xrEXst462Q2KuZZI0USim6PcWxrwxfG2-thyQW9hnM6BPGRovoGJOI6P4ex6cUQgOn06TcBUgZcp9sw_QrfDfNLrpbZOorguqOQgUXyKVs0rzlYGlAXQX0iygAX1KDBBkMY7gWrPWP-frrKdA87VCL6UoXRzYZO0FYlWyxUg0cP2rLz9VVbkCJcEpvx9dCqc29-to1DfPNowuovfRXzCiuBEJ4AP9bMHR9ZF2qCXMQ3vE";

const FAQ = [
  {
    q: "매칭은 어떻게 되나요?",
    a: "맞춤 알고리즘이 서로의 문장에서 겹치는 감정의 결과 서사를 찾아요. 프로필 매칭이 아니라, 생각이 만나는 ‘너도나도’ 순간에 초점을 둡니다.",
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

export default function SupportPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/mypage" aria-label="뒤로" style={{ padding: "8px", display: "flex", color: "#4343d5" }}>
            <MaterialIcon name="arrow_back" />
          </Link>
          <h1 style={{ fontSize: "18px", fontWeight: 700, color: "#4343d5" }}>너도나도</h1>
          <div style={{ width: "32px", height: "32px", borderRadius: "999px", overflow: "hidden", border: "2px solid #e1e0ff" }}>
            <Image src={AV} alt="" width={32} height={32} />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "12px", letterSpacing: "-0.02em" }}>
            무엇을 도와드릴까요?
          </h2>
          <p style={{ color: "#464555", paddingLeft: "16px", paddingRight: "16px", lineHeight: 1.6 }}>
            기술적인 문제든 마음에 닿는 이야기든, 언제든 편하게 알려주세요.
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <button type="button" className={styles.primaryBtn}>
            <MaterialIcon name="chat_bubble" />
            1:1 문의하기
          </button>
          <button type="button" className={styles.secondaryBtn}>
            <MaterialIcon name="draw" />
            의견 보내기
          </button>
        </section>

        <section>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <MaterialIcon name="auto_awesome" filled style={{ color: "#e9c400" }} />
            <h3 style={{ fontSize: "24px", fontWeight: 600 }}>자주 묻는 질문</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {FAQ.map((item) => (
              <div key={item.q} className={styles.glassCard}>
                <details style={{ cursor: "pointer" }}>
                  <summary
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      listStyle: "none",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#4343d5",
                    }}
                  >
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

        <section className={styles.glassCard} style={{ padding: 0, overflow: "hidden", aspectRatio: "4/3" }}>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCjmIR9vxCy3_yrMueEAaoT6STCjDpGvMX0darGq_qk9vO0uv399YiZxun-4BsMgppAY6fMhOyGixVHa8V1RGCnddQV1DU3wPw1pLPsQkTbrkrs6331pqkbZM6-HvyxbSDDl15pOaioz2k6Gogz7kH_kGlXFVluMC_tmVudb-h8z-BkTYmbSZn_nPd8LYvOLA_Gsq2bpqv-DoOm_6NNoiXwus6S4z9l6qk0nh-zl_Q2zFoZNjC2Us4lu8U-arYrD2O8KTwK50HYZo"
            alt=""
            width={800}
            height={600}
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85, mixBlendMode: "multiply" }}
          />
        </section>

        <footer style={{ textAlign: "center", paddingTop: "24px", paddingBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "12px" }}>
            <a href="#" style={{ fontSize: "13px", fontWeight: 600, color: "#4343d5" }}>
              이용약관
            </a>
            <a href="#" style={{ fontSize: "13px", fontWeight: 600, color: "#4343d5" }}>
              개인정보 처리방침
            </a>
          </div>
          <p style={{ fontSize: "12px", color: "#767586" }}>너도나도 고객지원 v2.4.0</p>
        </footer>
      </main>
    </div>
  );
}
