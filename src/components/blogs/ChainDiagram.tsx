"use client";

import React from "react";
import { BlockBox, ArrowLink, TxPill } from "./primitives";

type DiagramState =
  | "empty"
  | "simple-chain"
  | "tx-mempool"
  | "tx-highlight"
  | "fork"
  | "fork-vote"
  | "reorg"
  | "fate-intro"
  | "fate-reincluded"
  | "fate-returned"
  | "fate-dropped"
  | "post-reorg-hold"
  | "late-block"
  | "double-sign"
  | "mev-steal"
  | "finalized"
  | "summary"
  | "stats";

function getState(scene: number): DiagramState {
  if (scene <= 1) return "empty";
  if (scene === 2) return "simple-chain";
  if (scene === 3) return "tx-mempool";
  if (scene === 4) return "tx-highlight";
  if (scene <= 6) return "fork";
  if (scene === 7) return "fork-vote";
  if (scene === 8) return "reorg";
  if (scene === 9) return "fate-intro";
  if (scene === 10) return "fate-reincluded";
  if (scene === 11) return "fate-returned";
  if (scene === 12) return "fate-dropped";
  if (scene === 13) return "post-reorg-hold";
  if (scene === 14) return "late-block";
  if (scene === 15) return "double-sign";
  if (scene === 16) return "mev-steal";
  if (scene === 17) return "finalized";
  if (scene === 19) return "stats";
  return "summary";
}

function MiniBlock({
  num,
  sub,
  variant,
  className = "",
}: {
  num: string;
  sub?: string;
  variant: "ok" | "new" | "dead" | "winner";
  className?: string;
}) {
  return (
    <BlockBox
      num={num}
      sub={sub}
      variant={variant}
      className={`!w-14 !h-14 md:!w-16 md:!h-16 !text-xs ${className}`}
    />
  );
}

function MiniArrow() {
  return <ArrowLink blue />;
}

function BaseChain() {
  return (
    <div className="flex items-center gap-0">
      {[1, 2, 3, 4].map((n, i) => (
        <React.Fragment key={n}>
          {i > 0 && <MiniArrow />}
          <MiniBlock num={`#${n}`} variant="ok" />
        </React.Fragment>
      ))}
    </div>
  );
}

function ForkConnector({
  topDashed,
  bottomDashed,
  topVisible,
  bottomVisible,
  topDead,
}: {
  topDashed: boolean;
  bottomDashed: boolean;
  topVisible: boolean;
  bottomVisible: boolean;
  topDead: boolean;
}) {
  const topColor = topDead
    ? "stroke-red-500 dark:stroke-red-500"
    : "stroke-amber-500/50 dark:stroke-amber-400/50";
  const bottomColor = "stroke-emerald-500/50 dark:stroke-emerald-400/50";

  return (
    <svg
      width="48"
      height="120"
      viewBox="0 0 48 120"
      className="shrink-0 -mx-1"
    >
      <line
        x1="0"
        y1="60"
        x2="48"
        y2="24"
        className={`transition-all duration-500 ${topVisible ? topColor : "stroke-transparent"}`}
        strokeWidth="2"
        strokeDasharray={topDashed ? "6 4" : "none"}
      />
      <line
        x1="0"
        y1="60"
        x2="48"
        y2="96"
        className={`transition-all duration-500 ${bottomVisible ? bottomColor : "stroke-transparent"}`}
        strokeWidth="2"
        strokeDasharray={bottomDashed ? "6 4" : "none"}
      />
    </svg>
  );
}

function VoteBar() {
  return (
    <div className="flex h-5 rounded-md overflow-hidden w-full max-w-[240px] mt-3">
      <div
        className="flex items-center justify-center text-[10px] font-bold bg-amber-500/25 text-amber-500 dark:text-amber-400"
        style={{ width: "38%" }}
      >
        5A 38%
      </div>
      <div
        className="flex items-center justify-center text-[10px] font-bold bg-emerald-500/20 text-emerald-500 dark:text-emerald-400"
        style={{ width: "62%" }}
      >
        5B 62%
      </div>
    </div>
  );
}

