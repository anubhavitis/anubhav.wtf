---
date: "2025-12-30"
title: "Going through 2025"
description: "2025 broke me open. Here's what was inside."
tags: "personal,reflection"
category: "personal"
cover: "/blogs/covers/going-through-2025.jpeg"
coverCaption: ""
---

Every year, I become a newer version of me. This time I wanted to look into the events that mould it.

2025 broke me open. Here's what was inside.

---

## January

I figured I have enough runway to last for over 2 years, so I left my job a few weeks ago, with no plans to look for. I started experimenting with all the things I wanted to do.

![Vipassana](/images/going-through-2025/vipassana.jpeg)

Went for 10 days [Vipassana](https://www.dhamma.org/en-US/index) course. I had already been meditating for a few months, thus I expected it to be easy and natural to me. **Couldn't have been more wrong**. Apparently, our thoughts are the scariest thing and we have to learn to observe and make peace with them.

10/10 experience. There are things that I learned about myself that I wish I had known sooner. I have tried explaining them in past, and I have concluded that it's beyond limits of words. It's a **private feeling**, very precious to me.

---

## February

Started off with lot of confusions. Most of my life I have worked in trading ecosystem and AI was the big new thing, so I started playing with an idea of building an AI based trading system that can give maybe 0.5 - 1% profit on trades.

Wasn't sure how this will work, but **sounded fun to try out**.

started pomotrade.com

![February](/images/going-through-2025/february.jpeg)
(_pic by [clearlysid](https://x.com/clearlysid)_)

Given Indian business laws are pretty crazy with legal and tax rules. I decided to move ahead with a world beyond limits of government, I picked, [Hyperliquid](https://app.hyperliquid.xyz/) a Decentralised Exchange (DEX) to power trading in pomotrade.

---

## March

This is the first time I was playing with frontend code. AI was very helpful ofc, but at the same time friends like [Shaan](https://x.com/0xNotthatsundar) and [Harsh](https://x.com/Harshy01) helped me out a lot to understand how FE actually works, and even contributing to FE codebases to help me ship faster.

Took me a couple of weeks of head scratching and sleep deprived nights, and I was getting good with FrontEnd engineering. Its quite interesting, **I felt stupid for all the pride I had collected** as backend engineer, only if I had given this a fair attempt, I could have learned frontend in college itself.

![Interstellar](/images/going-through-2025/interstellar.jpeg)

I finally watched Interstellar, in IMAX. I must have watched it over 50 times by now, and I am sure I'll watch it 50 times more.

Nearly at the end of the month, [I spilled a glass of milk on my mac](https://x.com/anubhavitis/status/1905279666459656294?s=20). urgghhhhhh

I started playing [Split Fiction](https://store.steampowered.com/app/2001120/Split_Fiction/). I am not very much into gaming, but I was free and had too much in my mind. I didn't (still don't) have gaming setup so I had to travel to friends place to play this. This game was a good distraction.

---

## April

Somewhere around late first week, my mac was still at service centre, and I was close to finishing the game. **Then I had an accident** :/

I have driven many vehicles and so far I have been in two accidents, both on scooty, due to skid on brakes. (skill issue I guess)

![Accident](/images/going-through-2025/accident.jpeg)
(_pic by [mvs abhishek](https://x.com/wandering_shek)_)

3 months ago, I had a job, some work and fully capable physical body. Now, I don't even have my laptop, and I can't use it even if I did. Both my palms and left leg were severely bruised. (fortunately) no serious long term injury though.

**I was heartbroken, doubting my life choices and thinking how I got here.**

There wasn't much that I could do, thus I started reading [Founders at Work](https://www.goodreads.com/book/show/98233.Founders_at_Work). I have had this book for over 6 months, better read it now.

By the end of the month, I had partially recovered, and my mac was back as well. Took a day break and went to Mysuru. I often like to go there and just walk around. Its peaceful.

---

## May

This month was quite a rush.

By first week, Pomotrade's prototype was ready and that's where I discovered a major flaw in my calculations for AI expenses required for the feasibility. I had missed the cost of input tokens while using OpenAI keys, which were drastically high in my use case. Final AI costs were over 50x higher than my initial calculations.

**I was stunned. How can I make this error, and how did I miss it so far?**

I could have tried stress testing the AI front, that way I might have discovered the flaw in my maths nearly 3 months ago. But what now?

The high cost will only make sense for the premium users. Users over 100k USD worth of trade every day. Margin for these high value trade will be good enough to cover the AI costs.

Spent a week in conversation with some friends in HFT and Quant firms to understand how they deal with high ticket markets.

This is where I realised that why HFT companies have very small market size, and why core idea of Pomotrade cannot work. At-least not now.

I was tired and drained. **Upset with myself** for all the kinds of issues I had been handling and the errors I was making.

I tried looking at Pivot opportunities, but somewhere around 2nd half of the month, I decided to shut Pomotrade.

Pomotrade: **End of chapter**.

I wasn't feeling good. I moved to Delhi for a week to spend some time with my college friends, and later went home to sit, relax and rethink my life decisions.

---

## June

It's nearly 6 months, I have **burned a lot of savings**, unemployed and at home attending my cousin's marriage.

I am not very close to my cousins, and I don't use much social media. Therefore, no one was aware of what I was going through. Every interaction there was a reminder of how much they are looking up to me. And every day, I was losing sense of what I was doing.

In may, I had written a small script overnight to automate screenshot naming in my machine, here is the [demo](https://x.com/anubhavitis/status/1922303569639702976?s=20). It had received good traction on X and reddit. So I decided to spend some time on it.

**I wasn't sure what I wanted from it, but it was something.**

[Released](https://x.com/anubhavitis/status/1934292906455748995?s=20) a brew installable CLI tool, called as [Peeksy](https://github.com/anubhavitis/peeksy). Now anyone can just install peeksy, and let peeksy automatically rename all your screenshots using OpenAI vision models. I wanted to use Apple's foundational models, though they didn't provide vision models.

I was aware there is small set of users who actually care about this problem. So a CLI tool is good enough.

I started receiving emails from users. Some emails were about bugs, and others were feature requests. **This was the first time a user was contacting me for something I build.**

Fixed bugs, and then started planning for peeksy-v2, with support to rename other images apart from screenshots, and more reliable systemctl auto start on reboot.

---

## July

[Released](https://github.com/anubhavitis/peeksy/releases/tag/v2.0) peeksy-v2 with several enhancements. Got some good feedback from users.

Next was to release a mac native desktop application for users who are not comfortable using cli tool.

Around this time, Peeksy was [featured in liveMint](https://www.livemint.com/mint-lounge/business-of-life/screenshots-technology-evolution-archive-memory-clutter-11754050054531.html).
![LiveMint Feature](/images/going-through-2025/livemint.png)

Once the app was ready to be published, I came to know that Apple's notarisation requires $100 cost, and thus **dropped the plan to release it**.

Later I also came to an understanding that **people who aren't comfortable with cli, are normal** and won't be interested to pay for a tool that renames images automatically.

Even if there are customer, then the customer base is small enough that its easier that if I just setup the peeksy-cli in their mac rather than building a desktop app for it.

Somewhere along this, [InfiniteCode](https://infinitecode.org/) was looking for a backend lead for one of their product called as [Nexon](https://nexon.xyz/). Their tech stack was very much similar to Pomotrade, [Shaan](https://x.com/0xNotthatsundar) was part of their frontend team and shared my profile.

Two days later, I had **joined [InfiniteCode](https://infinitecode.org/) as Backend Lead** at [Nexon](https://nexon.xyz/).

---

## August

Life was much simpler now. I was enjoying the working on [Nexon](https://nexon.xyz/). I was relaxed and in peace with my present.

For over a year I have been planning to shift to new place and live alone for sometime. This seemed like a good time to do so. I mean, **when, if not now?**

Thus I started looking for my replacement flatmate, once this is sorted, I'll become nomad for a while and find a newer place where I can live alone for a while.

Apart from work, this month was mostly spent on interviewing potential flatmates who can be my replacement in my existing place. This might seem like a overhead, though my place was very chill and **I was very good friends with my (then) flatmates**. I wanted someone good and fitting to replace me.

By end of the month, I had found my replacement and vacated my room from one of the best roofs I have sheltered, in the heart of Koramangala.

---

## September

**I was homeless now.**

I stayed at friends place for a week, and then went to Delhi again to stay with friends from college.

Went to [Art Asia Delhi](https://www.pyogallery.com/artfairs/art-asia-delhi-2025), and [ETHGlobal New Delhi](https://ethglobal.com/events/newdelhi).

I took lot of pictures, but this one is my fav. [Broken Water](https://boldjourney.com/meet-sung-jae-lee/) by Lee Seong-jae. Lee explained this art is inspired from when his wife gave birth to their first child. I am blown away.

![Broken Water](/images/going-through-2025/broken-water.jpeg)

Also, it was [Navratri](https://en.wikipedia.org/wiki/Navaratri) at end of the month, thus went to home for a week as well.

---

## October

I returned to Bengaluru before Diwali. The goal was to stay at friends place when they are at home for Diwali. And the city is very less crowded at this time, so flat hunting and moving will be easier.

By Oct 20, exactly on Diwali, **I had moved to new place in Indiranagar**. I am going to live here alone for next 6 months. Then [Shaan](https://x.com/0xNotthatsundar) will move in with me around late March.

This is the view from my terrace of the new place
![Terrace View](/images/going-through-2025/terrace-view.jpeg)

Now I am at my 3rd place in Bengaluru in the last 4 years.

I finally joined gym. **I hate gym**, so I booked a trainer as well. It was expensive, and thats why I took it. I didn't expect from myself to go to gym, so **I wanted to created enough push to not be able to avoid this**.

Since then, I have been going to gym regularly. It was tough in start, but my trainer kept calling me and pushing me to train well.

So now, I have three things that I look forward to everyday. **Meditation, Gym and my work. Simple life.**

During this month, some changes happened at [InfiniteCode](https://infinitecode.org). Founders came up with new product, later named as [Numu](https://numu.xyz). There are lot of products in market which enables users pay using crypto through debit cards, Numu's goal to create a **crypto backed credit card and let users earn** by delaying the actual payment.

Ahmed & Ali (co-founders) wanted me to be **Backend lead** and a founding engineer at Numu. I like the product idea, thus I moved to [Numu](https://numu.xyz).

Somewhere along the end of the month, I booked one way tickets to [Shillong](https://share.google/4TGjLze576rrQrUy7) for mid Nov. Didn't have much plans for what I was gonna do there, but I wanted to go on a trip, and Nov seemed like best time to visit North-East India.

---

## November

My Shillong trip was nearly 10 days, but when I look back I don't remember anything else. Unarguably **the best trip of 2025**, and one of the best trip of my life.

![Shillong Clouds](/images/going-through-2025/shillong-clouds.jpeg)
(_fyi, this isn't a lake. there are small villages below clouds_)

I met so many people from different parts of the country. Some were there on vacation, some were there for work, and rest (including me) were working remotely while exploring.

**Everyday was a new adventure there**. Early morning walks, bike riding, trekking to view points, trying local foods and wines.

![Shillong Adventure](/images/going-through-2025/shillong-adventure.jpeg)
(_pic by [kashmira](https://x.com/lowkeyloud_)\_)

Luckily, [Shillong Literary Festival 2025](https://shillonglitfest.com/) was happening when I was there. Being a big fan of books and reading, I had to go there. This was my first literary festival, thanks to friends from zostel who introduced me to it.

![Literary Festival](/images/going-through-2025/literary-festival.jpeg)

Some of the greatest storytellers from all parts of the country were there. I didn't get time to listen to them all since I was working during the day, though I am grateful for all the events I did attend.

Writers are often portrayed as boring people, though I found them to be quite cheerful and humorous, irrespective of the genre they worked in. For instance, [Shehan Karunatilaka](https://share.google/uYKf4NsI7x4rhrvSI) is an award-winning author in thrilling, murder mystery, paranoia novels. Yet when I was talking to him, he was so witty and quick with jokes.

There is only one thing I had planned for this trip, and that was my visit to [Kamakhya temple](https://share.google/nVQqMYJTkAJUyXsXL).

![Kamakhya Temple](/images/going-through-2025/kamakhya.png)

**Woke up at 3am** and got in queue for entrance. It was cold, and I was barefoot, sleep deprived and recovering from fatigue of trekking a day before.

I got inside the temple nearly 6hrs later around 9am.
During my time in queue, I often sat down and tried to meditate and feel the cosmic energies. Though, most of the time I just fell asleep :/

Still, there was something special about the temple that cannot be described in words. As soon as I got in, **I felt like I was the only person there, so alive as if I just woke up**.

Someday, I want to take my parents there as well, I am sure they'll love it.

---

## December

It's been over 2 months since I have been hitting gym. **I feel stronger, and I look forward to gym.**

But there was no observable weight loss, so I took [InBody](https://www.inbody.in/) analysis. I had burned 4% body fat, and gained muscles enough so that my body weight didn't move much. I take that as win.

I was getting more confident everyday, and I wanted to work on my focus skills. Meditation is good, but there was one more thing that felt like a good experiment.

![Dumbphone](/images/going-through-2025/dumbphone.jpeg)

I ditched my smartphone in mid-december. It started as a weekend thing since **I expected it to be unreliable**. Though it happened to be working quite well. Now, this is my permanent phone, and I carry my smartphone in my bag as **an internet and camera utility**.

This experiment has been great success, there are lot of things I observed, maybe I'll put them up in another article. tldr: you can actually live happily without a smart phone. Its not as tough as your brain tells you.

---

### Looking forward

I am not much into setting new year resolutions. Here is something that I have thought of completing in 2026:

1. **Get stronger**: Bring body fat <18%. Seems doable, all I have to do is be consistent with gym.
2. **Write more**: I rarely write something that I am confident to publish. Wanna change that in 2026.
3. **Complete Kriya Yoga Training**: It is a [nine month programme](https://yssofindia.org/lessons-programmes), I gotta complete it this year.
4. **Release Numu**: This is professional commitment and I am very passionate about using it post release.

Initially I wanted to write this event wise, though it didn't feel very connected, thus I went with month wise.

There were ups and downs, highs and lows. I am glad I was able to survive this. Reminds me of a song:

[With A Little Help From My Friends](https://youtu.be/0C58ttB2-Qg?si=s5rRswZs7tw4YtcS)
