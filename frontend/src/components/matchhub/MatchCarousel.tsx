import type { MatchCarouselItem } from '../../types';
import { Icon } from '../ui/Icon';
import { MatchCard } from './MatchCard';

interface MatchCarouselProps {
  items: MatchCarouselItem[];
}

export function MatchCarousel({ items }: MatchCarouselProps) {
  return (
    <div className="relative my-2 h-[164px]">
      <div className="flex h-full w-full overflow-hidden gap-2">
        {items.map((item) => (
          <div key={item.id} className="h-full flex justify-center">
            <div>
              {item.kind === 'match' && item.match ? (
                <MatchCard match={item.match} />
              ) : (
                <div className="w-[250px] h-[162px] bg-[#111] rounded-md shadow overflow-hidden flex flex-col justify-between p-3 text-white">
                  <div className="text-[10px] tracking-widest text-white/50 uppercase">
                    Advertisement
                  </div>
                  <div>
                    <div className="text-[22px] font-extrabold leading-6">{item.ad?.headline}</div>
                    <div className="text-[13px] text-white/70 mt-1">{item.ad?.sub}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-white/50">Aurra Markets</span>
                    <span className="bg-white text-black text-[11px] font-semibold px-3 py-1 rounded-full">
                      {item.ad?.cta}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next matches"
        className="absolute -right-1 top-1/2 -translate-y-1/2 bg-cb-green w-8 h-8 rounded-full flex justify-center items-center shadow z-10"
      >
        <Icon name="chevron-right-bold" className="h-4 w-4 text-white" />
      </button>
    </div>
  );
}
