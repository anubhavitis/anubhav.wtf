import ProjectsComponent, { Project } from "@/components/Projects";

const projects: Project[] = [
  {
    title: "Peeksy",
    descriptions: [
      "Peeksy is a macos tool that automatically renames the screenshots with meaningful names.",
      <span>
        I{" "}
        <a
          href="https://x.com/anubhavitis/status/1934292906455748995"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          released
        </a>{" "}
        the first version of Peeksy back in June, 2025, and it has got amazing
        traction on Reddit and Twitter.{" "}
      </span>,
      "Currently, I am working on Peeksy 2.0, which will be a major update to the app along with new GUI and AI features.",
    ],
    link: "https://github.com/anubhavitis/peeksy",
    image: "/peeksy.png",
  },
  {
    title: "Fileverse",
    descriptions: [
      "Fileverse is open-source decentralized collaborative workspace alternative to Google and Notion. ",
      <span>
        I designed and implemented the backend architecture for Fileverse's
        multiple products like{" "}
        <a
          href="https://portal.fileverse.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Fileverse Portal
        </a>
        ,{" "}
        <a
          href="https://ddocs.new"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Ddoc
        </a>
        , etc.{" "}
      </span>,
    ],
    link: "https://fileverse.io",
    image: "/fileverse.png",
  },
  {
    title: "Coinswitch",
    descriptions: [
      "Coinswitch is India's largest crypto trading platform.",
      "I contributed to the trade-engineering-team at Coinswitch, by designing and launching multiple key features used by millions monthly.",
    ],
    link: "https://www.coinswitch.co",
    image: "/coinswitch.png",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col justify-between my-16">
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          <div className="flex flex-col gap-2">
            <span>Things I have build,</span>
            <span>while making my mark on the web.</span>
          </div>
        </h1>
        <p>
          Building is the best way to learn. Here are some of the best projects
          I have worked on.
        </p>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-10 mb-16 md:mb-32">
        <ProjectsComponent projects={projects} />
      </div>
    </div>
  );
}
