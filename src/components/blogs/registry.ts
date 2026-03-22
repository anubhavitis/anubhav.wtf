import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const registry: Record<string, ComponentType> = {
  "what-is-a-blockchain-reorg": dynamic(
    () => import("./what-is-a-blockchain-reorg"),
  ),
};

export function getInteractiveBlog(slug: string): ComponentType | null {
  return registry[slug] ?? null;
}
