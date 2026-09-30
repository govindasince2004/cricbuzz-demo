import type { NewsItem } from '../../types';

export function LatestNews({ items }: { items: NewsItem[] }) {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="w-full p-4 bg-white rounded-lg">
        <h2 className="text-[16px] font-extrabold text-cb-green">LATEST NEWS</h2>
      </div>

      <div className="rounded-lg overflow-hidden bg-white flex flex-col">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="flex flex-col gap-1 p-4 border-b border-cb-border last:border-b-0 hover:bg-neutral-50"
          >
            <span className="text-[14px] leading-5">{item.headline}</span>
            <span className="text-[12px] text-[#737373]">{item.timestamp}</span>
          </a>
        ))}

        <div className="p-4 flex justify-center">
          <a
            href="#"
            className="w-fit py-1.5 px-5 bg-cb-green hover:bg-cb-green-hover text-white rounded-sm text-[14px]"
          >
            More News
          </a>
        </div>
      </div>
    </div>
  );
}
