// Saves and loads the explorer's progress in the browser (localStorage).
// Nothing is sent to a server — progress stays on this device.
import { useCallback, useEffect, useState } from "react";

export interface QuizResult {
  planetId: string;
  correct: number;
  total: number;
  percent: number;
  rewardId: string;
  date: string; // ISO date string
}

export interface Progress {
  explored: string[]; // planet ids the user has opened
  quizHistory: QuizResult[];
}

const KEY = "cosmic-quest-progress-v1";
const EMPTY: Progress = { explored: [], quizHistory: [] };

function read(): Progress {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw);
    return { explored: parsed.explored ?? [], quizHistory: parsed.quizHistory ?? [] };
  } catch {
    return EMPTY;
  }
}

function write(p: Progress) {
  window.localStorage.setItem(KEY, JSON.stringify(p));
  window.dispatchEvent(new Event("cosmic-progress"));
}

export function markExplored(planetId: string) {
  const p = read();
  if (!p.explored.includes(planetId)) write({ ...p, explored: [...p.explored, planetId] });
}

export function saveQuizResult(result: QuizResult) {
  const p = read();
  write({ ...p, quizHistory: [result, ...p.quizHistory] });
}

export function resetProgress() {
  write(EMPTY);
}

/** React hook: gives the current progress and updates when it changes. */
export function useProgress() {
  const [progress, setProgress] = useState<Progress>(EMPTY);
  const [loaded, setLoaded] = useState(false);
  const refresh = useCallback(() => setProgress(read()), []);
  useEffect(() => {
    refresh();
    setLoaded(true);
    window.addEventListener("cosmic-progress", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("cosmic-progress", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [refresh]);
  return { progress, loaded };
}

/** Best score per reward id, for the collection page. */
export function bestScoresByReward(history: QuizResult[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const r of history) out[r.rewardId] = Math.max(out[r.rewardId] ?? -1, r.percent);
  return out;
}