function ForkLayout({
  state,
}: {
  state: "empty" | "fork" | "fork-vote" | "reorg";
}) {
  const isReorg = state === "reorg";
  const isHero = state === "empty";

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <BaseChain />
        <ForkConnector
          topDashed={true}
          bottomDashed={!isReorg && !isHero}
          topVisible={true}
          bottomVisible={true}
          topDead={isReorg || isHero}
        />
        <div className="flex flex-col gap-4">
          <div
            className={`flex items-center gap-2 transition-all duration-500 ${isReorg || isHero ? "opacity-60" : "opacity-100"}`}
          >
            <MiniBlock
              num="#5A"
              sub={isReorg || isHero ? "orphaned" : "your 1 ETH"}
              variant={isReorg || isHero ? "dead" : "new"}
            />
            <span
              className={`text-[10px] font-bold tracking-wider uppercase transition-all duration-500 ${
                isReorg || isHero
                  ? "text-red-500 dark:text-red-400"
                  : "text-amber-500 dark:text-amber-400"
              }`}
            >
              A
            </span>
          </div>
          <div className="flex items-center gap-2 transition-all duration-500">
            <MiniBlock
              num="#5B"
              sub={isReorg || isHero ? "canonical" : "other txs"}
              variant="winner"
            />
            <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-500 dark:text-emerald-400">
              B {(isReorg || isHero) && <>&#10003;</>}
            </span>
          </div>
        </div>
      </div>
      {state === "fork-vote" && <VoteBar />}
    </div>
  );
}

function StateLayer({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
}

const LABELS: Record<DiagramState, string> = {
  empty: "a reorg in action",
  "simple-chain": "the chain",
  "tx-mempool": "the mempool",
  "tx-highlight": "your transaction",
  fork: "fork detected",
  "fork-vote": "validators voting",
  reorg: "reorganization",
  "fate-intro": "what happens now?",
  "fate-reincluded": "re-included",
  "fate-returned": "back to mempool",
  "fate-dropped": "dropped forever",
  "post-reorg-hold": "after the reorg",
  "late-block": "network latency",
  "double-sign": "equivocation",
  "mev-steal": "mev extraction",
  finalized: "finality",
  summary: "the chain moves on",
  stats: "reorg frequency",
};

const REORG_DATA = [
  { day: "Mar 17", count: 5 },
  { day: "Mar 18", count: 15 },
  { day: "Mar 19", count: 5 },
  { day: "Mar 20", count: 10 },
  { day: "Mar 21", count: 7 },
  { day: "Mar 22", count: 6 },
];

function ReorgChart() {
  const max = Math.max(...REORG_DATA.map((d) => d.count));
  const w = 280;
  const h = 160;
  const px = 32;
  const py = 16;
  const pb = 36;
  const plotW = w - px * 2;
  const plotH = h - py - pb;
  const stepX = plotW / (REORG_DATA.length - 1);

  const points = REORG_DATA.map((d, i) => ({
    x: px + i * stepX,
    y: py + plotH - (d.count / max) * plotH,
  }));

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
    .join(" ");
  const areaPath = `${linePath} L${points[points.length - 1].x},${py + plotH} L${points[0].x},${py + plotH} Z`;

  return (
    <div className="w-full max-w-[500px]">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
          <line
            key={pct}
            x1={px}
            y1={py + plotH * (1 - pct)}
            x2={px + plotW}
            y2={py + plotH * (1 - pct)}
            className="stroke-border"
            strokeWidth="0.5"
          />
        ))}

        {/* Area fill */}
        <path
          d={areaPath}
          className="fill-amber-500/10 dark:fill-amber-400/10"
        />

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          className="stroke-amber-500 dark:stroke-amber-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dots */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="3"
            className="fill-amber-500 dark:fill-amber-400"
          />
        ))}

        {/* X labels */}
        {REORG_DATA.map((d, i) => (
          <text
            key={i}
            x={points[i].x}
            y={py + plotH + 16}
            textAnchor="middle"
            className="fill-muted-foreground text-[8px]"
          >
            {d.day.slice(4)}
          </text>
        ))}

        {/* Y labels */}
        {[0, Math.round(max / 2), max].map((v, i) => (
          <text
            key={i}
            x={px - 6}
            y={py + plotH - (v / max) * plotH + 3}
            textAnchor="end"
            className="fill-muted-foreground text-[8px]"
          >
            {v}
          </text>
        ))}
      </svg>
      <p className="text-[10px] text-muted-foreground text-center mt-2">
        reorgs per day · Mar 2026
      </p>
    </div>
  );
}

