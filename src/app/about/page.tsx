import Content from "@/components/Content";
import Social from "@/components/Social";
import Image from "next/image";

const age = Math.floor(
  (new Date().getTime() - new Date("2000-02-16").getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
);

export default function About() {
  return (
    <div className="flex flex-col mt-12 py-2">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-16">
        <Image
          src="/avatar.png"
          alt="Anubhav Singhal"
          width={200}
          height={200}
          className="rounded-2xl mb-8 
            grayscale hover:grayscale-0 transition-all duration-500
            shadow-lg hover:shadow-xl hover:scale-105
            border border-gray-200 dark:border-gray-700
          "
        />
      </div>

      {/* Content Section */}
      <div className="space-y-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        <div className="space-y-6">
          <p>
            Hi, I am Anubhav, a generalist software engineer. I've been
            automating stuff since high school, and I've picked up most of what
            I know through books, articles, and countless YouTube tutorials.
          </p>

          <p>
            I generally work remotely as an independent tech contributor, though
            I don't like to box myself into any specific role. I just want to
            build useful stuff, irrespective of language, frameworks or domain.
          </p>

          <p>
            When I am not working, I like to go on long walks, read random books
            to feed my curiosity, or cook myself a delicious meal.
          </p>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Want to contact me?
            </h3>
            <p>
              If you're building something cool and think I'd be a good fit for
              your team, want to bounce around ideas, cook something delicious
              or just join me on one of my long walks. Don't be shy, slide into
              my DMs <span className="text-xl">:)</span>
            </p>
          </div>
        </div>
        <Social github={false} linkedin={false} />
      </div>

      {/* Social Links */}
      <div className="flex justify-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"></div>
    </div>
  );
}
