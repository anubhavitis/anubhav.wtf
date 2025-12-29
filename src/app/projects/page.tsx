import { ShowcaseProjects, Project } from "@/components/Showcase";

const projects: Project[] = [
  {
    title: "EzDawg",
    date: "December 2025",
    link: "https://ezdawg.vercel.app/",
    descriptions: [
      <span>
        A smart investment portal for creating Dollar Cost Average (DCA)
        investment on{" "}
        <a
          href="https://hyperliquid.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hyperliquid
        </a>{" "}
        spot assets with automated recurring purchases.
      </span>,
      <span>
        I first built a basic version for myself, and when a few friends showed
        interest, I deployed it for public use.
      </span>,
    ],
  },
  {
    title: "Peeksy",
    date: "June 2025",
    link: "https://github.com/anubhavitis/peeksy",
    descriptions: [
      <span>
        A macOS CLI tool that automatically renames screenshots with meaningful
        names.
      </span>,
      <span>
        I{" "}
        <a
          href="https://x.com/anubhavitis/status/1934292906455748995"
          target="_blank"
          rel="noopener noreferrer"
        >
          released
        </a>{" "}
        the first version of Peeksy back in June, 2025, and it has got amazing
        traction on Reddit and Twitter.
      </span>,
    ],
  },
  {
    title: "etcd-custom-orchestrator",
    date: "2023",
    link: "https://github.com/anubhavitis/etcd-custom-orchestrator",
    descriptions: [
      <span>
        A POC for horizontal scaling with different payload allocation
        strategies, I built this during my time at{" "}
        <a
          href="https://www.coinswitch.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoinSwitch
        </a>
        .
      </span>,
      <span>
        Later this was used at scale to power the pricing service and order
        service, eventually dropping p99 latency from 700ms to 5ms.
      </span>,
    ],
  },
  {
    title: "AlgoViz",
    date: "2019",
    link: "https://vizalgo.netlify.app/",
    descriptions: [
      <span>
        My pre-final year project. I was learning various graph algorithms and
        wanted to visualize how they work. And tada, AlgoViz was born.
      </span>,
      <span>
        My first project ever.{" "}
        <a
          href="https://github.com/ayush-tiwari57/Algorithm-Visualizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
        .
      </span>,
    ],
  },
];

export default function Projects() {
  return (
    <div>
      <div className="h-[20vh]" />
      <ShowcaseProjects projects={projects} />
      <div className="h-[20vh]" />
    </div>
  );
}