function LateForkConnector() {
  return (
    <svg
      width="48"
      height="120"
      viewBox="0 0 48 120"
      className="shrink-0 -mx-1"
    >
      {/* Top branch: on time (solid emerald) */}
      <line
        x1="0"
        y1="60"
        x2="48"
        y2="24"
        className="stroke-emerald-500/50 dark:stroke-emerald-400/50"
        strokeWidth="2"
      />
      {/* Bottom branch: late (dashed red) */}
      <line
        x1="0"
        y1="60"
        x2="48"
        y2="96"
        className="stroke-red-500 dark:stroke-red-400"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
    </svg>
  );
}

function LateBlockDiagram() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <div className="flex items-center gap-0">
          {[1, 2, 3, 4].map((n, i) => (
            <React.Fragment key={n}>
              {i > 0 && <MiniArrow />}
              <MiniBlock num={`#${n}`} variant="ok" />
            </React.Fragment>
          ))}
        </div>

        <LateForkConnector />

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <MiniBlock num="#5B" sub="on time" variant="winner" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-500 dark:text-emerald-400">
              &#10003;
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MiniBlock num="#5A" sub="late" variant="new" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-red-500 dark:text-red-400">
              latency
            </span>
          </div>
        </div>
      </div>
      <p className="text-[10px] text-muted-foreground mt-4 text-center">
        #5A arrived too late — validators already voted for #5B
      </p>
    </div>
  );
}

