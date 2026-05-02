import clsx from "clsx";
import * as styles from "./Spinner.css";

type SpinnerSize = "sm" | "md" | "lg";

interface SpinnerProps {
  size?: SpinnerSize;
  fullScreen?: boolean;
  className?: string;
  label?: string;
}

export function Spinner({
  size = "md",
  fullScreen = false,
  className,
  label = "로딩 중",
}: SpinnerProps) {
  const spinner = (
    <span
      role="status"
      aria-label={label}
      className={clsx(styles.base, styles.sizes[size], className)}
    />
  );

  if (fullScreen) {
    return (
      <div className={clsx(styles.wrapper, styles.fullScreen)}>{spinner}</div>
    );
  }

  return <div className={styles.wrapper}>{spinner}</div>;
}
