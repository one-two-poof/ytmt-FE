import type { Metadata } from "next";
import * as styles from "./chat.css";
import ChatHeader from "./_components/ChatHeader";
import Messages from "./_components/Messages";
import MessageInput from "./_components/MessageInput";

const PEERS: Record<string, { name: string; avatar: string }> = {
  "1": {
    name: "새벽의 여행자",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJZCGSZOUt9iqMFDoOT7e550H3rIo8p13RiGyWeFK92Oqd79p90VvKJKKqyNJC3TNJq1jyo1bhewG85FCi77BSdDoTMusqd10kt55brBkhCxYYMgNEUQsCqNijwXfzUXtvhvHZ7ED53v-qlGdcp88BzNFgp9iW-w9pgTiPBC8HzygIJduEbH0x59n-lqqeACkj7rH2PuTvNbQf-vCdQUtnnTpvhcUd1QpU1jtk890v6509Ro9_g25D9kSebn82UOGjFBPY_QLLoyA",
  },
  "2": {
    name: "오후의 기록",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhIf6M-szThWQVCVypYEZSIPo8LxM_TEeI8qVHHBSupgZKURSP1hQTpoSeAq8mmOH3homhmybDjDV3iqwuyODyUb05HOZnGypkG9LzOZKl91a68_CAMgEmqf8Q_Kuv3rsdfy7LtpSsukp_yx4B13jNRigdn24orTjP3gl9v1AHPqOmxJlpjK1LTnRH3wILKDTU2aB-7SRBQKTKCjLv9J-7Zi45BQku3o3x_lO3n04XTuXNh2kiwSiY5CVCAxqPGrjotbJAz1tDvmE",
  },
};

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const peer = PEERS[id] ?? PEERS["1"];
  return { title: `${peer.name} · 너도나도` };
}

export default async function ChatPage({ params }: Props) {
  const { id } = await params;
  const peer = PEERS[id] ?? PEERS["1"];

  return (
    <div className={styles.page}>
      <ChatHeader name={peer.name} avatar={peer.avatar} />
      <Messages peerName={peer.name} peerAvatar={peer.avatar} />
      <MessageInput />
    </div>
  );
}
