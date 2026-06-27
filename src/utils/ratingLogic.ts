/**
 * VIP Rating Logic
 * Starts at 10, decreases by 0.1 until 9.5 based on the rank (1-based).
 * Stars: <=3 is 5 stars, <=7 is 4.5 stars, else 4 stars.
 * Rating Style: "96%" (converted from 10-point scale).
 */

export interface VIPRating {
  score: number;
  percentage: string;
  stars: number;
}

export function calculateVIPRating(rank: number): VIPRating {
  const decrease = (rank - 1) * 0.1;
  const score = Math.max(9.5, 10 - decrease);

  let stars = 4;
  if (rank <= 3) {
    stars = 5;
  } else if (rank <= 7) {
    stars = 4.5;
  }

  const percentage = `${Math.round(score * 10)}%`;

  return {
    score,
    percentage,
    stars,
  };
}

export interface TrustedScoreResult {
  score: string;
  stars: number;
  percentage: string;
}

export function getTrustedScore(index: number): TrustedScoreResult {
  const rating = calculateVIPRating(index + 1);

  return {
    score: rating.score.toFixed(1),
    stars: rating.stars,
    percentage: rating.percentage,
  };
}
