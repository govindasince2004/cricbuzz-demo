import type { MatchStripItem } from '../../types';
import { Icon } from '../ui/Icon';

interface MatchStripProps {
  items: MatchStripItem[];
}

export function MatchStrip({ items }: MatchStripProps) {
  return (
    <div className="w-full text-white bg-cb-strip text-xs flex justify-between items-center h-10 relative">
      <a
        href="/cricket-match/live-scores"
        title="All Matches"
        className="h-full flex justify-center items-center px-3 bg-cb-strip-dark hover:bg-cb-strip whitespace-nowrap"
      >
        MATCHES
      </a>

      <div className="h-full w-full flex items-center justify-start overflow-hidden">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            title={item.title}
            className="h-full w-fit max-w-[160px] px-3 flex items-center hover:bg-cb-strip-hover"
          >
            <span className="whitespace-nowrap text-ellipsis overflow-hidden">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="h-full w-fit px-3 flex items-center gap-1 cursor-pointer hover:bg-cb-strip-hover shrink-0">
        ALL
        <Icon name="arrow-drop-down" className="h-[8px] w-[15px] text-white" />
      </div>
    </div>
  );
}
