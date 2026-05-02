import { HTMLAttributes } from "react";
import clsx from "clsx";
import * as styles from "./Avatar.css";

type AvatarSize = "sm" | "md" | "lg" | "xl";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
}

function getInitials(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  className,
  ...props
}: AvatarProps) {
  return (
    <div
      className={clsx(styles.base, styles.sizes[size], className)}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt ?? name ?? ""} className={styles.img} />
      ) : name ? (
        getInitials(name)
      ) : null}
    </div>
  );
}
