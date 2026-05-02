import { BottomNav } from "@/components/shell";

export default function TabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 0,
        width: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          minHeight: 0,
          width: "100%",
          paddingBottom: "calc(80px + env(safe-area-inset-bottom, 0px))",
        }}
      >
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
