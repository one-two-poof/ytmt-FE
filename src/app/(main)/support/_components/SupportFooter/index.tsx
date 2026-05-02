import Image from "next/image";

const BG_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBCjmIR9vxCy3_yrMueEAaoT6STCjDpGvMX0darGq_qk9vO0uv399YiZxun-4BsMgppAY6fMhOyGixVHa8V1RGCnddQV1DU3wPw1pLPsQkTbrkrs6331pqkbZM6-HvyxbSDDl15pOaioz2k6Gogz7kH_kGlXFVluMC_tmVudb-h8z-BkTYmbSZn_nPd8LYvOLA_Gsq2bpqv-DoOm_6NNoiXwus6S4z9l6qk0nh-zl_Q2zFoZNjC2Us4lu8U-arYrD2O8KTwK50HYZo";

export default function SupportFooter() {
  return (
    <>
      <section style={{ padding: 0, overflow: "hidden", aspectRatio: "4/3", borderRadius: "1.5rem" }}>
        <Image src={BG_IMG} alt="" width={800} height={600} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85, mixBlendMode: "multiply" }} />
      </section>
      <footer style={{ textAlign: "center", paddingTop: "24px", paddingBottom: "40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "12px" }}>
          <a href="#" style={{ fontSize: "13px", fontWeight: 600, color: "#4343d5" }}>이용약관</a>
          <a href="#" style={{ fontSize: "13px", fontWeight: 600, color: "#4343d5" }}>개인정보 처리방침</a>
        </div>
        <p style={{ fontSize: "12px", color: "#767586" }}>너도나도 고객지원 v2.4.0</p>
      </footer>
    </>
  );
}
