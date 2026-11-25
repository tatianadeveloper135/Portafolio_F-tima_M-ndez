"use client";

import { useState } from "react";
import { User } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/components/layout/LanguageProvider";

export function ProfileImage() {
  const { text } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative h-72 w-72 rounded-3xl border border-slate-200 bg-gradient-to-b from-cyan-500/15 via-white to-violet-500/15 p-3 shadow-xl dark:border-slate-700/80 dark:from-cyan-500/20 dark:via-[#131824] dark:to-violet-500/20 dark:shadow-2xl sm:h-80 sm:w-80">
      {!imgError ? (
        <img
          src={SITE_CONFIG.avatarPath}
          alt={SITE_CONFIG.fullName}
          onError={() => setImgError(true)}
          className="h-full w-full rounded-2xl object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-dashed border-cyan-500/40 bg-white p-6 text-center dark:bg-[#131824]">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
            <User className="h-10 w-10" />
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
            {SITE_CONFIG.shortName}
          </p>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            {text.hero.uploadPhotoPrefix}{" "}
            <span className="font-mono text-cyan-600 dark:text-cyan-400">
              {SITE_CONFIG.avatarPath}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}