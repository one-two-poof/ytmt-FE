"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MaterialIcon } from "./MaterialIcon";
import * as styles from "./BottomNav.css";

const tabs = [
  { href: "/home", label: "홈", icon: "home" },
  { href: "/matches", label: "공감", icon: "diversity_1" },
  { href: "/chats", label: "채팅", icon: "forum" },
  { href: "/mypage", label: "마이", icon: "person" },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="주요 메뉴">
      {tabs.map(({ href, label, icon }) => {
        const active =
          pathname === href || (href === "/chats" && pathname.startsWith("/chat"));
        return (
          <Link
            key={href}
            href={href}
            className={clsx(active ? styles.linkActive : styles.link)}
            prefetch
          >
            <MaterialIcon name={icon} filled={active && icon === "person"} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
