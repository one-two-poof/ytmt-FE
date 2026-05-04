import Image from "next/image";
import { MaterialIcon } from "@/components/shell";
import * as styles from "../../mypage.css";

interface Props {
  avatarSrc: string | null;
  name: string;
  email: string;
}

export default function Profile({ avatarSrc, name, email }: Props) {
  return (
    <section className={styles.profileSection}>
      <div className={styles.profileImgWrap}>
        <div className={styles.profileImg}>
          {avatarSrc ? (
            <Image src={avatarSrc} alt="" width={128} height={128} style={{ objectFit: "cover" }} />
          ) : (
            <div style={{ width: 128, height: 128, background: "#e8e8f0", borderRadius: "50%" }} />
          )}
        </div>
        <button type="button" className={styles.editFab} aria-label="프로필 수정">
          <MaterialIcon name="edit" style={{ fontSize: "18px" }} />
        </button>
      </div>
      <div>
        <h2 style={{ fontSize: "32px", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em" }}>{name}</h2>
        <p style={{ color: "#464555", marginTop: "4px" }}>{email}</p>
      </div>
    </section>
  );
}
