import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 max-w-lg">
      <div className="flex flex-col gap-2">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image
            src="/avatar.png"
            alt="Anubhav Singhal"
            width={120}
            height={120}
            className="transition-all rounded-md"
          />
        </div>
        <p className="text-base leading-relaxed">
          Hi, my name is Anubhav Singhal.
        </p>
      </div>

      <p className="text-base leading-relaxed">
        I build things and write about what I learn. Tech, books, and the
        occasional life lessons.
      </p>

      <div className="flex gap-4">
        <Link href="/contact"> Contact </Link>
        <Link href="/work">Work</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blogs">Writings</Link>
      </div>
    </div>
  );
}
