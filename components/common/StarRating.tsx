import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  /** Show numeric rating alongside stars */
  showNumber?: boolean;
}

const sizeMap = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

/**
 * Star rating component with filled/empty states and accessibility support.
 */
export function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  className,
  showNumber = false,
}: StarRatingProps) {
  const iconClass = sizeMap[size];

  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
    >
      {Array.from({ length: maxRating }, (_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;

        return (
          <Star
            key={i}
            className={cn(
              iconClass,
              filled || partial
                ? 'fill-amber-400 text-amber-400'
                : 'fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700',
            )}
            aria-hidden="true"
          />
        );
      })}
      {showNumber && (
        <span className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
