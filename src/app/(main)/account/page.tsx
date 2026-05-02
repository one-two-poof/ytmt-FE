import type { Metadata } from "next";
import * as styles from "./account.css";
import Header from "./_components/Header";
import ProfileSection from "./_components/ProfileSection";
import AccountSettings from "./_components/AccountSettings";
import DangerZone from "./_components/DangerZone";

export const metadata: Metadata = { title: "너도나도 - 계정 관리" };

const AV =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCm-Bil1wZ9x09Nyc3_LPkSCeJWzSb8ygbBLhY-fLOtSq7uFLtVDvJfjhWb-7x6mCXlM26GJa3ThUXcijz9ONf6xXPP4mN2aauGZtZcREfkZt7eCqQygxojAk-oMaUGJm_XVkv4aa1PHK7WGZP7S-VRUmns9ArAtYpaezen03p4MDjn-CBlAYbpR-BhhchYriQ44BLmTf9d4wzh2hzlRXZJDwpqt2hYfpGOclKFSCbRloD9O67v_iE-i29H5qCeJ0yxmJYmRjyh1rY";

export default function AccountPage() {
  return (
    <div className={styles.page}>
      <Header avatarSrc={AV} />
      <main className={styles.main}>
        <ProfileSection avatarSrc={AV} />
        <AccountSettings displayName="김너도" email="neodo.kim@kakaomail.com" />
        <DangerZone />
      </main>
    </div>
  );
}
