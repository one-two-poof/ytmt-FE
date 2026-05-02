import { Badge, Card } from "@/components/ui";
import { MaterialIcon } from "@/components/shell";

export interface SentenceItem {
  id: string;
  type: "today" | "past";
  text: string;
  date: string;
  empathyCount: number;
}

interface Props {
  sentences: SentenceItem[];
}

export default function MySentences({ sentences }: Props) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "8px", paddingRight: "8px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: 700 }}>내가 등록한 문장들</h3>
        <span style={{ color: "#4343d5", fontSize: "13px", fontWeight: 600 }}>전체보기</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {sentences.map((s) => (
          <Card key={s.id} style={{ position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
              {s.type === "today" ? (
                <Badge variant="spark">
                  <MaterialIcon name="auto_awesome" style={{ fontSize: "14px" }} />
                  오늘의 생각
                </Badge>
              ) : (
                <Badge variant="surface">과거 기록</Badge>
              )}
              <div style={{ display: "flex", gap: "8px" }}>
                <button type="button" aria-label="수정">
                  <MaterialIcon name="edit" style={{ fontSize: "20px", color: "#464555" }} />
                </button>
                <button type="button" aria-label="삭제">
                  <MaterialIcon name="delete" style={{ fontSize: "20px", color: "#464555" }} />
                </button>
              </div>
            </div>
            <p style={{ lineHeight: 1.6, fontStyle: s.type === "today" ? "italic" : "normal" }}>
              &quot;{s.text}&quot;
            </p>
            <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#464555" }}>
              <span>{s.date}</span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <MaterialIcon name="diversity_1" filled style={{ fontSize: "14px", color: "#705d00" }} />
                {s.empathyCount}명의 공감
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
