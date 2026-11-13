import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getExoplanet, DATA_SOURCE_LABEL } from "@/lib/exoplanetSource";
import { SAMPLE_EXOPLANETS } from "@/data/exoplanets";
import { CelestialArt } from "@/components/CelestialArt";
import { InfoCard, Page } from "@/components/ui-cosmic";

export const Route = createFileRoute("/exoplanets/$exoId")({
  loader: ({ params }) => {
    const planet = getExoplanet(params.exoId);
    if (!planet) throw notFound();
    return { planet };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.planet.name} — Exoplanet — Cosmic Quest` },
          { name: "description", content: loaderData.planet.summary },
          { property: "og:title", content: `${loaderData.planet.name} — Cosmic Quest` },
          { property: "og:description", content: loaderData.planet.summary },
        ]
      : [{ title: "Exoplanet not found — Cosmic Quest" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <Page><p className="text-center text-xl">We couldn't find that exoplanet. <Link to="/exoplanets" className="text-primary underline">Back to exoplanets</Link></p></Page>
  ),
  component: ExoPage,
});

function ExoPage() {
  const { planet: p } = Route.useLoaderData();
  return (
    <Page>
      <Link to="/exoplanets" className="font-bold text-muted-foreground hover:text-foreground">← All exoplanets</Link>
      <header className="mt-4 flex flex-col items-center gap-6 rounded-3xl bg-gradient-card p-8 text-center md:flex-row md:text-left">
        <CelestialArt id={p.id} exoIndex={SAMPLE_EXOPLANETS.indexOf(p)} size={180} className="animate-float" />
        <div>
          <p className="font-bold text-cosmic-orange">{p.kind}</p>
          <h1 className="text-4xl font-bold sm:text-5xl">{p.name}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{p.summary}</p>
          <p className="mt-2 text-xs text-muted-foreground">Picture is an artist's idea — nobody has photographed this planet's surface.</p>
        </div>
      </header>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard icon="⭐" title="Host star" tone="orange">{p.hostStar}</InfoCard>
        <InfoCard icon="📍" title="Distance" tone="blue">{p.distanceLightYears} light-years from Earth</InfoCard>
        <InfoCard icon="📅" title="Discovered" tone="pink">{p.discovered}</InfoCard>
        <InfoCard icon="🔭" title="How it was found" tone="purple">{p.method}</InfoCard>
        <InfoCard icon="🔄" title="One orbit (its year)" tone="orange">{p.orbitDays} Earth days</InfoCard>
        <InfoCard icon="📏" title="Size" tone="blue">{p.size}</InfoCard>
      </div>
      <section className="mt-5 rounded-3xl border-2 border-cosmic-yellow bg-gradient-card p-6">
        <h2 className="text-2xl font-semibold">🤩 Cool facts</h2>
        <ul className="mt-3 grid gap-3">
          {p.facts.map((f) => <li key={f} className="rounded-2xl bg-secondary p-4">✨ {f}</li>)}
        </ul>
      </section>
      <p className="mt-4 text-center text-xs text-muted-foreground">{DATA_SOURCE_LABEL}. Values are rounded; "estimate" means scientists aren't certain yet.</p>
    </Page>
  );
}
