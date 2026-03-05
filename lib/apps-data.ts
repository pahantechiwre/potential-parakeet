import appsJson from "@/data/apps.json";

export type AppCategory =
  | "Social"
  | "Productivity"
  | "Entertainment"
  | "Development"
  | "Design"
  | "Communication"
  | "Finance"
  | "Education"
  | "News"
  | "Shopping";

export interface AppItem {
  id: string;
  name: string;
  description: string;
  url: string;
  category: AppCategory;
  color: string;
  icon: string;
}

export const apps: AppItem[] = appsJson.apps as AppItem[];
export const categories: AppCategory[] = appsJson.categories as AppCategory[];
