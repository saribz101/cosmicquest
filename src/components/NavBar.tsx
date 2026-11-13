import { Link } from "@tanstack/react-router";
import { Rocket } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/solar-system", label: "Solar System" },
  { to: "/exoplanets", label: "Exoplanets" },
  { to: "/collection", label: "My Collection" },
] as const;

export function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-cosmic shadow-glow">
            <Rocket className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-display text-2xl font-bold text-gradient-cosmic">Cosmic Quest</span>
        </Link>
        <ul className="flex flex-wrap gap-1">
          {LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-3 py-2 text-sm font-bold text-muted-foreground transition hover:bg-secondary hover:text-foreground sm:px-4"
                activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
