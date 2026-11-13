import { createFileRoute, Link } from "@tanstack/react-router";
import { PLANETS } from "@/data/planets";
import { CelestialArt } from "@/components/CelestialArt";
import { Page } from "@/components/ui-cosmic";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/solar-system")({
  head: () => ({
    meta: [
      { title: "Our Solar System — Cosmic Quest" },
      { name: "description", content: "Meet Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune." },
      { property: "og:title", content: "Our Solar System — Cosmic Quest" },
      { property: "og:description", content: "Meet the eight planets orbiting our Sun." },
    ],
  }),
  component: SolarSystem,
});

function SolarSystem() {
  const { progress } = useProgress();
  return (
    <Page>
      <h1 className="text-center text-4xl font-bold sm:text-5xl">Explore Our <span className="text-gradient-cosmic">Solar System</span></h1>
      <p className="mt-2 mb-10 text-center text-lg text-muted-foreground">Tap a planet to visit it. They're in order from the Sun!</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PLANETS.map((p) => (
          <Link
            key={p.id}
            to="/planets/$planetId"
            params={{ planetId: p.id }}
            className="group relative flex flex-col items-center rounded-3xl border-2 border-border bg-gradient-card p-5 text-center transition hover:-translate-y-2 hover:border-primary hover:shadow-glow"
          >
            {progress.explored.includes(p.id) && (
              <span className="absolute top-3 right-3 rounded-full bg-success px-2 py-0.5 text-xs font-bold text-primary-foreground">Explored ✓</span>
            )}
            <span className="text-sm font-bold text-muted-foreground">Planet #{p.order}</span>
            <CelestialArt id={p.id} size={130} className="my-2 transition group-hover:rotate-12" />
            <h2 className="text-2xl font-bold">{p.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.cardFact}</p>
          </Link>
        ))}
      </div>
    </Page>
  );
}
