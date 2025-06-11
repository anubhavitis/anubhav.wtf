import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-12 mb-16">
      <Image
        src="/avatar.png"
        alt="Marshall Bock"
        width={96}
        height={96}
        className="rounded-full mb-4"
      />
    </div>
  );
}
