import Image from "next/image";

export type Showcase = {
  title: string;
  descriptions: (string | React.ReactNode)[];
  link: string;
  image: string;
};

export default function ShowcaseComponent({
  projects,
}: {
  projects: Showcase[];
}) {
  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col md:flex-row gap-4 mt-12"
        >
          <div className="group">
            <div className="flex flex-col gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <h2
                  className="text-2xl font-bold text-gray-600 dark:text-gray-300
                group-hover:underline decoration-2 decoration-green-500 group-hover:underline-offset-4
                "
                >
                  {project.title}
                </h2>
              </a>
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
          <div className="w-full h-48 relative">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover rounded-lg hover:scale-150 transition-all duration-600"
              width={400}
              height={300}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