function DoubleSignDiagram() {
  return (
    <div className="w-full max-w-[500px]">
      <svg viewBox="0 0 260 150" className="w-full">
        {/* Block #4 (chain tip) */}
        <rect
          x="10"
          y="55"
          width="44"
          height="30"
          rx="4"
          className="fill-blue-500/10 stroke-blue-500/40"
          strokeWidth="1"
        />
        <text
          x="32"
          y="74"
          textAnchor="middle"
          className="fill-blue-500 dark:fill-blue-400 text-[9px] font-bold"
        >
          #4
        </text>

        {/* Malicious validator node */}
        <circle
          cx="100"
          cy="70"
          r="18"
          className="fill-red-500/10 stroke-red-500/60"
          strokeWidth="1.5"
        />
        <text
          x="100"
          y="67"
          textAnchor="middle"
          className="fill-red-600 dark:fill-red-400 text-[7px] font-bold"
        >
          VAL
        </text>
        <text
          x="100"
          y="77"
          textAnchor="middle"
          className="fill-red-500 dark:fill-red-400 text-[6px]"
        >
          x2
        </text>

        {/* Arrow: block 4 → validator */}
        <line
          x1="54"
          y1="70"
          x2="80"
          y2="70"
          className="stroke-blue-500/40 dark:stroke-blue-400/40"
          strokeWidth="1.5"
        />
        <polygon
          points="79,68 82,70 79,72"
          className="fill-blue-500/40 dark:fill-blue-400/40"
        />

        {/* Top fork: validator → #5A */}
        <line
          x1="118"
          y1="62"
          x2="155"
          y2="35"
          className="stroke-amber-500/60 dark:stroke-amber-400/60"
          strokeWidth="1.5"
        />
        <polygon
          points="154,33 157,35 154,37"
          className="fill-amber-500/60 dark:fill-amber-400/60"
        />
        <rect
          x="158"
          y="20"
          width="44"
          height="30"
          rx="4"
          className="fill-amber-500/10 stroke-amber-500/50"
          strokeWidth="1"
        />
        <text
          x="180"
          y="39"
          textAnchor="middle"
          className="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold"
        >
          #5A
        </text>

        {/* Bottom fork: validator → #5B */}
        <line
          x1="118"
          y1="78"
          x2="155"
          y2="105"
          className="stroke-amber-500/60 dark:stroke-amber-400/60"
          strokeWidth="1.5"
        />
        <polygon
          points="154,103 157,105 154,107"
          className="fill-amber-500/60 dark:fill-amber-400/60"
        />
        <rect
          x="158"
          y="90"
          width="44"
          height="30"
          rx="4"
          className="fill-amber-500/10 stroke-amber-500/50"
          strokeWidth="1"
        />
        <text
          x="180"
          y="109"
          textAnchor="middle"
          className="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold"
        >
          #5B
        </text>

        {/* "same slot" label between blocks */}
        <text
          x="210"
          y="65"
          textAnchor="start"
          className="fill-muted-foreground text-[7px]"
        >
          same
        </text>
        <text
          x="210"
          y="75"
          textAnchor="start"
          className="fill-muted-foreground text-[7px]"
        >
          slot
        </text>

        {/* Slashed indicator */}
        <line
          x1="85"
          y1="92"
          x2="115"
          y2="92"
          className="stroke-red-500 dark:stroke-red-400"
          strokeWidth="2"
        />
        <text
          x="100"
          y="104"
          textAnchor="middle"
          className="fill-red-600 dark:fill-red-400 text-[7px] font-bold"
        >
          SLASHED
        </text>
        <text
          x="100"
          y="114"
          textAnchor="middle"
          className="fill-red-500/60 dark:fill-red-400/60 text-[6px]"
        >
          32 ETH burned
        </text>
      </svg>
    </div>
  );
}

