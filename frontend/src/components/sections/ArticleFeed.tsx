import type { ArticleItem } from '../../types';

function SponsoredBlock() {
  return (
    <div className="px-4 py-3 border-b border-cb-border bg-neutral-50">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[14px] font-semibold">You May Like</span>
        <span className="text-[11px] text-[#737373]">Sponsored Links by Taboola</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[0, 1].map((i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="w-full aspect-video bg-neutral-200 rounded-sm" />
            <div className="h-3 w-4/5 bg-neutral-200 rounded-sm" />
            <div className="h-3 w-2/3 bg-neutral-200 rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ArticleFeed({ items }: { items: ArticleItem[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div key={item.id}>
          <article className="p-4 border-b border-cb-border">
            {item.series && (
              <a
                href="#"
                className="block text-[12px] font-semibold text-cb-green uppercase mb-2"
              >
                {item.series}
              </a>
            )}
            {item.eyebrow && (
              <div className="text-[12px] font-semibold text-cb-green uppercase mb-2">
                {item.eyebrow}
              </div>
            )}

            <a href={item.href} className="block">
              <img
                src={item.imageUrl}
                alt={item.headline}
                loading="lazy"
                className="w-full aspect-video object-cover rounded-sm"
              />
              <h3 className="text-[20px] font-bold leading-6 mt-3 hover:text-cb-green">
                {item.headline}
              </h3>
              <p className="text-[14px] text-[#555] leading-5 mt-2">{item.summary}</p>
            </a>

            {item.relatedLink && (
              <a href="#" className="block text-cb-green font-semibold text-[14px] mt-3">
                {item.relatedLink}
              </a>
            )}
          </article>

          {index === 0 && <SponsoredBlock />}
        </div>
      ))}
    </div>
  );
}
