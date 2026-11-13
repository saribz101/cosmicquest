// A SMALL SAMPLE of confirmed exoplanets, copied by hand from the
// NASA Exoplanet Archive (exoplanetarchive.ipac.caltech.edu) and NASA Science.
// This is NOT live data. Values are rounded; some are estimates (marked).

export interface Exoplanet {
  id: string;
  name: string;
  hostStar: string;
  distanceLightYears: string;
  discovered: number;
  method: string;
  orbitDays: string;
  size: string;
  kind: string;
  summary: string;
  facts: string[];
}

export const SAMPLE_EXOPLANETS: Exoplanet[] = [
  {
    id: "proxima-centauri-b", name: "Proxima Centauri b", hostStar: "Proxima Centauri (a red dwarf)",
    distanceLightYears: "About 4.2", discovered: 2016, method: "Radial velocity (star wobble)",
    orbitDays: "About 11.2", size: "At least about 1.07 × Earth's mass (estimate)", kind: "Possibly rocky",
    summary: "The closest known exoplanet to Earth. It orbits the closest star to our Sun.",
    facts: [
      "It is in its star's 'habitable zone', where liquid water could exist — but nobody knows yet if it has water or air.",
      "Its star sends out strong flares that might strip away an atmosphere.",
      "Even at 4.2 light-years, our fastest spacecraft would take thousands of years to get there.",
    ],
  },
  {
    id: "trappist-1e", name: "TRAPPIST-1e", hostStar: "TRAPPIST-1 (an ultracool red dwarf)",
    distanceLightYears: "About 40", discovered: 2017, method: "Transit (star dims as the planet passes in front)",
    orbitDays: "About 6.1", size: "About 0.92 × Earth's width", kind: "Rocky",
    summary: "One of seven Earth-sized planets orbiting the same small star!",
    facts: [
      "The TRAPPIST-1 system has seven rocky planets — the most Earth-sized planets found around one star.",
      "TRAPPIST-1e is in the habitable zone.",
      "The James Webb Space Telescope is studying the TRAPPIST-1 planets.",
    ],
  },
  {
    id: "51-pegasi-b", name: "51 Pegasi b", hostStar: "51 Pegasi (a Sun-like star)",
    distanceLightYears: "About 50", discovered: 1995, method: "Radial velocity (star wobble)",
    orbitDays: "About 4.2", size: "About half of Jupiter's mass (estimate)", kind: "Hot Jupiter (gas giant)",
    summary: "The first exoplanet ever found orbiting a Sun-like star.",
    facts: [
      "Michel Mayor and Didier Queloz discovered it and won the 2019 Nobel Prize in Physics.",
      "It is a 'hot Jupiter' — a giant planet orbiting very close to its star.",
      "Its year lasts just over four Earth days!",
    ],
  },
  {
    id: "hd-189733-b", name: "HD 189733 b", hostStar: "HD 189733",
    distanceLightYears: "About 64", discovered: 2005, method: "Transit",
    orbitDays: "About 2.2", size: "A bit bigger than Jupiter", kind: "Hot Jupiter (gas giant)",
    summary: "A deep blue gas giant with ferocious winds.",
    facts: [
      "Hubble measured its colour: a deep cobalt blue.",
      "Scientists think it may rain glass sideways in its super-fast winds.",
      "It is one of the most studied exoplanets.",
    ],
  },
  {
    id: "kepler-16b", name: "Kepler-16b", hostStar: "Kepler-16 A and B (two stars!)",
    distanceLightYears: "About 245", discovered: 2011, method: "Transit",
    orbitDays: "About 229", size: "About the size of Saturn", kind: "Gas giant",
    summary: "A real planet with two suns — like Tatooine from Star Wars!",
    facts: [
      "It was the first planet confirmed to orbit two stars at once.",
      "It was found by NASA's Kepler space telescope.",
      "It is probably too cold for life as we know it.",
    ],
  },
  {
    id: "kepler-186f", name: "Kepler-186f", hostStar: "Kepler-186 (a red dwarf)",
    distanceLightYears: "About 580", discovered: 2014, method: "Transit",
    orbitDays: "About 130", size: "About 1.2 × Earth's width", kind: "Probably rocky",
    summary: "The first Earth-sized planet found in the habitable zone of another star.",
    facts: [
      "It gets only about a third of the energy Earth gets from the Sun.",
      "Its mass is unknown, so scientists aren't sure what it is made of.",
      "It was discovered by NASA's Kepler space telescope.",
    ],
  },
];
