import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { getPlanet } from "@/data/planets";
import { CelestialArt } from "@/components/CelestialArt";
import { BigButton, InfoCard, Page } from "@/components/ui-cosmic";
import { markExplored } from "@/lib/progress";

export const Route = createFileRoute("/planets/$planetId")({
  loader: ({ params }) => {
    const planet = getPlanet(params.planetId);
    if (!planet) throw notFound();
    return { planet };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.planet.name} — Cosmic Quest` },
          { name: "description", content: loaderData.planet.cardFact },
          { property: "og:title", content: `${loaderData.planet.name} — Cosmic Quest` },
          { property: "og:description", content: loaderData.planet.cardFact },
        ]
      : [{ title: "Planet not found — Cosmic Quest" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <Page><p className="text-center text-xl">That planet isn't in our Solar System! <Link to="/solar-system" className="text-primary underline">Back to the planets</Link></p></Page>
  ),
  component: PlanetPage,
});

function PlanetPage() {
  const { planet: p } = Route.useLoaderData();
  useEffect(() => markExplored(p.id), [p.id]);

  return (
    <Page>
      <Link to="/solar-system" className="font-bold text-muted-foreground hover:text-foreground">← All planets</Link>

      <header className="mt-4 flex flex-col items-center gap-6 rounded-3xl bg-gradient-card p-8 text-center md:flex-row md:text-left">
        <CelestialArt id={p.id} size={200} className="animate-float" />
        <div>
          <p className="font-bold text-cosmic-orange">Planet #{p.order} from the Sun · {p.type}</p>
          <h1 className="text-5xl font-bold sm:text-6xl">{p.name}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{p.cardFact}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
            <Stat label="Day" value={p.dayLength} />
            <Stat label="Year" value={p.yearLength} />
            <Stat label="Moons" value={p.moons} />
          </div>
        </div>
      </header>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <InfoCard icon="🏷️" title={`Why is it named ${p.name}?`} tone="pink">{p.nameOrigin}</InfoCard>
        <InfoCard icon="🔭" title="Discovery and history" tone="blue">{p.discovery}</InfoCard>
        <InfoCard icon="🪨" title="What is it made of?" tone="orange">{p.madeOf}</InfoCard>
        <InfoCard icon="📏" title="Size compared with Earth" tone="purple">
          <p>{p.sizeVsEarth} — about {p.diameterKm.toLocaleString("en-US")} km across.</p>
          <SizeCompare id={p.id} ratio={p.sizeRatio} />
        </InfoCard>
        <InfoCard icon="🌡️" title="Temperature" tone="orange">{p.temperature}</InfoCard>
        <InfoCard icon="💨" title="Atmosphere" tone="blue">{p.atmosphere}</InfoCard>
        <InfoCard icon="🧑‍🚀" title="Could humans live there?" tone="pink">{p.humans}</InfoCard>
        <InfoCard icon="🛰️" title="Have spacecraft visited it?" tone="purple">{p.spacecraft}</InfoCard>
      </div>

      <section className="mt-5 rounded-3xl border-2 border-cosmic-blue bg-gradient-ocean p-6 text-primary-foreground">
        <h3 className="text-2xl font-semibold">⏱️ How long did the {p.mission.name} trip take?</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div><p className="text-sm font-bold opacity-80">Launched</p><p className="text-lg font-bold">{p.mission.launched}</p></div>
          <div><p className="text-sm font-bold opacity-80">Arrived</p><p className="text-lg font-bold">{p.mission.arrived}</p></div>
          <div><p className="text-sm font-bold opacity-80">Travel time</p><p className="text-lg font-bold">{p.mission.duration}</p></div>
        </div>
      </section>

      <section className="mt-5 rounded-3xl border-2 border-cosmic-yellow bg-gradient-card p-6">
        <h3 className="text-2xl font-semibold">🤩 Amazing facts</h3>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {p.funFacts.map((f) => (
            <li key={f} className="rounded-2xl bg-secondary p-4">✨ {f}</li>
          ))}
        </ul>
      </section>

      <p className="mt-4 text-center text-sm text-muted-foreground">Numbers marked "about" are rounded averages or estimates from NASA.</p>

      <div className="mt-8 text-center">
        <BigButton to="/quiz/$planetId" params={{ planetId: p.id }}>🧠 Take the {p.name} Quiz</BigButton>
      </div>
    </Page>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <span className="rounded-full bg-secondary px-3 py-1 text-sm">
      <b>{label}:</b> {value}
    </span>
  );
}

// Draws the planet and Earth side by side at their real relative sizes.
function SizeCompare({ id, ratio }: { id: string; ratio: number }) {
  const max = 140;
  const big = Math.max(ratio, 1);
  const planetSize = Math.max(14, (ratio / big) * max);
  const earthSize = Math.max(8, (1 / big) * max);
  return (
    <div className="mt-3 flex items-end justify-center gap-6">
      <figure className="text-center"><CelestialArt id={id} size={planetSize} /><figcaption className="text-xs">This planet</figcaption></figure>
      {id !== "earth" && <figure className="text-center"><CelestialArt id="earth" size={earthSize} /><figcaption className="text-xs">Earth</figcaption></figure>}
    </div>
  );
}
