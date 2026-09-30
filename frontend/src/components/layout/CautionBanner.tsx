import { useState } from 'react';
import { Icon } from '../ui/Icon';

export function CautionBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="my-2">
      <div className="relative rounded-lg bg-cb-caution flex flex-col items-start gap-2 px-3 py-3">
        <div className="flex items-center gap-2 leading-4">
          <Icon name="circle-question-mark" className="h-4 w-4 text-cb-caution-text" />
          <span className="font-bold text-[14px] text-cb-caution-text">CAUTION</span>
        </div>
        <p className="text-[14px] leading-5 w-full">
          Cricbuzz is not associated with any betting or gambling platforms, including
          &ldquo;Cricbuzz Bet&rdquo; or any similar services. For a safe and authentic experience, use our
          only official website and mobile apps on the Google Play Store and Apple App Store.
        </p>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 text-[#b04e05]"
        >
          <Icon name="close" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
