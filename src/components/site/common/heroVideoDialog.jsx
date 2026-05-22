"use client";

import { AnimatePresence, motion } from "motion/react";
import { Play, XIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { animatedLinkVariants } from "@/components/site/common/animatedLink";
import { cn } from "@/lib/utils";

const EMBED_URL = "https://www.youtube.com/embed/JzfgpDR85sQ?autoplay=1&rel=0";

const motionDuration = "duration-700";
const motionEase = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const motionReduce = "motion-reduce:transition-none motion-reduce:group-hover/video-trigger:translate-x-0 motion-reduce:group-hover/video-trigger:translate-y-0";

function VideoTriggerLabel({ children }) {
  return (
    <span className="relative inline-flex h-5 overflow-hidden">
      <span className={cn("flex flex-col will-change-transform transition-transform group-hover/video-trigger:-translate-y-5", motionDuration, motionEase, motionReduce)}>
        <span className="flex h-5 items-center leading-5 whitespace-nowrap">{children}</span>
        <span className="flex h-5 items-center leading-5 whitespace-nowrap" aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
  );
}

function VideoTriggerIcon() {
  return (
    <span className="relative inline-flex size-4 shrink-0 overflow-hidden">
      <span className={cn("flex w-8 will-change-transform -translate-x-4 transition-transform group-hover/video-trigger:translate-x-0", motionDuration, motionEase, motionReduce)}>
        <span className="flex size-4 items-center justify-center">
          <Play aria-hidden="true" className="size-4 shrink-0 fill-current" />
        </span>
        <span className="flex size-4 items-center justify-center">
          <Play aria-hidden="true" className="size-4 shrink-0 fill-current" />
        </span>
      </span>
    </span>
  );
}

function VideoModal({ isOpen, label, onClose, videoSrc }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const modal = (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/75 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative mx-4 w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={onClose}
              className="absolute -top-12 right-0 flex items-center justify-center rounded-full bg-neutral-900/60 p-2 text-white ring-1 ring-white/20 backdrop-blur-md transition-colors hover:bg-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <XIcon className="size-5" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <iframe
                src={videoSrc}
                title={label}
                className="absolute inset-0 size-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return typeof document !== "undefined" ? createPortal(modal, document.body) : null;
}

export default function HeroVideoDialog({ label, videoSrc = EMBED_URL, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeDialog = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn("group/video-trigger cursor-pointer", animatedLinkVariants({ variant: "primary" }), className)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <VideoTriggerLabel>{label}</VideoTriggerLabel>
        <VideoTriggerIcon />
      </button>

      <VideoModal isOpen={isOpen} label={label} onClose={closeDialog} videoSrc={videoSrc} />
    </>
  );
}
