# Scratchpad — Decision Log

## 2026-03-22: Interactive Blog Registry + Scroll-Driven Reorg Explainer

### What
Refactored interactive blog system into a scalable registry pattern, and rebuilt the blockchain reorg explainer with a sticky scroll-driven chain diagram.

### Key Decisions

1. **Blog registry pattern** — Each interactive blog is a React component in `src/components/blogs/<slug>.tsx`. A `registry.ts` maps slugs to lazy-loaded components via `next/dynamic`. Adding a new blog = 3 steps: create component, add to registry, create frontmatter stub.

2. **Shared primitives** — Extracted reusable components (Scene, SceneInner, Label, BlockBox, ArrowLink, Chain, TxPill, Callout, FateCard) into `primitives.tsx` for use across interactive blogs.

3. **Sticky chain diagram** — `ChainDiagram.tsx` with 15 visual states mapped to 20 scenes. Desktop: side-by-side (text left, sticky diagram right). Mobile: 40/60 split (diagram top, text bottom). Uses opacity-based crossfade (StateLayer) instead of conditional rendering to prevent mount/unmount flashes.

4. **Scroll-snap with fade transitions** — `snap-y snap-mandatory` on root container. Each scene is `h-screen snap-start`. IntersectionObserver (threshold 0.6, scroll container as root) tracks visibility. Scenes fade in/out both directions.

5. **Observer stability fixes** — `onVisible` callbacks stored in `useMemo` array (stable references). Scene uses `useRef` for callback to avoid observer recreation. Scroll container ref passed as `scrollRoot` prop.

6. **FateCards with mount animations** — CSS `@keyframes unfold` plays on mount (not transitions, since scenes remount). Each scene 10-12 shows all three fate cards with one expanded via keyframe animation.

7. **Custom SVG diagrams** — Scene-specific visualizations for "why reorgs happen": network latency (Y-fork with late block), double-sign (validator → 2 blocks + slashing), MEV extraction (front-run visualization with profit flow). All theme-aware via Tailwind classes.

8. **Reorg stats** — Line chart from etherscan data (Mar 17-22, 2026) showing ~10 reorgs/day. Static data, link to live etherscan page.

9. **Mobile responsiveness** — `scale(0.7)` on diagram container with `min-w-[500px]`. Reduced Callout padding. Smaller heading clamp values. Faster transitions (`duration-200`). `justify-start pt-[42vh]` instead of `justify-center`.

10. **Theme fix** — Removed `"use client"` from root layout so `next-themes` injects its script during SSR for proper system theme detection.

### Color Scheme Consistency
- **5A** (your tx): amber (`new` variant)
- **5B** (other): emerald (`winner` variant)
- **Dead/rejected**: red (`dead` variant), no strikethrough
- **Waiting/mempool**: gray dashed border (`waiting` variant)
- **Fork connectors**: amber for 5A, emerald for 5B, red when dead
- **MEV**: purple color scheme
- **Latency**: emerald (on time) vs red dashed (late)

### Files
- `src/components/blogs/registry.ts` — slug → component mapping
- `src/components/blogs/primitives.tsx` — shared Scene, BlockBox, etc.
- `src/components/blogs/ChainDiagram.tsx` — sticky diagram with 15 states
- `src/components/blogs/what-is-a-blockchain-reorg.tsx` — 20-scene blog
- `src/app/blogs/[slug]/page.tsx` — uses registry lookup
- `src/app/layout.tsx` — removed "use client", uses theme-provider
- `public/blogs/what-is-a-blockchain-reorg.html` — frontmatter stub

### Adding Future Interactive Blogs
1. Create `src/components/blogs/<slug>.tsx` (import primitives as needed)
2. Add one line to `src/components/blogs/registry.ts`
3. Create `public/blogs/<slug>.html` with YAML frontmatter

### PR
https://github.com/anubhavitis/anubhav.wtf/pull/1
