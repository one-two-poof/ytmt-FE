import type { Metadata } from "next";
import * as styles from "./support.css";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import ActionButtons from "./_components/ActionButtons";
import FaqSection from "./_components/FaqSection";
import SupportFooter from "./_components/SupportFooter";

export const metadata: Metadata = { title: "너도나도 - 고객 지원" };

const AV =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5VziVrVUZg6dFjjZa_CFivTzW2H_2p4xrEXst462Q2KuZZI0USim6PcWxrwxfG2-thyQW9hnM6BPGRovoGJOI6P4ex6cUQgOn06TcBUgZcp9sw_QrfDfNLrpbZOorguqOQgUXyKVs0rzlYGlAXQX0iygAX1KDBBkMY7gWrPWP-frrKdA87VCL6UoXRzYZO0FYlWyxUg0cP2rLz9VVbkCJcEpvx9dCqc29-to1DfPNowuovfRXzCiuBEJ4AP9bMHR9ZF2qCXMQ3vE";

export default function SupportPage() {
  return (
    <div className={styles.page}>
      <Header avatarSrc={AV} />
      <main className={styles.main}>
        <HeroSection />
        <ActionButtons />
        <FaqSection />
        <SupportFooter />
      </main>
    </div>
  );
}
