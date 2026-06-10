"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const ENTER_MS = 700;
const EXIT_MS = 700;

type TransitionPhase = "idle" | "enter" | "hold" | "exit";

function shouldIgnoreClick(event: MouseEvent) {
  return (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

export default function PageTransitionOverlay() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const phaseRef = useRef<TransitionPhase>("idle");
  const pushTimeoutRef = useRef<number | null>(null);
  const exitTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (shouldIgnoreClick(event) || phaseRef.current !== "idle") {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest("a");

      if (!anchor || !(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      if (
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.getAttribute("rel")?.includes("external")
      ) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) {
        return;
      }

      const currentUrl =
        window.location.pathname + window.location.search + window.location.hash;
      const nextUrl = url.pathname + url.search + url.hash;

      if (currentUrl === nextUrl) {
        return;
      }

      event.preventDefault();
      setPhase("enter");

      pushTimeoutRef.current = window.setTimeout(() => {
        setPhase("hold");
        router.push(nextUrl);
      }, ENTER_MS);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  }, [router]);

  useEffect(() => {
    if (phase !== "hold") {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setPhase("exit");
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, phase]);

  useEffect(() => {
    if (phase !== "exit") {
      return;
    }

    exitTimeoutRef.current = window.setTimeout(() => {
      setPhase("idle");
    }, EXIT_MS);

    return () => {
      if (exitTimeoutRef.current !== null) {
        window.clearTimeout(exitTimeoutRef.current);
      }
    };
  }, [phase]);

  useEffect(() => {
    return () => {
      if (pushTimeoutRef.current !== null) {
        window.clearTimeout(pushTimeoutRef.current);
      }
      if (exitTimeoutRef.current !== null) {
        window.clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  if (phase === "idle") {
    return null;
  }

  return (
    <div
      aria-hidden
      className={`page-transition-overlay page-transition-overlay--${phase}`}
    />
  );
}
