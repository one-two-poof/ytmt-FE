import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "./mypage.css";

const PROFILE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAf5GMkpJRT8k1ZpUxfR9rrwmCF3in-b7n4VzJ0WP1ZPPPKA974O7K4ZL3qCX3l_CQdOuYRywwb9JlCFTCF-f9yDSx0c_lWW_jKeMcrJNt65JUpQrQAPbFY30WIaohi8Pb7_QY1bZw4GxJXLYD2UDP2g9qM6bXFo_K6rNyinK4ujiCz6kTo3MtshhJO27Em04S9JNVEZl6MV3MWbBVyaK9TcdUK54PDoQuIeSj0_XO3YTXZSZrBwAhj8kqToda36EPp1JdgCxDur98";

export default function MyPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button type="button" aria-label="메뉴">
          <MaterialIcon name="menu" style={{ color: "#4343d5" }} />
        </button>
        <h1 className={styles.headerTitle}>마이페이지</h1>
        <div className={styles.avatarSm}>
          <Image src={PROFILE} alt="" width={40} height={40} style={{ objectFit: "cover" }} />
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.profileSection}>
          <div className={styles.profileImgWrap}>
            <div className={styles.profileImg}>
              <Image src={PROFILE} alt="" width={128} height={128} style={{ objectFit: "cover" }} />
            </div>
            <button type="button" className={styles.editFab} aria-label="프로필 수정">
              <MaterialIcon name="edit" style={{ fontSize: "18px" }} />
            </button>
          </div>
          <div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              김너도
            </h2>
            <p style={{ color: "#464555", marginTop: "4px" }}>neodo.kim@kakaomail.com</p>
          </div>
        </section>

        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#464555", marginBottom: "4px" }}>
              등록한 문장
            </p>
            <p style={{ fontSize: "24px", fontWeight: 600, color: "#4343d5" }}>24</p>
          </div>
          <div className={styles.statCard}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#464555", marginBottom: "4px" }}>
              찾은 공감
            </p>
            <p style={{ fontSize: "24px", fontWeight: 600, color: "#705d00" }}>158</p>
          </div>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: "8px",
              paddingRight: "8px",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: 700 }}>내가 등록한 문장들</h3>
            <span style={{ color: "#4343d5", fontSize: "13px", fontWeight: 600 }}>전체보기</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div className={styles.sentenceCard}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    backgroundColor: "rgba(112,93,0,0.05)",
                    padding: "4px 8px",
                    borderRadius: "999px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <MaterialIcon name="auto_awesome" style={{ fontSize: "14px" }} />
                  오늘의 생각
                </span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button type="button" aria-label="수정">
                    <MaterialIcon name="edit" style={{ fontSize: "20px", color: "#464555" }} />
                  </button>
                  <button type="button" aria-label="삭제">
                    <MaterialIcon name="delete" style={{ fontSize: "20px", color: "#464555" }} />
                  </button>
                </div>
              </div>
              <p style={{ lineHeight: 1.6, fontStyle: "italic" }}>
                &quot;가끔은 아무것도 하지 않는 시간이 우리를 가장 멀리 데려다주기도 합니다.&quot;
              </p>
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "#464555",
                }}
              >
                <span>2023.11.24</span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <MaterialIcon name="diversity_1" filled style={{ fontSize: "14px", color: "#705d00" }} />
                  12명의 공감
                </span>
              </div>
            </div>

            <div className={styles.sentenceCard}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#464555",
                    backgroundColor: "#eceef1",
                    padding: "4px 8px",
                    borderRadius: "999px",
                  }}
                >
                  과거 기록
                </span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button type="button" aria-label="수정">
                    <MaterialIcon name="edit" style={{ fontSize: "20px", color: "#464555" }} />
                  </button>
                  <button type="button" aria-label="삭제">
                    <MaterialIcon name="delete" style={{ fontSize: "20px", color: "#464555" }} />
                  </button>
                </div>
              </div>
              <p style={{ lineHeight: 1.6 }}>
                &quot;비 오는 날 창가에 앉아 마시는 따뜻한 차 한 잔의 위로를 믿어요.&quot;
              </p>
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "#464555",
                }}
              >
                <span>2023.11.20</span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <MaterialIcon name="diversity_1" filled style={{ fontSize: "14px", color: "#705d00" }} />
                  45명의 공감
                </span>
              </div>
            </div>
          </div>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 700, paddingLeft: "8px" }}>설정</h3>
          <nav className={styles.menu}>
            <Link href="#" className={styles.menuRow}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div className={styles.menuIconWrap} style={{ backgroundColor: "rgba(225,224,255,0.5)" }}>
                  <MaterialIcon name="notifications" style={{ color: "#4343d5" }} />
                </div>
                <span style={{ fontWeight: 500 }}>알림 설정</span>
              </div>
              <MaterialIcon name="chevron_right" style={{ color: "#464555" }} />
            </Link>
            <Link href="/account" className={styles.menuRow}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div className={styles.menuIconWrap} style={{ backgroundColor: "#e6e8eb" }}>
                  <MaterialIcon name="account_circle" style={{ color: "#464555" }} />
                </div>
                <span style={{ fontWeight: 500 }}>계정 관리</span>
              </div>
              <MaterialIcon name="chevron_right" style={{ color: "#464555" }} />
            </Link>
            <Link href="/support" className={styles.menuRow}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div className={styles.menuIconWrap} style={{ backgroundColor: "#e6e8eb" }}>
                  <MaterialIcon name="help" style={{ color: "#464555" }} />
                </div>
                <span style={{ fontWeight: 500 }}>고객 지원</span>
              </div>
              <MaterialIcon name="chevron_right" style={{ color: "#464555" }} />
            </Link>
            <button type="button" className={styles.logoutBtn}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  className={styles.menuIconWrap}
                  style={{ backgroundColor: "rgba(255,218,214,0.4)" }}
                >
                  <MaterialIcon name="logout" style={{ color: "#ba1a1a" }} />
                </div>
                <span style={{ fontWeight: 500, color: "#ba1a1a" }}>로그아웃</span>
              </div>
            </button>
          </nav>
        </section>
      </main>
    </div>
  );
}
