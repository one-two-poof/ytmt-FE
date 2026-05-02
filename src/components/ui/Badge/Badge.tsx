import { HTMLAttributes } from "react";
import clsx from "clsx";
import * as styles from "./Badge.css";

type BadgeVariant = "primary" | "spark" | "surface" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  withDot?: boolean;
}

export function Badge({
  variant = "surface",
  withDot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(styles.base, styles.variants[variant], className)}
      {...props}
    >
      {withDot && <span className={styles.dot} aria-hidden />}
      {children}
    </span>
  );
}
