import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { DATA_SOURCE_LABEL, searchExoplanets } from "@/lib/exoplanetSource";
import { SAMPLE_EXOPLANETS } from "@/data/exoplanets";
import { CelestialArt } from "@/components/CelestialArt";
import { Page } from "@/components/ui-cosmic";

export const Route = createFileRoute("/exoplanets/")({
  head: () => ({
    meta: [
      { title: "Beyond Our Solar System — Exoplanets — Cosmic Quest" },
      { name: "description", content: "Discover real exoplanets orbiting other stars, like Proxima Centauri b and TRAPPIST-1e." },
      { property: "og:title", content: "Beyond Our Solar System — Cosmic Quest" },
      { property: "og:description", content: "Discover real exoplanets orbiting other stars." },
    ],
  }),
  component: Exoplanets,
});

function Exoplanets() {
  const [query, setQuery] = useState("");
  const results = searchExoplanets(query);
  return (
    <Page>
      <h1 className="text-center text-4xl font-bold sm:text-5xl">Beyond Our <span className="text-gradient-cosmic">Solar System</span></h1>

      <section className="mx-auto mt-6 max-w-3xl rounded-3xl border-2 border-cosmic-blue bg-gradient-card p-6">
        <h2 className="text-2xl font-semibold">🌌 What is an exoplanet?</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          An <b className="text-foreground">exoplanet</b> is a planet that orbits a star other than our Sun. Most are so far away that we can't see them directly.
          Instead, scientists watch for a star getting slightly dimmer when a planet passes in front (the <b className="text-foreground">transit</b> method),
          or wobbling as a planet tugs on it (the <b className="text-foreground">radial velocity</b> method). Astronomers have confirmed more than 5,000 exoplanets!
        </p>
      </section>

      <div className="mx-auto mt-8 max-w-xl">
        <label className="flex items-center gap-3 rounded-full border-2 border-border bg-card px-5 py-3 focus-within:border-primary">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search exoplanets or stars by name…" className="w-full bg-transparent text-lg outline-none placeholder:text-muted-foreground" aria-label="Search exoplanets" />
        </label>
        <p className="mt-2 text-center text-xs text-muted-foreground">{DATA_SOURCE_LABEL}</p>
      </div>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">⭐ Featured exoplanets</h2>
      {results.length === 0 ? (
        <p className="rounded-3xl bg-gradient-card p-6 text-center text-muted-foreground">No exoplanets match "{query}" in our sample collection yet.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <Link key={p.id} to="/exoplanets/$exoId" params={{ exoId: p.id }} className="group rounded-3xl border-2 border-border bg-gradient-card p-5 transition hover:-translate-y-2 hover:border-primary hover:shadow-glow">
              <CelestialArt id={p.id} exoIndex={SAMPLE_EXOPLANETS.indexOf(p)} size={100} className="mx-auto transition group-hover:rotate-12" />
              <h3 className="mt-2 text-center text-2xl font-bold">{p.name}</h3>
              <p className="text-center text-sm text-muted-foreground">Star: {p.hostStar}</p>
              <p className="mt-3 text-sm">{p.summary}</p>
              <p className="mt-3 text-xs font-bold text-cosmic-orange">Found in {p.discovered} · {p.distanceLightYears} light-years away</p>
            </Link>
          ))}
        </div>
      )}
    </Page>
  );
}
