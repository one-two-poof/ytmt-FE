import * as styles from "../../login.css";

export default function LogoSection() {
  return (
    <div className={styles.logoSection}>
      <div className={styles.logoGlowWrap}>
        <div className={styles.logoBlur} aria-hidden />
        <h1 className={styles.logoTitle}>너도나도</h1>
      </div>
      <p className={styles.tagline}>나와 같은 생각을 하는 사람을 만나는 곳</p>
    </div>
  );
}
