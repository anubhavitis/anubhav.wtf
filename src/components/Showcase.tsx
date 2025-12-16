import Image from "next/image";

// Type for work experience (no title display, has images)
export type Experience = {
  descriptions: (string | React.ReactNode)[];
  image: string;
};

// Type for projects (has title, date, and link, no images)
export type Project = {
  title: string;
  date: string;
  link: string;
  descriptions: (string | React.ReactNode)[];
};

export function ShowcaseExperience({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <div className="flex flex-col gap-4">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 py-4 border-b last:border-b-0"
        >
          <div className="flex flex-col gap-2">
            {experience.image && (
              <div className="w-full h-48 relative rounded-lg">
                <Image
                  src={experience.image}
                  alt={`Experience ${index + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
            )}
            <p className="text-gray-600 dark:text-gray-400">
              {experience.descriptions.map((description, index) => (
                <span
                  className="text-gray-600 dark:text-gray-400 my-2 block"
                  key={index}
                >
                  {description}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ShowcaseProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col gap-4 py-4 border-b last:border-b-0"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">{project.title}</span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
            <span className="text-sm opacity-60">{project.date}</span>
            <p className="text-gray-600 dark:text-gray-400">
              {project.descriptions.map((description, index) => (
                <span
                  className="text-gray-600 dark:text-gray-400 my-2 block"
                  key={index}
                >
                  {description}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
