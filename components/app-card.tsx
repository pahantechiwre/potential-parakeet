"use client";

import { ExternalLink, Globe } from "lucide-react";
import type { AppItem } from "@/lib/apps-data";
import { useState } from "react";

interface AppCardProps {
  app: AppItem;
}

export function AppCard({ app }: AppCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 rounded-2xl bg-card border border-border p-5 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`Open ${app.name} in a new window`}
    >
      <div
        className="flex items-center justify-center w-16 h-16 rounded-2xl shrink-0 transition-transform duration-200 group-hover:scale-110 overflow-hidden"
        style={{ backgroundColor: app.color }}
      >
        {!imgError ? (
          <img
            src={`/${app.icon}`}
            alt={`${app.name} icon`}
            width={40}
            height={40}
            className="object-contain mix-blend-multiply dark:mix-blend-multiply"
            onError={() => setImgError(true)}
          />
        ) : (
          <Globe className="h-8 w-8 text-white" />
        )}
      </div>
      <div className="flex flex-col items-center gap-1 text-center min-w-0 w-full">
        <div className="flex items-center gap-1.5">
          <h3 className="text-sm font-semibold text-foreground truncate">
            {app.name}
          </h3>
          <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {app.description}
        </p>
      </div>
    </a>
  );
}
