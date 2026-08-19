import type { Metadata } from "next";
import { ShowcaseExperience, Experience } from "@/components/Showcase";

export const metadata: Metadata = {
  title: "Work | Anubhav Singhal",
  description:
    "Backend and blockchain engineering roles at Outcome, Fileverse, Coinswitch and BrightMoney.",
};

const experience: Experience[] = [
  {
    company: "Outcome",
    role: "Founding Engineer",
    dates: "June 2025 - Present",
    link: "https://outcome.xyz",
    descriptions: [
      <span>
        <a href="https://outcome.xyz" target="_blank" rel="noopener noreferrer">
          Outcome
        </a>{" "}
        is an on-chain prediction market built on{" "}
        <a
          href="https://hyperliquid.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hyperliquid
        </a>
        , where you take a position on whether an event will happen. Joined
        after a sabbatical.
      </span>,
      <span>
        Traders buy YES or NO tokens priced by the market's implied probability,
        which settle to 1 USDC if the event happened and 0 if it did not, with
        no leverage and no liquidations. I lead the backend systems behind it.
      </span>,
    ],
    image: "/outcome.png",
  },
  {
    company: "Fileverse",
    role: "Software Engineer",
    dates: "April 2024 - January 2025",
    link: "https://fileverse.io",
    descriptions: [
      <span>
        <a
          href="https://fileverse.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fileverse
        </a>{" "}
        is an open-source decentralized workspace alternative to Google and
        Notion. Found them on Twitter and decided to contribute.
      </span>,
      <span>
        Worked on backend architecture for products like{" "}
        <a
          href="https://portal.fileverse.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fileverse Portal
        </a>{" "}
        and{" "}
        <a href="https://ddocs.new" target="_blank" rel="noopener noreferrer">
          Ddoc
        </a>
        , enabling collaborative experiences on decentralized infrastructure.
      </span>,
    ],
    image: "/fileverse.png",
  },
  {
    company: "Coinswitch",
    role: "Software Engineer",
    dates: "January 2022 - March 2024",
    link: "https://www.coinswitch.co",
    descriptions: [
      <span>
        <a
          href="https://www.coinswitch.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coinswitch
        </a>{" "}
        is India's largest crypto trading platform, serving millions of users.
        Joined as my first full-time role to build a career in blockchain.
      </span>,
      <span>
        I contributed to the trade engineering team, building features that help
        users trade seamlessly.
      </span>,
    ],
    image: "/coinswitch.png",
  },
  {
    company: "BrightMoney",
    role: "Internship",
    dates: "July 2021 - January 2022",
    link: "https://www.brightmoney.co/",
    descriptions: [
      <span>
        <a
          href="https://www.brightmoney.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BrightMoney
        </a>{" "}
        helps young Americans clear their debt using AI-driven insights on their
        expenses. Interned here during my final year.
      </span>,
      <span>
        Worked on breaking down the monolithic account aggregator service into
        multiple microservices, improving system scalability and
        maintainability.
      </span>,
    ],
    image: "/brightmoney.png",
  },
];

export default function Work() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-[20vh]" />
      <ShowcaseExperience experiences={experience} />
      <div className="h-[20vh]" />
    </div>
  );
}
