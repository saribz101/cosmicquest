// The celestial reward ladder. Higher quiz scores earn bigger celestial bodies.
export type RewardKind = "star" | "planet" | "dwarf planet";

export interface Reward {
  id: string;
  name: string;
  kind: RewardKind;
  minPercent: number; // lowest percentage that earns this reward
  maxPercent: number;
  message: string;
}

// Ordered from best to lowest.
export const REWARDS: Reward[] = [
  { id: "sun", name: "The Sun", kind: "star", minPercent: 90, maxPercent: 100, message: "Superstar! You earned the Sun — the star at the centre of our Solar System!" },
  { id: "jupiter", name: "Jupiter", kind: "planet", minPercent: 80, maxPercent: 89, message: "Gigantic score! You earned Jupiter, the biggest planet!" },
  { id: "saturn", name: "Saturn", kind: "planet", minPercent: 70, maxPercent: 79, message: "Ring-tastic! You earned Saturn!" },
  { id: "uranus", name: "Uranus", kind: "planet", minPercent: 60, maxPercent: 69, message: "Great work! You earned Uranus, the sideways planet!" },
  { id: "neptune", name: "Neptune", kind: "planet", minPercent: 50, maxPercent: 59, message: "Nice job! You earned windy Neptune!" },
  { id: "earth", name: "Earth", kind: "planet", minPercent: 40, maxPercent: 49, message: "Good effort! You earned our home planet, Earth!" },
  { id: "venus", name: "Venus", kind: "planet", minPercent: 30, maxPercent: 39, message: "You earned Venus! Re-read the planet page and try again for a bigger reward." },
  { id: "mars", name: "Mars", kind: "planet", minPercent: 20, maxPercent: 29, message: "You earned Mars! Every explorer learns step by step — keep going!" },
  { id: "mercury", name: "Mercury", kind: "planet", minPercent: 10, maxPercent: 19, message: "You earned Mercury! Explore the facts once more and try again." },
  { id: "pluto", name: "Pluto", kind: "dwarf planet", minPercent: 0, maxPercent: 9, message: "You earned Pluto, the brave little dwarf planet! Read the planet page and have another go — you can do it!" },
];

/** Turns a number of correct answers into a whole-number percentage (0–100). */
export function scoreToPercent(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((correct / total) * 100);
}

/** Finds the reward for a percentage score. */
export function getReward(percent: number): Reward {
  const p = Math.max(0, Math.min(100, Math.floor(percent)));
  return REWARDS.find((r) => p >= r.minPercent) ?? REWARDS[REWARDS.length - 1]!;
}

export function getRewardById(id: string): Reward | undefined {
  return REWARDS.find((r) => r.id === id);
}
