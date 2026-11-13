// The ONE place the app gets exoplanet data from.
// Today it returns the hand-picked sample list. Later, a live search of
// NASA's Exoplanet Archive (its free TAP API) can be added here, and the
// pages will keep working without changes.
import { SAMPLE_EXOPLANETS, type Exoplanet } from "@/data/exoplanets";

export const DATA_SOURCE_LABEL = "Sample data (not live) — from the NASA Exoplanet Archive";

export function searchExoplanets(query: string): Exoplanet[] {
  const q = query.trim().toLowerCase();
  if (!q) return SAMPLE_EXOPLANETS;
  return SAMPLE_EXOPLANETS.filter(
    (p) => p.name.toLowerCase().includes(q) || p.hostStar.toLowerCase().includes(q),
  );
}

export function getExoplanet(id: string): Exoplanet | undefined {
  return SAMPLE_EXOPLANETS.find((p) => p.id === id);
}
