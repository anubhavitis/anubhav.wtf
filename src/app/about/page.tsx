import Image from "next/image";

const age = Math.floor(
  (new Date().getTime() - new Date("2000-02-16").getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
);

export default function About() {
  return (
    <div className="flex flex-col gap-2 ">
      {/* Header Section */}
      <div className="flex flex-col mt-24">
        <Image
          src="/avatar.png"
          alt="Anubhav Singhal"
          width={150}
          height={150}
          className="rounded-2xl transition-all duration-500
            shadow-lg hover:shadow-xl hover:scale-105
            border border-gray-200 dark:border-gray-700
          "
        />
      </div>

      {/* Content Section */}
      <div className="space-y-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        <div className="space-y-6">
          <p>
            Hello. My name is Anubhav Singhal, a generalist software engineer
            based in India.
          </p>
          <p>
            I've been automating things since high school, and I've picked up
            most of what I know through books, articles, and countless YouTube
            tutorials.
          </p>

          <p>
            I generally work remotely as an independent tech contributor, though
            I don't like to box myself into any specific role. I just want to
            build useful stuff, irrespective of language, frameworks or domain.
          </p>

          <p>
            When I am not working, you'll find me on long walks, reading random
            books to feed my curiosity, or cooking myself a delicious meal.
          </p>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Want to contact me?
            </h3>
            <p>
              I am active on twitter and my email. However, the best way to
              reach out would be introduction via someone I know.
            </p>
            <div className="flex gap-4 text-black dark:text-white">
              <a
                href="https://twitter.com/anubhavitis"
                className="hover:underline hover:decoration-green-600 decoration-2"
                target="_blank"
              >
                twitter
              </a>
              <a
                href="mailto:anubhavitis@gmail.com"
                className="hover:underline hover:decoration-green-600 decoration-2"
                target="_blank"
              >
                anubhavitis@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"></div>
    </div>
  );
}
