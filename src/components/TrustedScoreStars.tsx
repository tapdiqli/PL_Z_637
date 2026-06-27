import { Star, StarHalf } from "lucide-react";

interface TrustedScoreStarsProps {
  stars: number;
}

export default function TrustedScoreStars({ stars }: TrustedScoreStarsProps) {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;
  
  return (
    <div className="flex items-center text-portal-yellow">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
      ))}
      {hasHalfStar && <StarHalf size={18} fill="currentColor" strokeWidth={0} />}
      {[...Array(5 - Math.ceil(stars))].map((_, i) => (
        <Star key={i + fullStars + 1} size={18} className="text-portal-gray/40" strokeWidth={1} />
      ))}
    </div>
  );
}
