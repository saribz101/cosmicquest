import { describe, expect, it } from "vitest";
import { getReward, scoreToPercent } from "@/data/rewards";

describe("reward ladder", () => {
  const cases: [number, string][] = [
    [100, "sun"], [90, "sun"], [89, "jupiter"], [80, "jupiter"], [79, "saturn"], [70, "saturn"],
    [69, "uranus"], [60, "uranus"], [59, "neptune"], [50, "neptune"], [49, "earth"], [40, "earth"],
    [39, "venus"], [30, "venus"], [29, "mars"], [20, "mars"], [19, "mercury"], [10, "mercury"],
    [9, "pluto"], [0, "pluto"],
  ];
  it.each(cases)("%i%% earns %s", (pct, id) => {
    expect(getReward(pct).id).toBe(id);
  });

  it("calculates percentages from 10 questions", () => {
    expect(scoreToPercent(7, 10)).toBe(70);
    expect(scoreToPercent(0, 10)).toBe(0);
    expect(scoreToPercent(10, 10)).toBe(100);
  });

  it("labels the Sun as a star and Pluto as a dwarf planet", () => {
    expect(getReward(95).kind).toBe("star");
    expect(getReward(5).kind).toBe("dwarf planet");
    expect(getReward(55).kind).toBe("planet");
  });
});
