import type { SpecialItem } from '../../types';

export function Specials({ items }: { items: SpecialItem[] }) {
  return (
    <div className="mt-[5px] flex flex-col gap-[5px]">
      <div className="w-full p-4 bg-white rounded-lg">
        <h2 className="text-[16px] font-extrabold text-cb-green">SPECIALS</h2>
      </div>

      <div className="rounded-lg overflow-hidden bg-white flex flex-col">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="flex flex-col gap-2 p-4 border-b border-cb-border last:border-b-0 hover:bg-neutral-50"
          >
            <img
              src={item.imageUrl}
              alt={item.headline}
              loading="lazy"
              className="w-full aspect-video object-cover rounded-sm"
            />
            <span className="text-[16px] font-bold leading-5">{item.headline}</span>
            <span className="text-[13px] text-[#555] leading-5">{item.description}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
