export const categories = [
  {
    name: "Money Making",
    weight: 30,
    criteria: [
      { name: "Bonus strength", score: 23 },
      { name: "Cash reward opportunities", score: 23 },
      { name: "Variety of earning methods", score: 23 },
      { name: "Accessibility of rewards", score: 22 },
    ],
    description:
      "How rewarding the week's boosted activities and cash opportunities are.",
    reasoning:
      "Prioritises meaningful bonuses, alternative earning methods and rewards players can realistically obtain.",
  },
  {
    name: "Replayability",
    weight: 20,
    criteria: [
      { name: "Activity variety", score: 23 },
      { name: "Repeatable content", score: 23 },
      { name: "Activity appeal", score: 22 },
      { name: "Reward incentives", score: 23 },
    ],
    description: "How much worthwhile content the weekly rotation offers.",
    reasoning:
      "Rewards variety and repeatable activities, not simply the number of items listed.",
  },
  {
    name: "Discounts",
    weight: 15,
    criteria: [
      { name: "Size of savings", score: 22 },
      { name: "Usefulness of offers", score: 21 },
      { name: "Range of discounted items", score: 21 },
      { name: "Value for different players", score: 21 },
    ],
    description: "The value and usefulness of this week's discounts.",
    reasoning:
      "Large discounts score well, but useful purchases matter more than the number of sale items.",
  },
  {
    name: "Content",
    weight: 20,
    criteria: [
      { name: "Seasonal or new content", score: 23 },
      { name: "Rewards and unlocks", score: 22 },
      { name: "Variety of activities", score: 22 },
      { name: "Significance of the update", score: 22 },
    ],
    description: "How interesting and substantial the weekly update is.",
    reasoning:
      "Considers seasonal content, meaningful rewards and whether the update adds something worthwhile.",
  },
  {
    name: "Time Investment",
    weight: 15,
    criteria: [
      { name: "Rewards relative to time", score: 22 },
      { name: "Ease of completion", score: 22 },
      { name: "Efficiency of activities", score: 22 },
      { name: "Flexibility for players", score: 22 },
    ],
    description:
      "How efficiently players can earn rewards with the time they have.",
    reasoning:
      "Considers effort, completion requirements and whether useful rewards are achievable in a reasonable session.",
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