import React from "react";
import ShowcaseComponent, { Showcase } from "./Showcase";

export type ShowcaseHolderProps = {
  projects: Showcase[];
  title: React.ReactNode;
  description: string;
};

const ShowcaseHolder = ({
  projects,
  title,
  description,
}: ShowcaseHolderProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          <div className="flex flex-col gap-2">{title}</div>
        </h1>
        <p>{description}</p>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <ShowcaseComponent projects={projects} />
      </div>
    </div>
  );
};

export default ShowcaseHolder;
