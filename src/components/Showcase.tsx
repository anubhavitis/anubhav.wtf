import Image from "next/image";

export type Showcase = {
  title: string;
  descriptions: (string | React.ReactNode)[];
  image: string;
};

export default function ShowcaseComponent({
  projects,
}: {
  projects: Showcase[];
}) {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col gap-4 py-4 border-b last:border-b-0"
        >
          <div className="flex flex-col gap-2">
            <div className="w-full h-48 relative rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
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
