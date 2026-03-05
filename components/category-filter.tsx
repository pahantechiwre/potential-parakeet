"use client";

import { Badge } from "@/components/ui/badge";
import type { AppCategory } from "@/lib/apps-data";
import { categories } from "@/lib/apps-data";

interface CategoryFilterProps {
  selected: AppCategory | "All";
  onSelect: (category: AppCategory | "All") => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect("All")}
        className="focus:outline-none"
      >
        <Badge
          variant={selected === "All" ? "default" : "outline"}
          className={`cursor-pointer px-3 py-1.5 text-sm rounded-lg transition-colors ${
            selected === "All"
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
          }`}
        >
          All
        </Badge>
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className="focus:outline-none"
        >
          <Badge
            variant={selected === category ? "default" : "outline"}
            className={`cursor-pointer px-3 py-1.5 text-sm rounded-lg transition-colors ${
              selected === category
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
            }`}
          >
            {category}
          </Badge>
        </button>
      ))}
    </div>
  );
}
