import Image from "next/image";
import Link from "next/link";
import * as styles from "./chats.css";

const THREADS = [
  {
    id: "1",
    name: "새벽의 여행자",
    last: "안녕하세요! 남겨주신 문장 보고 정말 공감이 많이 돼서 메시지 드려요.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnMAkyFDh3CGNGL0g30XcN1pcDMo7KD1EpysLg-Xd3nGvhCeWv--q2Vts91d4CdqXRDoTHE45dE_K1n96Y34DeN-nN7fc2rC7iBsCkURAkyD8NJfshIVhfClsU7Rw2nEInjzlT9RJejVZip9zwQdnl5jQ05tWP1lg2FyjFtuE5OMIznrYwSYyniXSzVF-Z_mVfB3ttkfthCHmzn1_oOQE-g44iefudGT23gAqwbchPmLNY6ihxvp710BiuEihOK3toC4LgIPLee3o",
  },
  {
    id: "2",
    name: "오후의 기록",
    last: "혼자 있는 시간 이야기, 저도 요즘 비슷하게 느껴요.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhIf6M-szThWQVCVypYEZSIPo8LxM_TEeI8qVHHBSupgZKURSP1hQTpoSeAq8mmOH3homhmybDjDV3iqwuyODyUb05HOZnGypkG9LzOZKl91a68_CAMgEmqf8Q_Kuv3rsdfy7LtpSsukp_yx4B13jNRigdn24orTjP3gl9v1AHPqOmxJlpjK1LTnRH3wILKDTU2aB-7SRBQKTKCjLv9J-7Zi45BQku3o3x_lO3n04XTuXNh2kiwSiY5CVCAxqPGrjotbJAz1tDvmE",
  },
];

export default function ChatsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>채팅</h1>
      </header>
      <main className={styles.main}>
        {THREADS.map((t) => (
          <Link key={t.id} href={`/chat/${t.id}`} className={styles.row}>
            <div className={styles.avatar}>
              <Image src={t.img} alt="" width={52} height={52} style={{ objectFit: "cover" }} />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <p style={{ fontWeight: 700, marginBottom: "4px" }}>{t.name}</p>
              <p className={styles.preview}>{t.last}</p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
