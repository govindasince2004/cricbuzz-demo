import type { FooterLinkGroup } from '../../types';
import { Icon } from '../ui/Icon';

export function SiteFooter({ groups }: { groups: FooterLinkGroup[] }) {
  return (
    <footer className="w-full bg-cb-strip">
      <div className="flex flex-col items-center gap-5 py-6">
        <div className="flex w-[1024px] px-32 justify-between text-white p-5">
          <a href="/" className="self-start">
            <svg className="h-[45px] w-[98px] text-white" aria-label="Cricbuzz">
              <use href="/img/sprite_v6.svg#cricbuzz-logo" />
            </svg>
          </a>

          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <h4 className="text-[12px] font-bold uppercase">{group.title}</h4>
              {group.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-[13px] text-[#d4d4d4] hover:text-white"
                >
                  {link.icon && <Icon name={link.icon} className="h-4 w-4" />}
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="text-[#BABABA] text-xs">
          &copy; 2026 Cricbuzz.com, Cricbuzz Platforms Limited. All rights reserved | The Times of
          India | Navbharat Times
        </div>
      </div>
    </footer>
  );
}
