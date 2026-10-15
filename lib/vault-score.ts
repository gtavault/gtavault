
export const categories = [
  {
    name: "Money Making",
    weight: 30,
    criteria: [
      { name: "Bonus strength", score: 22 },
      { name: "Cash reward opportunities", score: 21 },
      { name: "Variety of earning methods", score: 20 },
      { name: "Accessibility of rewards", score: 19 },
    ],
    description:
      "How rewarding the week's boosted activities and cash opportunities are.",
    reasoning:
      "Triple rewards across Halloween modes, Survivals and races provide strong earning options. The GTA$500,000 Contract finale bonus is valuable, but requires completing a substantial mission finale.",
  },
  {
    name: "Replayability",
    weight: 20,
    criteria: [
      { name: "Activity variety", score: 22 },
      { name: "Repeatable content", score: 22 },
      { name: "Activity appeal", score: 21 },
      { name: "Reward incentives", score: 21 },
    ],
    description: "How much worthwhile content the weekly rotation offers.",
    reasoning:
      "The rotation combines Halloween Survivals, Slasher modes, several race series and returning seasonal activities. Much of the content is returning rather than completely new.",
  },
  {
    name: "Discounts",
    weight: 15,
    criteria: [
      { name: "Size of savings", score: 20 },
      { name: "Usefulness of offers", score: 18 },
      { name: "Range of discounted items", score: 19 },
      { name: "Value for different players", score: 18 },
    ],
    description: "The value and usefulness of this week's discounts.",
    reasoning:
      "Agency properties and upgrades are 40% off, with selected Halloween vehicles also discounted. The best value depends on whether players need these purchases.",
  },
  {
    name: "Content",
    weight: 20,
    criteria: [
      { name: "Seasonal or new content", score: 20 },
      { name: "Rewards and unlocks", score: 20 },
      { name: "Variety of activities", score: 21 },
      { name: "Significance of the update", score: 19 },
    ],
    description: "How interesting and substantial the weekly update is.",
    reasoning:
      "The Halloween event adds seasonal appeal, a new weekly race challenge reward and a free login T-shirt. However, this is primarily a rotation of existing activities and rewards.",
  },
  {
    name: "Time Investment",
    weight: 15,
    criteria: [
      { name: "Rewards relative to time", score: 21 },
      { name: "Ease of completion", score: 20 },
      { name: "Efficiency of activities", score: 20 },
      { name: "Flexibility for players", score: 20 },
    ],
    description:
      "How efficiently players can earn rewards with the time they have.",
    reasoning:
      "Winning three races unlocks GTA$100,000 and the Orange Glow Skeletal Onesie, and the race series offers triple rewards. Other bonuses require more time or specific activities.",
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
