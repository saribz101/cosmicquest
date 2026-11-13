import { createFileRoute, Link } from "@tanstack/react-router";
import { PLANETS, getPlanet } from "@/data/planets";
import { REWARDS, getRewardById } from "@/data/rewards";
import { bestScoresByReward, resetProgress, useProgress } from "@/lib/progress";
import { CelestialArt } from "@/components/CelestialArt";
import { Page } from "@/components/ui-cosmic";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "My Planet Collection — Cosmic Quest" },
      { name: "description", content: "See the celestial rewards you've earned, planets you've explored and your quiz history." },
      { property: "og:title", content: "My Planet Collection — Cosmic Quest" },
      { property: "og:description", content: "Your celestial rewards and space exploration progress." },
    ],
  }),
  component: Collection,
});

function Collection() {
  const { progress, loaded } = useProgress();
  const best = bestScoresByReward(progress.quizHistory);
  const quizzedPlanets = new Set(progress.quizHistory.map((r) => r.planetId));
  const collected = REWARDS.filter((r) => best[r.id] !== undefined).length;
  // Overall progress: exploring each planet + finishing each planet's quiz.
  const overall = Math.round(((progress.explored.length + quizzedPlanets.size) / (PLANETS.length * 2)) * 100);

  if (!loaded) return <Page><p className="text-center">Loading your collection…</p></Page>;

  return (
    <Page>
      <h1 className="text-center text-4xl font-bold sm:text-5xl">My <span className="text-gradient-cosmic">Planet Collection</span></h1>

      <section className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-3">
        <Stat label="Rewards collected" value={`${collected} / ${REWARDS.length}`} />
        <Stat label="Planets explored" value={`${progress.explored.length} / ${PLANETS.length}`} />
        <Stat label="Quizzes taken" value={`${progress.quizHistory.length}`} />
      </section>
      <div className="mx-auto mt-4 max-w-3xl">
        <p className="mb-1 font-bold">Journey progress: {overall}%</p>
        <div className="h-4 overflow-hidden rounded-full bg-muted"><div className="h-full bg-gradient-cosmic" style={{ width: `${overall}%` }} /></div>
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">🏆 Celestial rewards</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {REWARDS.map((r) => {
          const has = best[r.id] !== undefined;
          return (
            <div key={r.id} className={`rounded-3xl border-2 p-4 text-center ${has ? "border-cosmic-yellow bg-gradient-card shadow-glow" : "border-border bg-card"}`}>
              <CelestialArt id={r.id} size={90} className={`mx-auto ${has ? "" : "opacity-25 grayscale"}`} />
              <h3 className="mt-2 text-lg font-bold">{r.name}</h3>
              <p className="text-xs text-muted-foreground capitalize">{r.kind} · {r.minPercent}–{r.maxPercent}%</p>
              <p className={`mt-2 text-sm font-bold ${has ? "text-success" : "text-muted-foreground"}`}>
                {has ? `✓ Collected · best ${best[r.id]}%` : "🔒 Not yet collected"}
              </p>
            </div>
          );
        })}
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">🪐 Planets explored</h2>
      <div className="flex flex-wrap gap-3">
        {PLANETS.map((p) => {
          const seen = progress.explored.includes(p.id);
          return (
            <Link key={p.id} to="/planets/$planetId" params={{ planetId: p.id }} className={`flex items-center gap-2 rounded-full border-2 px-3 py-1 ${seen ? "border-success" : "border-border opacity-60"}`}>
              <CelestialArt id={p.id} size={32} /> <span className="font-bold">{p.name}</span> {seen && "✓"}
            </Link>
          );
        })}
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">📜 Quiz history</h2>
      {progress.quizHistory.length === 0 ? (
        <p className="rounded-3xl bg-gradient-card p-6 text-center text-muted-foreground">
          No quizzes yet! <Link to="/solar-system" className="font-bold text-primary underline">Pick a planet</Link> and take its quiz.
        </p>
      ) : (
        <ul className="grid gap-2">
          {progress.quizHistory.map((r) => (
            <li key={r.date} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-gradient-card p-3">
              <span className="font-bold">{getPlanet(r.planetId)?.name} Quiz</span>
              <span>{r.correct}/{r.total} ({r.percent}%)</span>
              <span className="flex items-center gap-1"><CelestialArt id={r.rewardId} size={28} /> {getRewardById(r.rewardId)?.name}</span>
              <span className="text-sm text-muted-foreground">{new Date(r.date).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-10 text-center">
        <button onClick={() => { if (confirm("Erase all your progress? This can't be undone.")) resetProgress(); }} className="text-sm text-muted-foreground underline hover:text-destructive">
          Reset my progress
        </button>
      </div>
    </Page>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-gradient-card p-4 text-center">
      <p className="text-3xl font-bold text-gradient-cosmic">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
