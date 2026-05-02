import * as styles from "./home.css";
import Header from "./_components/Header";
import SentenceForm from "./_components/SentenceForm";
import QuoteSection from "./_components/QuoteSection";

const AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEnyFoJuVaq7JvuirZv2ECOti8PPczsVJCqiDaC5T_ziVX5xkrPzsHZuMplaUi2RmRkcBaM3Y_ylzRjx48NRz0lF-Lf3VpGGEvXdEe9UX92cMRhzwzRGpzlD0stbXOg2eth1kXYoIViymQjlTEvF_S5ddRlCuJhZKzvHWKCIapg3KOEYQS8Y4rM2g7X1GSK5bnIWF7h2zcSokzq3kMdX7C3ZFCL5HVb6o6GnbyqxO8_Jvh7sWJt8tnHa065IC1WTelpg6sfyfbcJU";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header avatarSrc={AVATAR} />
      <main className={styles.main}>
        <SentenceForm />
        <QuoteSection />
      </main>
    </div>
  );
}
