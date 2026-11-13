import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getPlanet } from "@/data/planets";
import { buildQuiz, type QuizQuestion } from "@/data/quizzes";
import { getReward, scoreToPercent } from "@/data/rewards";
import { saveQuizResult } from "@/lib/progress";
import { CelestialArt } from "@/components/CelestialArt";
import { Page } from "@/components/ui-cosmic";

export const Route = createFileRoute("/quiz/$planetId")({
  loader: ({ params }) => {
    const planet = getPlanet(params.planetId);
    if (!planet) throw notFound();
    return { planet };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.planet.name} Quiz — Cosmic Quest` },
          { name: "description", content: `Test what you know about ${loaderData.planet.name} and earn a celestial reward!` },
          { property: "og:title", content: `${loaderData.planet.name} Quiz — Cosmic Quest` },
          { property: "og:description", content: `Test what you know about ${loaderData.planet.name}.` },
        ]
      : [{ title: "Quiz not found — Cosmic Quest" }, { name: "robots", content: "noindex" }],
  }),
  component: QuizPage,
});

function QuizPage() {
  const { planet } = Route.useLoaderData();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  // Questions are random, so build them in the browser after the page loads.
  const start = () => {
    setQuestions(buildQuiz(planet.id));
    setIndex(0);
    setPicked(null);
    setCorrect(0);
    setDone(false);
  };
  useEffect(start, [planet.id]);

  if (questions.length === 0) return <Page><p className="text-center">Loading quiz…</p></Page>;

  const total = questions.length;

  if (done) {
    const percent = scoreToPercent(correct, total);
    return <Results planetId={planet.id} planetName={planet.name} correct={correct} total={total} percent={percent} onRetry={start} />;
  }

  const qn = questions[index]!;
  const answer = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === qn.answerIndex) setCorrect((c) => c + 1);
  };
  const next = () => {
    if (index + 1 >= total) {
      const finalCorrect = correct;
      const percent = scoreToPercent(finalCorrect, total);
      saveQuizResult({ planetId: planet.id, correct: finalCorrect, total, percent, rewardId: getReward(percent).id, date: new Date().toISOString() });
      setDone(true);
    } else {
      setIndex(index + 1);
      setPicked(null);
    }
  };

  return (
    <Page>
      <div className="mx-auto max-w-2xl">
        <div className="mb-2 flex items-center justify-between font-bold">
          <span>{planet.name} Quiz</span>
          <span>Question {index + 1} of {total}</span>
        </div>
        <div className="h-4 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={index + 1} aria-valuemax={total}>
          <div className="h-full rounded-full bg-gradient-cosmic transition-all duration-500" style={{ width: `${((index + (picked !== null ? 1 : 0)) / total) * 100}%` }} />
        </div>

        <section key={index} className="mt-6 animate-pop rounded-3xl border-2 border-border bg-gradient-card p-6">
          <h1 className="text-2xl font-semibold sm:text-3xl">{qn.question}</h1>
          <div className="mt-5 grid gap-3">
            {qn.options.map((opt, i) => {
              let style = "border-border bg-secondary hover:border-primary";
              if (picked !== null) {
                if (i === qn.answerIndex) style = "border-success bg-success/20";
                else if (i === picked) style = "border-destructive bg-destructive/20";
                else style = "border-border bg-secondary opacity-60";
              }
              return (
                <button key={opt} onClick={() => answer(i)} disabled={picked !== null} className={`rounded-2xl border-2 p-4 text-left text-lg font-semibold transition ${style}`}>
                  {opt}
                </button>
              );
            })}
          </div>

          {picked !== null && (
            <div className="mt-5 animate-pop rounded-2xl bg-muted p-4">
              <p className="text-xl font-bold">{picked === qn.answerIndex ? "🎉 Correct!" : "💫 Not quite!"}</p>
              <p className="mt-1 text-muted-foreground">{qn.explanation}</p>
              <button onClick={next} className="mt-4 rounded-full bg-gradient-cosmic px-6 py-3 font-display text-lg font-semibold text-primary-foreground">
                {index + 1 >= total ? "See my results" : "Next question →"}
              </button>
            </div>
          )}
        </section>
        <p className="mt-3 text-center text-muted-foreground">Score so far: {correct}</p>
      </div>
    </Page>
  );
}

function Results({ planetId, planetName, correct, total, percent, onRetry }: { planetId: string; planetName: string; correct: number; total: number; percent: number; onRetry: () => void }) {
  const reward = getReward(percent);
  const low = percent < 50;
  return (
    <Page>
      <section className="mx-auto max-w-xl animate-pop rounded-3xl border-2 border-cosmic-yellow bg-gradient-card p-8 text-center shadow-glow">
        <p className="font-bold text-cosmic-orange">{planetName} Quiz complete!</p>
        <h1 className="mt-1 text-5xl font-bold">{correct} / {total}</h1>
        <p className="text-2xl font-semibold text-gradient-cosmic">{percent}%</p>
        <CelestialArt id={reward.id} size={180} className="mx-auto my-4 animate-float" />
        <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">You earned</p>
        <h2 className="text-4xl font-bold">{reward.name}</h2>
        <p className="mt-1 inline-block rounded-full bg-secondary px-3 py-1 text-sm font-bold">
          {reward.kind === "star" ? "⭐ A star" : reward.kind === "dwarf planet" ? "🪐 A dwarf planet" : "🪐 A planet"}
        </p>
        <p className="mt-4 text-lg">{reward.message}</p>
        {low && <p className="mt-2 text-muted-foreground">Tip: read the {planetName} page again, then retry — you'll get different questions!</p>}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={onRetry} className="rounded-full bg-gradient-cosmic px-6 py-3 font-display text-lg font-semibold text-primary-foreground">🔁 Try again</button>
          <Link to="/planets/$planetId" params={{ planetId }} className="rounded-full bg-secondary px-6 py-3 font-display text-lg font-semibold">📖 Read about {planetName}</Link>
          <Link to="/collection" className="rounded-full bg-gradient-ocean px-6 py-3 font-display text-lg font-semibold text-primary-foreground">🏆 My Collection</Link>
        </div>
      </section>
    </Page>
  );
}
