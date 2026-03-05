"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { apps } from "@/lib/apps-data";
import type { AppCategory } from "@/lib/apps-data";
import { SearchBar } from "@/components/search-bar";
import { CategoryFilter } from "@/components/category-filter";
import { AppCard } from "@/components/app-card";
import { ThemeToggle } from "@/components/theme-toggle";

export function AppStore() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    AppCategory | "All"
  >("All");

  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const matchesSearch =
        search === "" ||
        app.name.toLowerCase().includes(search.toLowerCase()) ||
        app.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || app.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              <Image
                src="/techwire-logo.png"
                alt="Techwire Lanka Pvt Ltd"
                width={160}
                height={48}
                className="h-14 w-auto object-contain mix-blend-multiply sm:h-16 block"
                priority
              />
            </div>
            <div className="flex items-center gap-2">
              <SearchBar value={search} onChange={setSearch} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section aria-label="Filter by category" className="mb-8">
          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </section>

        <section aria-label="Apps grid">
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 gap-3">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                <LayoutGrid className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">
                No apps found matching your search.
              </p>
            </div>
          )}
        </section>

        <footer className="mt-16 pb-8 text-center">
          <p className="text-xs text-muted-foreground">
            Click any app to open it in a new tab
          </p>
        </footer>
      </main>
    </div>
  );
}