function MevStealDiagram() {
  return (
    <div className="w-full max-w-[500px]">
      <svg viewBox="0 0 280 150" className="w-full">
        {/* Original block #5 with ARB tx visible */}
        <rect
          x="10"
          y="15"
          width="80"
          height="50"
          rx="4"
          className="fill-blue-500/10 stroke-blue-500/40"
          strokeWidth="1"
        />
        <text
          x="50"
          y="32"
          textAnchor="middle"
          className="fill-blue-500 dark:fill-blue-400 text-[8px] font-bold"
        >
          Block #5
        </text>
        <rect
          x="18"
          y="38"
          width="64"
          height="18"
          rx="3"
          className="fill-emerald-500/15 stroke-emerald-500/40"
          strokeWidth="0.5"
        />
        <text
          x="50"
          y="51"
          textAnchor="middle"
          className="fill-emerald-600 dark:fill-emerald-400 text-[7px]"
        >
          ARB tx · $2M
        </text>

        {/* Eye / spotter icon */}
        <text x="120" y="25" textAnchor="middle" className="text-[16px]">
          &#128065;
        </text>
        <text
          x="120"
          y="38"
          textAnchor="middle"
          className="fill-purple-600 dark:fill-purple-400 text-[6px] font-bold"
        >
          proposer
        </text>
        <text
          x="120"
          y="47"
          textAnchor="middle"
          className="fill-purple-500/60 dark:fill-purple-400/60 text-[6px]"
        >
          spots profit
        </text>

        {/* Arrow: eye → attacker block */}
        <path
          d="M 135 35 Q 155 35, 170 55"
          fill="none"
          className="stroke-purple-500/60 dark:stroke-purple-400/60"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <polygon
          points="169,54 172,57 168,57"
          className="fill-purple-500/60 dark:fill-purple-400/60"
        />

        {/* Attacker's competing block */}
        <rect
          x="160"
          y="58"
          width="100"
          height="50"
          rx="4"
          className="fill-purple-500/10 stroke-purple-500/50"
          strokeWidth="1.5"
        />
        <text
          x="210"
          y="74"
          textAnchor="middle"
          className="fill-purple-600 dark:fill-purple-400 text-[8px] font-bold"
        >
          Attacker&apos;s #5
        </text>

        {/* Front-run tx */}
        <rect
          x="168"
          y="80"
          width="42"
          height="18"
          rx="3"
          className="fill-purple-500/15 stroke-purple-500/40"
          strokeWidth="0.5"
        />
        <text
          x="189"
          y="92"
          textAnchor="middle"
          className="fill-purple-600 dark:fill-purple-400 text-[6px]"
        >
          front-run
        </text>

        {/* Original tx pushed back */}
        <rect
          x="214"
          y="80"
          width="38"
          height="18"
          rx="3"
          className="fill-emerald-500/10 stroke-emerald-500/30"
          strokeWidth="0.5"
        />
        <text
          x="233"
          y="92"
          textAnchor="middle"
          className="fill-emerald-600/60 dark:fill-emerald-400/60 text-[6px]"
        >
          ARB tx
        </text>

        {/* Profit arrow */}
        <path
          d="M 210 108 L 210 125"
          fill="none"
          className="stroke-purple-500 dark:stroke-purple-400"
          strokeWidth="1.5"
        />
        <polygon
          points="208,124 210,128 212,124"
          className="fill-purple-500 dark:fill-purple-400"
        />
        <text
          x="210"
          y="140"
          textAnchor="middle"
          className="fill-purple-600 dark:fill-purple-400 text-[7px] font-bold"
        >
          $2M captured
        </text>

        {/* Original block gets replaced */}
        <line
          x1="8"
          y1="13"
          x2="92"
          y2="67"
          className="stroke-red-500/40 dark:stroke-red-400/40"
          strokeWidth="1"
        />
        <line
          x1="92"
          y1="13"
          x2="8"
          y2="67"
          className="stroke-red-500/40 dark:stroke-red-400/40"
          strokeWidth="1"
        />
        <text
          x="50"
          y="78"
          textAnchor="middle"
          className="fill-red-500 dark:fill-red-400 text-[6px] font-bold"
        >
          replaced
        </text>
      </svg>
    </div>
  );
}

