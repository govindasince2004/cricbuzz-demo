import { Icon } from '../ui/Icon';

export function MoveToTop() {
  return (
    <button
      type="button"
      aria-label="Move to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-4 bottom-6 z-20 bg-[#4a4a4a] text-white text-[12px] rounded-full pl-4 pr-3 py-2 flex items-center gap-2 shadow-lg"
    >
      Move to Top
      <Icon name="arrow-drop-up" className="h-4 w-4 text-white" />
    </button>
  );
}
