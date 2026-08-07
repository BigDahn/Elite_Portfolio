"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

const STORAGE_KEY = "elite-vimeo-mini-player-open";
const VIMEO_EMBED_URL =
  "https://player.vimeo.com/video/1216445224?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1";

function getInitialOpenState() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

export function openVimeoMiniPlayer() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, "true");
  window.dispatchEvent(new Event("elite:vimeo-mini-player:open"));
}

export function closeVimeoMiniPlayer() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, "false");
  window.dispatchEvent(new Event("elite:vimeo-mini-player:close"));
}

export default function VimeoMiniPlayer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(getInitialOpenState());

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("elite:vimeo-mini-player:open", handleOpen);
    window.addEventListener("elite:vimeo-mini-player:close", handleClose);

    return () => {
      window.removeEventListener("elite:vimeo-mini-player:open", handleOpen);
      window.removeEventListener("elite:vimeo-mini-player:close", handleClose);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[999999] w-[min(92vw,360px)] overflow-hidden rounded-[24px] border border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2 text-white">
        <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
          <Play className="size-3.5 fill-white text-white" />
          <span>More Results</span>
        </div>
        <button
          type="button"
          onClick={closeVimeoMiniPlayer}
          className="inline-flex size-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Close mini player"
        >
          <X className="size-4" />
        </button>
      </div>
      <div className="relative w-full pt-[56.25%]">
        <iframe
          src={VIMEO_EMBED_URL}
          title="PORTFOLIO WEBSITE VIDEO"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute left-0 top-0 h-full w-full"
        />
      </div>
    </div>
  );
}