export default function ChainDiagram({
  currentScene,
}: {
  currentScene: number;
}) {
  const state = getState(currentScene);
  const showFork =
    state === "empty" ||
    state === "fork" ||
    state === "fork-vote" ||
    state === "reorg";
  const forkState = showFork
    ? (state as "empty" | "fork" | "fork-vote" | "reorg")
    : "empty";

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="transform scale-[0.7] md:scale-100 origin-center min-w-[500px] md:min-w-0 md:w-full">
        <div className="relative w-full" style={{ minHeight: 180 }}>
          {/* Hero / Fork / Vote / Reorg */}
          <StateLayer active={showFork}>
            <ForkLayout state={forkState} />
          </StateLayer>

          {/* Simple chain (scene 2): just blocks 1-4 */}
          <StateLayer active={state === "simple-chain"}>
            <BaseChain />
          </StateLayer>

          {/* TX in mempool (scene 3): blocks 1-4 + waiting pill */}
          <StateLayer active={state === "tx-mempool"}>
            <div className="flex flex-col items-center">
              <BaseChain />
              <div className="mt-4">
                <TxPill variant="waiting">your 1 ETH</TxPill>
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">
                waiting in mempool
              </div>
            </div>
          </StateLayer>

          {/* TX included (scene 4): blocks 1-4-5 */}
          <StateLayer active={state === "tx-highlight"}>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-0">
                <BaseChain />
                <MiniArrow />
                <MiniBlock num="#5" sub="your 1 ETH" variant="new" />
              </div>
              <div className="mt-4">
                <TxPill variant="safe">your 1 ETH &#10003;</TxPill>
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">
                confirmed
              </div>
            </div>
          </StateLayer>

          {/* Fate intro (scene 9): post-reorg chain + ? */}
          <StateLayer active={state === "fate-intro"}>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-0">
                <BaseChain />
                <MiniArrow />
                <MiniBlock num="#5B" sub="canonical" variant="winner" />
              </div>
              <div className="mt-4">
                <TxPill variant="in-block">your 1 ETH — ?</TxPill>
              </div>
            </div>
          </StateLayer>

          {/* Fate 1 — re-included (scene 10): 5A+5B merge into #5 */}
          <StateLayer active={state === "fate-reincluded"}>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-0">
                <BaseChain />
                <MiniArrow />
                <MiniBlock num="#5" sub="your 1 ETH" variant="winner" />
              </div>
              <div className="mt-4">
                <TxPill variant="safe">your 1 ETH &#10003;</TxPill>
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">
                re-included in winning block
              </div>
            </div>
          </StateLayer>

          {/* Fate 2 — returned to mempool (scene 11): 5B canonical, 5A faded, tx pending */}
          <StateLayer active={state === "fate-returned"}>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-0">
                <BaseChain />
                <MiniArrow />
                <MiniBlock num="#5B" sub="canonical" variant="winner" />
                <div className="ml-3 opacity-30">
                  <MiniBlock num="#5A" variant="dead" />
                </div>
              </div>
              <div className="mt-4">
                <TxPill variant="waiting">your 1 ETH (pending)</TxPill>
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">
                back in mempool
              </div>
            </div>
          </StateLayer>

          {/* Fate 3 — dropped forever (scene 12): 5B canonical, 5A faded, tx invalid */}
          <StateLayer active={state === "fate-dropped"}>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-0">
                <BaseChain />
                <MiniArrow />
                <MiniBlock num="#5B" sub="canonical" variant="winner" />
                <div className="ml-3 opacity-30">
                  <MiniBlock num="#5A" variant="dead" />
                </div>
              </div>
              <div className="mt-4">
                <TxPill variant="gone">your 1 ETH (invalid)</TxPill>
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">
                nonce conflict
              </div>
            </div>
          </StateLayer>

          {/* Post-reorg hold (scenes 13-16) */}
          <StateLayer active={state === "post-reorg-hold"}>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-0">
                <BaseChain />
                <MiniArrow />
                <MiniBlock num="#5B" sub="canonical" variant="winner" />
              </div>
            </div>
          </StateLayer>

          {/* Late block (scene 14) */}
          <StateLayer active={state === "late-block"}>
            <LateBlockDiagram />
          </StateLayer>

          {/* Double sign (scene 15) */}
          <StateLayer active={state === "double-sign"}>
            <DoubleSignDiagram />
          </StateLayer>

          {/* MEV steal (scene 16) */}
          <StateLayer active={state === "mev-steal"}>
            <MevStealDiagram />
          </StateLayer>

          {/* Finalized (scene 17) */}
          <StateLayer active={state === "finalized"}>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-0 flex-wrap justify-center">
                <MiniBlock num="#101" sub="finalized" variant="winner" />
                <MiniArrow />
                <MiniBlock num="#102" sub="finalized" variant="winner" />
                <MiniArrow />
                <MiniBlock num="#103" sub="safe" variant="ok" />
                <MiniArrow />
                <MiniBlock num="#104" sub="safe" variant="ok" />
                <MiniArrow />
                <MiniBlock num="#105" sub="latest" variant="new" />
              </div>
            </div>
          </StateLayer>

          {/* Summary */}
          <StateLayer active={state === "summary"}>
            <div className="flex items-center gap-0">
              <BaseChain />
              <MiniArrow />
              <MiniBlock num="#5" sub="final" variant="winner" />
            </div>
          </StateLayer>

          {/* Stats chart */}
          <StateLayer active={state === "stats"}>
            <ReorgChart />
          </StateLayer>
        </div>
      </div>

      {/* State label */}
      <div className="mt-4 text-[10px] font-bold tracking-[2px] uppercase text-muted-foreground transition-opacity duration-300">
        {LABELS[state]}
      </div>
    </div>
  );
}
