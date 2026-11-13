import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import solarImg from "@/assets/solar-system.jpg";
import exoImg from "@/assets/exoplanets.jpg";
import { PLANETS } from "@/data/planets";
import { REWARDS } from "@/data/rewards";
import { useProgress } from "@/lib/progress";
import { CelestialArt } from "@/components/CelestialArt";
import { BigButton, Page } from "@/components/ui-cosmic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cosmic Quest — Explore Space, Planets & Exoplanets" },
      { name: "description", content: "A colourful space adventure for kids: explore the Solar System, discover exoplanets and earn celestial rewards." },
      { property: "og:title", content: "Cosmic Quest — Explore Space, Planets & Exoplanets" },
      { property: "og:description", content: "A colourful space adventure for kids: explore the Solar System, discover exoplanets and earn celestial rewards." },
    ],
  }),
  component: Home,
});

function Home() {
  const { progress } = useProgress();
  // Pick the "planet of the day" after the page loads (uses today's date).
  const [featured, setFeatured] = useState(PLANETS[2]!);
  useEffect(() => {
    const day = Math.floor(Date.now() / 86_400_000);
    setFeatured(PLANETS[day % PLANETS.length]!);
  }, []);
  const earned = new Set(progress.quizHistory.map((r) => r.rewardId));

  return (
    <Page>
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Welcome, <span className="text-gradient-cosmic">Space Explorer!</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
          Blast off to visit planets, discover faraway worlds, take quizzes and collect celestial rewards! 🚀
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <ExploreCard img={solarImg} title="Explore Our Solar System" subtitle="Meet the eight planets orbiting our Sun!" to="/solar-system" button="Explore" variant="cosmic" />
        <ExploreCard img={exoImg} title="Discover Exoplanets" subtitle="Explore mysterious worlds beyond our Solar System!" to="/exoplanets" button="Discover" variant="ocean" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="flex items-center gap-5 rounded-3xl border-2 border-cosmic-orange bg-gradient-card p-6">
          <CelestialArt id={featured.id} size={120} className="shrink-0 animate-float" />
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-cosmic-orange">⭐ Planet of the day</p>
            <h2 className="text-3xl font-bold">{featured.name}</h2>
            <p className="mt-1 text-muted-foreground">{featured.cardFact}</p>
            <Link to="/planets/$planetId" params={{ planetId: featured.id }} className="mt-3 inline-block font-bold text-primary hover:underline">
              Visit {featured.name} →
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border-2 border-cosmic-pink bg-gradient-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">My Planet Collection</h2>
            <span className="rounded-full bg-secondary px-3 py-1 text-sm font-bold">{earned.size}/{REWARDS.length}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {REWARDS.map((r) => (
              <div key={r.id} title={r.name} className={earned.has(r.id) ? "" : "opacity-25 grayscale"}>
                <CelestialArt id={r.id} size={44} />
              </div>
            ))}
          </div>
          <Link to="/collection" className="mt-4 inline-block font-bold text-primary hover:underline">See my collection →</Link>
        </section>
      </div>
    </Page>
  );
}

function ExploreCard({ img, title, subtitle, to, button, variant }: { img: string; title: string; subtitle: string; to: string; button: string; variant: "cosmic" | "ocean" }) {
  return (
    <section className="group overflow-hidden rounded-3xl border-2 border-border bg-gradient-card shadow-glow">
      <div className="overflow-hidden">
        <img src={img} alt={title} width={1280} height={800} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-1 mb-5 text-lg text-muted-foreground">{subtitle}</p>
        <BigButton to={to} variant={variant}>{button} 🚀</BigButton>
      </div>
    </section>
  );
}
