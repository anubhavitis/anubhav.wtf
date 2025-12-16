import { ShowcaseProjects, Project } from "@/components/Showcase";

const projects: Project[] = [
  {
    title: "Peeksy",
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
];

export default function Projects() {
  return <ShowcaseProjects projects={projects} />;
}
