import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export interface InteractiveBlogProps {
  date: Date;
  tags: string[];
}

const registry: Record<string, ComponentType<InteractiveBlogProps>> = {
  "what-is-a-blockchain-reorg": dynamic(
    () => import("./what-is-a-blockchain-reorg"),
  ),
};

export function getInteractiveBlog(
  slug: string,
): ComponentType<InteractiveBlogProps> | null {
  return registry[slug] ?? null;
}
