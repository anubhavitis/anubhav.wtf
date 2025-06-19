import Content from "@/components/Content";
import Social from "@/components/Social";
import Image from "next/image";

const age = Math.floor(
  (new Date().getTime() - new Date("2000-02-16").getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
);

const contents = [
  {
    head: "Hi",
    body: [
      "I am Anubhav Singhal, a " +
        age +
        "-year-old software engineer based in Bengaluru, India.",
      "I like reading random books, going for long walks, exploring maths and physics, or cooking comfort food.",
    ],
  },
  {
    head: "Currently",
    body: [
      "I am exploring world of AI, crafting things that I would love to use.",
      "I released Peeksy recently, and now I am working on new features of Peeksy",
      "I have developed runner's knee, so I am hitting the gym regularly to strengthen my knee and get back to running asap.",
    ],
  },
  {
    head: "Strengths",
    body: [
      "I love solving problems, be it maths, puzzle or any real life situations. Its a thrilling experience for me.",
      "I am meticulous with my work. Which often means walking extra miles to find solutions.",
      "I appreciate honest feedback, and prefer doing that myself when required.",
    ],
  },
  {
    head: "Weakness",
    body: [
      "I am an introvert who likes to spend most of his time alone with books and a computer. I also enjoy company of people who know me well enough making me instinctively trust their presence.",
      "I rarely drink, never smoke, and a vegetarian by choice. I am claustrophobic, so its not too difficult for me to avoid parties.",
    ],
  },
  {
    head: "Personal",
    body: [
      "I am an early bird by choice, looking at sunrise is an important part of my day.",
      "I water fast every Tuesday, therefore, my week revolves around Tuesday instead of Sunday.",
      "I meditate regularly, preferably early morning.",
      "I don't like drinking tea or coffee. I am water person. My parents raised me like that. So blame them if you don't like this. I, however, love it.",
      "I am a solo traveller. I prefer visiting small and quite places, staying at hostels to meet fellow solo travelers.",
      "I love cooking north Indian food and I make sure I get to cook at-least once a week.",
      "I like exploring different music. Vivid genre, languages, styles, blends, etc. Spotify does an amazing job in recommending me new music.",
      "I am not a fan of buying things. Ownership is a responsibility. So, I often rent stuff and sell my possessions as soon its utility is exhausted for me.",
    ],
  },

  {
    head: "Fun facts",
    body: [
      "I am really good at whistling. I can whistle almost any tune.",
      "I always have some wounds/injuries, mostly in my legs. That's because I am careless, not adventurous. ",
      "I grew up in a big joint family with cousins with almost all age-groups. Believe me, even today, I have cousins who are a few months old to some in their 30s.",
      "I am not a pet person, and by that I mean pets avoid me.",
    ],
  },
];

export default function About() {
  return (
    <div className="flex flex-col my-16">
      <div className="flex justify-center">
        <Image
          src="/avatar.png"
          alt="Anubhav Singhal"
          width={200}
          height={200}
          className="rounded-lg mb-16 
          grayscale hover:grayscale-0 transition-all duration-300
          shadow-lg shadow-gray-300 dark:shadow-gray-700
          hover:shadow-xl
        "
        />
      </div>
      <div>
        {contents.map((content) => (
          <Content key={content.head} head={content.head} body={content.body} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Social />
      </div>
    </div>
  );
}
