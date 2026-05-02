import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "./account.css";

export const metadata: Metadata = {
  title: "너도나도 - 계정 관리",
};

const AV =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCm-Bil1wZ9x09Nyc3_LPkSCeJWzSb8ygbBLhY-fLOtSq7uFLtVDvJfjhWb-7x6mCXlM26GJa3ThUXcijz9ONf6xXPP4mN2aauGZtZcREfkZt7eCqQygxojAk-oMaUGJm_XVkv4aa1PHK7WGZP7S-VRUmns9ArAtYpaezen03p4MDjn-CBlAYbpR-BhhchYriQ44BLmTf9d4wzh2hzlRXZJDwpqt2hYfpGOclKFSCbRloD9O67v_iE-i29H5qCeJ0yxmJYmRjyh1rY";

export default function AccountPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/mypage" aria-label="뒤로" style={{ display: "flex", padding: "8px" }}>
            <MaterialIcon name="arrow_back" style={{ color: "#4343d5" }} />
          </Link>
          <h1 style={{ fontSize: "18px", fontWeight: 600, color: "#4343d5" }}>너도나도</h1>
          <div style={{ width: "40px", display: "flex", justifyContent: "flex-end" }}>
            <Image src={AV} alt="" width={32} height={32} style={{ borderRadius: "999px", border: "2px solid #5d5fef" }} />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
          <div style={{ position: "relative" }}>
            <Image src={AV} alt="" width={128} height={128} style={{ borderRadius: "999px", border: "4px solid white", boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }} />
            <button
              type="button"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "40px",
                height: "40px",
                borderRadius: "999px",
                border: "none",
                background: "#5d5fef",
                color: "#faf7ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
              aria-label="사진 변경"
            >
              <MaterialIcon name="photo_camera" />
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 700 }}>계정 설정</h2>
            <p style={{ color: "#464555", opacity: 0.7, marginTop: "8px" }}>나만의 여정을 다듬어 보세요</p>
          </div>
        </section>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div className={styles.glassCard}>
            <label className={styles.label} htmlFor="display-name">
              표시 이름
            </label>
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <input id="display-name" className={styles.input} type="text" defaultValue="김너도" />
              <MaterialIcon name="edit" style={{ position: "absolute", right: "16px", color: "#c7c4d7" }} />
            </div>
          </div>

          <div className={styles.glassCard}>
            <span className={styles.label}>이메일</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                backgroundColor: "rgba(236,238,241,0.5)",
                borderRadius: "12px",
              }}
            >
              <MaterialIcon name="mail" style={{ color: "#767586" }} />
              <span style={{ color: "#767586", flex: 1 }}>neodo.kim@kakaomail.com</span>
              <MaterialIcon name="lock" filled style={{ fontSize: "16px", color: "#c7c4d7" }} />
            </div>
          </div>

          <div className={styles.glassCard} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "#FEE500",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcon name="chat_bubble" filled style={{ color: "#544600" }} />
              </div>
              <div>
                <p style={{ fontWeight: 600 }}>카카오 연동</p>
                <p style={{ fontSize: "12px", color: "#705d00" }}>연결됨 · 활성</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#fcd400" }} />
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#705d00" }}>동기화됨</span>
            </div>
          </div>
        </div>

        <section style={{ paddingTop: "24px" }}>
          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(199,196,215,0.3), transparent)", marginBottom: "16px" }} />
          <button type="button" className={styles.dangerBtn}>
            <MaterialIcon name="delete_forever" />
            계정 삭제
          </button>
          <p style={{ textAlign: "center", fontSize: "12px", color: "#464555", opacity: 0.5, padding: "0 32px", lineHeight: 1.6, marginTop: "12px" }}>
            계정을 삭제하면 공유한 생각과 연결 기록이 영구적으로 삭제됩니다.
          </p>
        </section>
      </main>
    </div>
  );
}
