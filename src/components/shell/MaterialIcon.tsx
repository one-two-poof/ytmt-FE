import type { CSSProperties } from "react";
import clsx from "clsx";

type MaterialIconProps = {
  name: string;
  filled?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function MaterialIcon({ name, filled = false, className, style }: MaterialIconProps) {
  return (
    <span
      className={clsx("material-symbols-outlined", className)}
      style={{
        fontVariationSettings: filled ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : undefined,
        ...style,
      }}
      aria-hidden
    >
      {name}
    </span>
  );
}
