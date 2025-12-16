import ShowcaseComponent, { Showcase } from "@/components/Showcase";

const experience: Showcase[] = [
  {
    title: "Numu",
    descriptions: [
      <span>Founding Engineer: October 2025 - Present</span>,
      <span>
        <a href="https://numu.xyz" target="_blank" rel="noopener noreferrer">
          Numu
        </a>{" "}
        is a credit card powered by crypto, making digital assets accessible for
        everyday spending.
      </span>,
      <span>
        Started as a product within InfiniteCode, later spun off as an
        independent company. I am leading Numu's backend systems to enable
        seamless crypto-to-fiat transactions.
      </span>,
    ],
    image: "/numu.png",
  },
  {
    title: "InfiniteCode",
    descriptions: [
      <span>Backend Lead: June 2025 - November 2025</span>,
      <span>
        <a
          href="https://infinitecode.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          InfiniteCode
        </a>{" "}
        builds DeFi products focused on the Middle Eastern market. Joined after
        a sabbatical.
      </span>,
      <span>
        Contributed to{" "}
        <a href="https://nexon.xyz/" target="_blank" rel="noopener noreferrer">
          Nexon
        </a>
        , a DEX trading platform, helping build systems that power decentralized
        trading experiences.
      </span>,
    ],
    image: "/nexon.png",
  },
  {
    title: "Fileverse",
    descriptions: [
      <span>Software Engineer: April 2024 - January 2025</span>,
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
    title: "Coinswitch",
    descriptions: [
      <span>Software Engineer: January 2022 - March 2024</span>,
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
    title: "BrightMoney",
    descriptions: [
      <span>Internship: July 2021 - January 2022</span>,
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
      <ShowcaseComponent projects={experience} />
      <div className="h-[20vh]" />
    </div>
  );
}
