import Image from "next/image";
import { MaterialIcon } from "@/components/shell";

interface Props {
  avatarSrc: string;
}

export default function ProfileSection({ avatarSrc }: Props) {
  return (
    <section style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
      <div style={{ position: "relative" }}>
        <Image src={avatarSrc} alt="" width={128} height={128} style={{ borderRadius: "999px", border: "4px solid white", boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }} />
        <button
          type="button"
          aria-label="사진 변경"
          style={{ position: "absolute", bottom: 0, right: 0, width: "40px", height: "40px", borderRadius: "999px", border: "none", background: "#5d5fef", color: "#faf7ff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
        >
          <MaterialIcon name="photo_camera" />
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700 }}>계정 설정</h2>
        <p style={{ color: "#464555", opacity: 0.7, marginTop: "8px" }}>나만의 여정을 다듬어 보세요</p>
      </div>
    </section>
  );
}
