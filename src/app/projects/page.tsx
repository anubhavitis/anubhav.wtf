import ShowcaseComponent, { Showcase } from "@/components/Showcase";

const projects: Showcase[] = [
  {
    title: "Peeksy",
    descriptions: [
      <span>
        <a
          href="https://github.com/anubhavitis/peeksy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peeksy
        </a>{" "}
        is a macos cli tool that automatically renames the screenshots with
        meaningful names.",
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
        traction on Reddit and Twitter.{" "}
      </span>,
    ],
    image: "/peeksy.png",
  },
];

export default function Projects() {
  return <ShowcaseComponent projects={projects} />;
}
