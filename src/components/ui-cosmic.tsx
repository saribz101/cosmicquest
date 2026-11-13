// Small reusable building blocks used across pages.
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Page({ children }: { children: ReactNode }) {
  return <main className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:py-12">{children}</main>;
}

export function InfoCard({ icon, title, children, tone = "purple" }: { icon: string; title: string; children: ReactNode; tone?: "purple" | "blue" | "pink" | "orange" }) {
  const ring = { purple: "border-cosmic-purple", blue: "border-cosmic-blue", pink: "border-cosmic-pink", orange: "border-cosmic-orange" }[tone];
  return (
    <section className={`rounded-3xl border-2 ${ring} bg-gradient-card p-5 transition hover:-translate-y-1`}>
      <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold">
        <span className="text-2xl" aria-hidden>{icon}</span>
        {title}
      </h3>
      <div className="leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function BigButton({ to, params, children, variant = "cosmic" }: { to: string; params?: Record<string, string>; children: ReactNode; variant?: "cosmic" | "ocean" }) {
  return (
    <Link
      to={to}
      params={params as never}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-display text-lg font-semibold text-primary-foreground shadow-glow transition hover:scale-105 active:scale-95 ${variant === "cosmic" ? "bg-gradient-cosmic" : "bg-gradient-ocean"}`}
    >
      {children}
    </Link>
  );
}
