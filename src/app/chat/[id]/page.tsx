import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "./chat.css";

const PEERS: Record<string, { name: string; avatar: string }> = {
  "1": {
    name: "새벽의 여행자",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJZCGSZOUt9iqMFDoOT7e550H3rIo8p13RiGyWeFK92Oqd79p90VvKJKKqyNJC3TNJq1jyo1bhewG85FCi77BSdDoTMusqd10kt55brBkhCxYYMgNEUQsCqNijwXfzUXtvhvHZ7ED53v-qlGdcp88BzNFgp9iW-w9pgTiPBC8HzygIJduEbH0x59n-lqqeACkj7rH2PuTvNbQf-vCdQUtnnTpvhcUd1QpU1jtk890v6509Ro9_g25D9kSebn82UOGjFBPY_QLLoyA",
  },
  "2": {
    name: "오후의 기록",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhIf6M-szThWQVCVypYEZSIPo8LxM_TEeI8qVHHBSupgZKURSP1hQTpoSeAq8mmOH3homhmybDjDV3iqwuyODyUb05HOZnGypkG9LzOZKl91a68_CAMgEmqf8Q_Kuv3rsdfy7LtpSsukp_yx4B13jNRigdn24orTjP3gl9v1AHPqOmxJlpjK1LTnRH3wILKDTU2aB-7SRBQKTKCjLv9J-7Zi45BQku3o3x_lO3n04XTuXNh2kiwSiY5CVCAxqPGrjotbJAz1tDvmE",
  },
};

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const peer = PEERS[id] ?? PEERS["1"];
  return { title: `${peer.name} · 너도나도` };
}

export default async function ChatPage({ params }: Props) {
  const { id } = await params;
  const peer = PEERS[id] ?? PEERS["1"];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/chats" aria-label="뒤로" style={{ display: "flex", padding: "8px", borderRadius: "999px" }}>
            <MaterialIcon name="arrow_back_ios_new" style={{ color: "#464555" }} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "999px", overflow: "hidden", border: "2px solid white", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              <Image src={peer.avatar} alt="" width={40} height={40} style={{ objectFit: "cover" }} />
            </div>
            <div>
              <h1 style={{ fontSize: "16px", fontWeight: 700 }}>{peer.name}</h1>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background: "#fcd400",
                    boxShadow: "0 0 8px rgba(252,212,0,0.4)",
                  }}
                />
                <span style={{ fontSize: "10px", fontWeight: 600, color: "#767586", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  연결됨
                </span>
              </div>
            </div>
          </div>
        </div>
        <button type="button" aria-label="더보기" style={{ padding: "8px", borderRadius: "999px", border: "none", background: "transparent", cursor: "pointer" }}>
          <MaterialIcon name="more_vert" style={{ color: "#464555" }} />
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.dateChip}>오늘 · 10월 24일</div>

        <div className={styles.bubbleIn}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
            <div className={styles.bubbleInInner}>
              안녕하세요! 남겨주신 문장 보고 정말 공감이 많이 돼서 메시지 드려요. 저도 비슷한 생각을 한 적이 있거든요.
            </div>
            <span style={{ fontSize: "10px", color: "#767586", marginBottom: "4px", flexShrink: 0 }}>오후 2:15</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "8px" }}>
            <MaterialIcon name="auto_awesome" style={{ fontSize: "14px", color: "#fcd400", filter: "drop-shadow(0 0 8px rgba(252,212,0,0.4))" }} />
            <span style={{ fontSize: "11px", fontStyle: "italic", color: "#767586" }}>
              둘 다 「고요 속의 의미」에 대한 생각을 나누었어요
            </span>
          </div>
        </div>

        <div style={{ alignSelf: "flex-end", maxWidth: "85%", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", flexDirection: "row-reverse" }}>
            <div className={styles.bubbleOut}>와, 반가워요! 어떤 부분이 특히 공감되셨나요? 제 생각이 누군가에게 닿았다고 하니 신기하네요.</div>
            <span style={{ fontSize: "10px", color: "#767586", marginBottom: "4px", flexShrink: 0 }}>오후 2:20</span>
          </div>
        </div>

        <div className={styles.reflectionCard}>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <MaterialIcon name="favorite" filled style={{ color: "#4343d5" }} />
              <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em", color: "#4343d5", textTransform: "uppercase" }}>
                연결 깊어지기
              </span>
            </div>
            <p style={{ fontStyle: "italic", color: "#464555", lineHeight: 1.6 }}>
              &quot;공유된 성찰은 허공에서 동료를 찾는 첫걸음이에요.&quot;
            </p>
            <div style={{ display: "flex", marginTop: "8px", gap: 0 }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "999px", overflow: "hidden", border: "2px solid white", marginRight: "-8px" }}>
                <Image src={peer.avatar} alt="" width={32} height={32} style={{ objectFit: "cover" }} />
              </div>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "999px",
                  border: "2px solid white",
                  background: "#e0e7ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#4343d5",
                }}
              >
                나
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: "-40px",
              bottom: "-40px",
              width: "160px",
              height: "160px",
              borderRadius: "999px",
              background: "rgba(67,67,213,0.05)",
              filter: "blur(48px)",
              pointerEvents: "none",
            }}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <button type="button" style={{ width: "48px", height: "48px", borderRadius: "16px", border: "none", background: "#f2f4f7", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#464555" }} aria-label="추가">
            <MaterialIcon name="add" />
          </button>
          <div className={styles.inputArea}>
            <textarea className={styles.textarea} placeholder="공감을 이어가세요..." rows={1} />
            <button type="button" className={styles.sendBtn} aria-label="전송">
              <MaterialIcon name="send" filled />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
