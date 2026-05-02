import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import * as styles from "./Card.css";

type Variant = "default" | "interactive" | "flat";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(styles.base, styles.variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
