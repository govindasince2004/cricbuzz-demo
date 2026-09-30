import type { NavigationItem } from '../../types';
import { Icon } from '../ui/Icon';

interface SiteHeaderProps {
  navItems: NavigationItem[];
}

export function SiteHeader({ navItems }: SiteHeaderProps) {
  return (
    <header className="w-full text-white bg-cb-green flex items-center px-3 h-12 relative">
      <a href="/" title="Cricbuzz" className="m-3 shrink-0">
        <svg className="h-[45px] w-[98px] text-white" aria-label="Cricbuzz">
          <use href="/img/sprite_v6.svg#cricbuzz-logo" />
        </svg>
      </a>

      <nav className="flex items-center h-full">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="flex justify-center items-center relative h-full hover:bg-cb-green-hover px-2 cursor-pointer"
          >
            <a href={item.href} title={item.label}>
              {item.label}
            </a>
            {item.hasMenu && <Icon name="arrow-drop-down" className="h-[8px] w-[15px] text-white" />}
          </div>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-3">
        <a
          href="/premium-subscription/user/select-plan"
          title="Cricbuzz Plus"
          className="bg-white px-3 py-[6px] rounded-[18px] flex justify-center items-center text-[#222]"
        >
          Go Premium
        </a>
        <a href="/premium-subscription/user/login" className="text-white min-w-[48px] flex justify-center items-center">
          <Icon name="circle-user" className="h-6 w-6 text-white" />
        </a>
      </div>
    </header>
  );
}
