
export const categories = [
  {
    name: "Money Making",
    weight: 30,
    criteria: [
      { name: "Bonus strength", score: 23 },
      { name: "Cash reward opportunities", score: 22 },
      { name: "Variety of earning methods", score: 23 },
      { name: "Accessibility of rewards", score: 20 },
    ],
    description:
      "How rewarding the week's boosted activities and cash opportunities are.",
    reasoning:
      "Triple rewards across Halloween Survivals, Slasher modes, races and Community Missions provide varied earning options. Completing all three Short Trips also pays an additional GTA$500,000, while the Survival weekly challenge offers GTA$150,000.",
  },
  {
    name: "Replayability",
    weight: 20,
    criteria: [
      { name: "Activity variety", score: 23 },
      { name: "Repeatable content", score: 24 },
      { name: "Activity appeal", score: 22 },
      { name: "Reward incentives", score: 20 },
    ],
    description: "How much worthwhile content the weekly rotation offers.",
    reasoning:
      "Halloween Survivals, Slasher modes, boosted races and Community Missions provide plenty of activities to revisit. The range is strong, although most of the rotation builds on existing content rather than introducing a major new mode.",
  },
  {
    name: "Discounts",
    weight: 15,
    criteria: [
      { name: "Size of savings", score: 23 },
      { name: "Usefulness of offers", score: 21 },
      { name: "Range of discounted items", score: 23 },
      { name: "Value for different players", score: 21 },
    ],
    description: "The value and usefulness of this week's discounts.",
    reasoning:
      "Agency properties and upgrades are 40% off, alongside selected Halloween vehicles. A further range of vehicles is discounted by 30%, offering useful savings for players planning purchases.",
  },
  {
    name: "Content",
    weight: 20,
    criteria: [
      { name: "Seasonal or new content", score: 20 },
      { name: "Rewards and unlocks", score: 22 },
      { name: "Variety of activities", score: 23 },
      { name: "Significance of the update", score: 19 },
    ],
    description: "How interesting and substantial the weekly update is.",
    reasoning:
      "The Halloween rotation includes boosted Survivals, Slasher modes and Community Missions. Players can earn the White & Red Tech Demon Mask and unlock the Gray Space Interloper Outfit with GTA$150,000 through the weekly Survival challenge. Most activities remain existing or returning content.",
  },
  {
    name: "Time Investment",
    weight: 15,
    criteria: [
      { name: "Rewards relative to time", score: 23 },
      { name: "Ease of completion", score: 20 },
      { name: "Efficiency of activities", score: 22 },
      { name: "Flexibility for players", score: 21 },
    ],
    description:
      "How efficiently players can earn rewards with the time they have.",
    reasoning:
      "Triple-reward activities offer several ways to earn more from playtime. The Survival challenge provides a clear GTA$150,000 reward, while the GTA$500,000 Short Trips bonus requires completing all three missions. Efficiency varies by activity and player skill.",
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
