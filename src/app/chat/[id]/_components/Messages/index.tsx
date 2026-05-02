import Image from "next/image";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../chat.css";

interface Props {
  peerName: string;
  peerAvatar: string;
}

export default function Messages({ peerName, peerAvatar }: Props) {
  return (
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
              <Image src={peerAvatar} alt={peerName} width={32} height={32} style={{ objectFit: "cover" }} />
            </div>
            <div style={{ width: "32px", height: "32px", borderRadius: "999px", border: "2px solid white", background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, color: "#4343d5" }}>
              나
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", right: "-40px", bottom: "-40px", width: "160px", height: "160px", borderRadius: "999px", background: "rgba(67,67,213,0.05)", filter: "blur(48px)", pointerEvents: "none" }} />
      </div>
    </main>
  );
}
