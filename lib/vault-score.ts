
export const categories = [
  {
    name: "Money Making",
    weight: 30,
    criteria: [
      { name: "Bonus strength", score: 23 },
      { name: "Cash reward opportunities", score: 23 },
      { name: "Variety of earning methods", score: 22 },
      { name: "Accessibility of rewards", score: 20 },
    ],
    description:
      "How rewarding the week's boosted activities and cash opportunities are.",
    reasoning:
      "Mansion Raid pays 3X GTA$ and RP, while the Community Series pays 2X. The first-time completion bonuses across the Original Heists, Doomsday Heist, Diamond Casino Heist and KnoWay Out offer substantial additional earnings. The guaranteed Panther Statue on the first Cayo Perico run and the Kortz Center's guaranteed painting target add further high-value opportunities. However, many of the largest bonuses are restricted to first-time completions.",
  },
  {
    name: "Replayability",
    weight: 20,
    criteria: [
      { name: "Activity variety", score: 21 },
      { name: "Repeatable content", score: 21 },
      { name: "Activity appeal", score: 20 },
      { name: "Reward incentives", score: 20 },
    ],
    description: "How much worthwhile content the weekly rotation offers.",
    reasoning:
      "The week features a broad selection of established heists, Mansion Raid, Community Series activities and Adversary Modes. The guaranteed heist targets provide a strong reason to participate, although the first-time completion bonuses offer less incentive to repeatedly complete the same missions.",
  },
  {
    name: "Discounts",
    weight: 15,
    criteria: [
      { name: "Size of savings", score: 23 },
      { name: "Usefulness of offers", score: 23 },
      { name: "Range of discounted items", score: 22 },
      { name: "Value for different players", score: 22 },
    ],
    description: "The value and usefulness of this week's discounts.",
    reasoning:
      "The 40% discounts on High-End Apartments, Casino Penthouse properties and Facilities are particularly useful for players who still need access to the associated heists. Facility and Penthouse upgrades also receive 40% off. Ten vehicles are discounted by 30%, while the Grotti Veleno GT receives a 25% discount. This is a particularly strong week for players looking to expand their property portfolio.",
  },
  {
    name: "Content",
    weight: 20,
    criteria: [
      { name: "Seasonal or new content", score: 22 },
      { name: "Rewards and unlocks", score: 22 },
      { name: "Variety of activities", score: 22 },
      { name: "Significance of the update", score: 21 },
    ],
    description: "How interesting and substantial the weekly update is.",
    reasoning:
      "The Heist Event introduces a major focus on established robberies, with the Kortz Center Heist receiving its inaugural event spotlight. Players can obtain guaranteed valuable targets, unlock The Great Circle Back Mansion painting decoration by logging in, and earn GTA$100,000 by winning an Adversary Mode. The rewards are attractive, although the week does not introduce a completely new major activity.",
  },
  {
    name: "Time Investment",
    weight: 15,
    criteria: [
      { name: "Rewards relative to time", score: 19 },
      { name: "Ease of completion", score: 19 },
      { name: "Efficiency of activities", score: 19 },
      { name: "Flexibility for players", score: 19 },
    ],
    description:
      "How efficiently players can earn rewards with the time they have.",
    reasoning:
      "The guaranteed Panther Statue and Kortz Center painting make the first runs of these heists especially worthwhile. However, completing several heists and their preparation missions requires considerable time, while first-time bonuses cannot be repeatedly claimed. The weekly Adversary Mode challenge is much easier to complete, providing a straightforward GTA$100,000 reward.",
  },
];

export const scoringScale = [
  { min: 95, label: "Legendary Week" },
  { min: 85, label: "Excellent Week" },
  { min: 70, label: "Great Week" },
  { min: 50, label: "Good Week" },
  { min: 30, label: "Average Week" },
  { min: 0, label: "Poor Week" },
];

export const vaultScore = Math.round(
  categories.reduce(
    (total, category) =>
      total +
      (category.criteria.reduce(
        (sum, criterion) => sum + criterion.score,
        0
      ) /
        100) *
        category.weight,
    0
  )
);

export const vaultRating =
  scoringScale.find((tier) => vaultScore >= tier.min)?.label ??
  "Poor Week";

export const vaultScoreColor =
  vaultScore >= 95
    ? "#a855f7"
    : vaultScore >= 85
      ? "#3b82f6"
      : vaultScore >= 70
        ? "#22c55e"
        : vaultScore >= 50
          ? "#eab308"
          : vaultScore >= 30
            ? "#f97316"
            : "#ef4444";
