import type { VideoItem } from '../../types';
import { Icon } from '../ui/Icon';

export function FeaturedVideos({ items }: { items: VideoItem[] }) {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="w-full p-4 bg-white rounded-lg">
        <h2 className="text-[16px] font-extrabold text-cb-green">FEATURED VIDEOS</h2>
      </div>

      <div className="rounded-lg overflow-hidden bg-white flex flex-col">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="flex flex-col gap-2 p-4 border-b border-cb-border last:border-b-0 hover:bg-neutral-50"
          >
            <div className="relative">
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                loading="lazy"
                className="w-full aspect-video object-cover rounded-sm"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <Icon name="circle-play" className="h-9 w-9 text-white/90" />
              </span>
              {item.duration && (
                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[11px] px-1 rounded-sm">
                  {item.duration}
                </span>
              )}
            </div>
            <span className="text-[14px] leading-5">{item.title}</span>
          </a>
        ))}

        <div className="p-4 flex justify-center">
          <a
            href="#"
            className="w-fit py-1.5 px-5 bg-cb-green hover:bg-cb-green-hover text-white rounded-sm text-[14px]"
          >
            More Videos
          </a>
        </div>
      </div>
    </div>
  );
}
