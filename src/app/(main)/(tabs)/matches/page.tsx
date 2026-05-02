import Link from "next/link";
import { MaterialIcon } from "@/components/shell";
import * as styles from "./matches.css";
import Header from "./_components/Header";
import MatchCard, { type MatchData } from "./_components/MatchCard";

const PROFILE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBStrJl8w51vyzkm6JKSJtN1Qz1NLMpSVbtdyQYiMIdLBGxahHCbwp04KX9qUJ2eQQVDxzWdqpEUld0aHNSLa2QsyqKh4Lfrm7qoYrNnefEq1n9C-uQl95fpXkH_1wcXqwVvxubt8GuN6kJPmp5C8t4IYJiOmQf0fyx9LzXIm0rrepogCFaN1LW5vYMRBi1Fd2ZsGes3gLY9KzDJKIR4xyKLqro1tIoHyRH1in5gZOfeMyPQrDsHcWfNNGwJcUCObFa9b1hS5EGqVk";

const CONNECTIONS: MatchData[] = [
  {
    id: "1",
    pct: "98%",
    name: "새벽의 여행자",
    time: "3시간 전",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnMAkyFDh3CGNGL0g30XcN1pcDMo7KD1EpysLg-Xd3nGvhCeWv--q2Vts91d4CdqXRDoTHE45dE_K1n96Y34DeN-nN7fc2rC7iBsCkURAkyD8NJfshIVhfClsU7Rw2nEInjzlT9RJejVZip9zwQdnl5jQ05tWP1lg2FyjFtuE5OMIznrYwSYyniXSzVF-Z_mVfB3ttkfthCHmzn1_oOQE-g44iefudGT23gAqwbchPmLNY6ihxvp710BiuEihOK3toC4LgIPLee3o",
    text: '"가끔은 아무 말 없이 흘러가는 강물을 바라보는 것만으로도 충분한 위로가 된다는 걸 깨달아요. 우리 삶도 그저 흐르는 대로 두어도 괜찮지 않을까요?"',
  },
  {
    id: "2",
    pct: "92%",
    name: "오후의 기록",
    time: "5시간 전",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhIf6M-szThWQVCVypYEZSIPo8LxM_TEeI8qVHHBSupgZKURSP1hQTpoSeAq8mmOH3homhmybDjDV3iqwuyODyUb05HOZnGypkG9LzOZKl91a68_CAMgEmqf8Q_Kuv3rsdfy7LtpSsukp_yx4B13jNRigdn24orTjP3gl9v1AHPqOmxJlpjK1LTnRH3wILKDTU2aB-7SRBQKTKCjLv9J-7Zi45BQku3o3x_lO3n04XTuXNh2kiwSiY5CVCAxqPGrjotbJAz1tDvmE",
    text: '"혼자 있는 시간은 외로움이 아니라, 나 자신과 친해지는 소중한 과정인 것 같아요. 요즘은 고요함 속에서 더 많은 것을 듣습니다."',
  },
  {
    id: "3",
    pct: "85%",
    name: "숲속의 공기",
    time: "어제",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnw0hoL46OBFl4hQOLiJ9WEJWFm8vlyRl-ysKWcdynCRZ0effkE_6viKLV3dM39F7iIwfu2gpLQd5Mgor9sdOvFjaBmVwGl3MS5VNPQeIl-25nU31Ln_Wya_JM-FxYjVWhpE9BbCGn2aDW2JPvkBfAcj7naxsaZtJrImLTBW3PspVgRpLXVbryjahVahf3Wv1wa4M212_3LJnfpC3rSOj4DcQJcFdV5Mmp-cflnk0Iaqb944U4lDl_hmOWyVsfHHt3xB5T2Wrjb-I",
    text: '"작은 친절이 모여 세상을 바꿀 수 있다고 믿어요. 오늘 내가 건넨 인사가 누군가에게는 따뜻한 빛이 되었기를 바랍니다."',
  },
];

export default function MatchesPage() {
  return (
    <div className={styles.page}>
      <Header avatarSrc={PROFILE} />
      <main className={styles.main}>
        <section className={styles.sectionLead}>
          <p className={styles.eyebrow}>공감 매칭 결과</p>
          <h2 className={styles.h2}>
            당신의 결에 닿은
            <br />
            마음들입니다.
          </h2>
        </section>
        {CONNECTIONS.map((c) => (
          <MatchCard key={c.id} {...c} />
        ))}
      </main>
      <Link href="/home" className={styles.fab} aria-label="문장 작성">
        <MaterialIcon name="edit" />
      </Link>
    </div>
  );
}
