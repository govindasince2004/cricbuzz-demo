import type { QuickAccessLink } from '../../types';
import { Icon } from '../ui/Icon';

export function QuickAccess({ links }: { links: QuickAccessLink[] }) {
  return (
    <div className="bg-white flex items-center w-full h-[64px] mb-[5px] px-4 py-2">
      <div className="text-[18px] font-bold whitespace-nowrap pr-3">Quick Access</div>
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="bg-cb-page rounded-[4px] p-2 h-10 flex items-center gap-2 whitespace-nowrap text-[14px]"
          >
            <Icon name={link.icon} className="h-6 w-6 text-black" />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
