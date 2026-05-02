import { Button } from "@/components/ui";
import { MaterialIcon } from "@/components/shell";

export default function ActionButtons() {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Button variant="primary" size="lg" fullWidth>
        <MaterialIcon name="chat_bubble" />
        1:1 문의하기
      </Button>
      <Button variant="ghost" size="lg" fullWidth>
        <MaterialIcon name="draw" />
        의견 보내기
      </Button>
    </section>
  );
}
