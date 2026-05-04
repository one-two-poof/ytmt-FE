import * as styles from "./home.css";
import Header from "./_components/Header";
import SentenceForm from "./_components/SentenceForm";
import QuoteSection from "./_components/QuoteSection";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <SentenceForm />
        <QuoteSection />
      </main>
    </div>
  );
}
