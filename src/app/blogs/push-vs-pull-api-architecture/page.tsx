"use client";
import React from "react";

export default function PushVsPullAPIArchitecture() {
  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto py-8 mt-16">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Push vs Pull API Architecture
        </h1>
        <p className="text-gray-500 dark:text-gray-400">June 20, 2021</p>
      </div>
      <p>
        The number of internet users has increased massively in the past few
        years, and handling this enormous amount of traffic is a big challenge
        for application developers. Choosing an appropriate architecture for
        communication between the server and clients plays a significant role in
        ensuring that traffic is kept at a manageable level.
      </p>
      <p>
        In this article, you're going to learn about the push and pull
        architecture of network communications, and how push architecture can
        limit the load on your application server, increasing performance.
      </p>
      <hr className="my-8 border-gray-300 dark:border-gray-600" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Architecture of Network Communications
      </h2>
      <p>
        There are two primary approaches to network communications—push and
        pull.
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-semibold">Pull:</span> Often referred to as{" "}
          <a
            href="https://ably.com/topic/long-polling"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            polling
          </a>
          , it's especially common on the internet. A client, such as: a user,
          web browser, or application, etc. requests information and the server
          responds with the information requested. It's like looking up the
          score of yesterday's football game: the information is static, and
          there's no need for frequent—or any—updates. The client requests the
          information, the server provides it, and the exchange is over.
        </li>
        <li>
          <span className="font-semibold">Push:</span> This is an architecture
          where data is pushed upstream over a connection as soon as it becomes
          available. One type of push-based transport is called a{" "}
          <span className="font-semibold">websocket</span>, which is a
          persistent, bidirectional connection through which both the client and
          the server can push data. It's one of the foundations of the real-time
          web, and is the technology that underpins many popular chat and other
          real-time platforms. Other common places people encounter push-style
          communication is on their phones, where special offers, notifications,
          and score updates are often delivered directly to their devices.
        </li>
      </ul>
      <img
        className="my-6"
        src="https://media0.giphy.com/media/qxtxlL4sFFle/giphy.gif?cid=ecf05e47rysimcqoq4xngbcnapcrj1nawyceqoafcqebky5a&rid=giphy.gif&ct=g"
        alt="Confused Gif"
      />
      <p>
        It's important to understand the difference between push and pull APIs
        so that you can select the right architecture for your service.
      </p>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Pull API Architecture
      </h2>
      <p>
        If your client app needs to find out if there is any new information on
        the server side, the easiest—if not always the best—way to accomplish
        this is to call and ask, which is basically how pull APIs work. They are
        a type of network communication where the client application initiates
        the communication by requesting updates. The server receives the
        request, verifies it, processes it, and sends an appropriate response
        back to the client.
      </p>
      <p>
        This whole process of polling updates usually takes hundreds of
        milliseconds. If there are many requests, it can slow down or even
        overload your server layer, resulting in a poor user experience,
        customer complaints, and even economic losses. Therefore, to control
        traffic, many companies often use rate limits to limit how often a
        client can ask for the same information.
      </p>
      <p>
        While some of the drawbacks of pull architecture can be mitigated by a
        system that can distribute processing, even this quickly becomes a very
        expensive, resource-intensive option. If you need the ability to
        communicate frequent updates, push architecture is likely a better
        choice.
      </p>
      <img
        className="my-6"
        src="https://i.imgur.com/RrRkb4B.png"
        alt="Pull architecture"
      />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Push API architecture
      </h2>
      <p>
        The strongest use case for push APIs are for instances in which you have
        time-sensitive data that changes often, and clients need to be updated
        as soon as that data changes.
      </p>
      <p>
        Push APIs allow the server to send updates to the client whenever new
        data becomes available, without a need for the client to explicitly
        request it. When the server receives new information, it pushes the data
        to the client application, no request needed. This makes it a more
        efficient communication standard for data that stays changes often.
      </p>
      <img
        className="my-6"
        src="https://i.imgur.com/HIIkRQ1.png"
        alt="Push Architecture"
      />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Pull vs Push APIs
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          In a pull API, the client requests the information. In a push API, the
          server sends the information as it becomes available.
        </li>
        <li>
          Pull architecture is request driven: the client sends the request, and
          the server responds accordingly. Push architecture is event driven:
          the server pushes data to clients as updates become available.
        </li>
        <li>
          In a push API, the server needs to store client details to reach
          clients directly. With pull, the server doesn't need to store these
          details, because they're encoded in the request.
        </li>
        <li>
          Push APIs are significantly faster than pull APIs. In a pull API, the
          server must receive and verify the request, then process information
          to form a response that's sent to the client. In a push API, the
          server immediately processes information and sends it to clients as
          soon as it's available.
        </li>
      </ul>
      <hr className="my-8 border-gray-300 dark:border-gray-600" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Why Push APIs?
      </h2>
      <p>
        Push APIs are widely used to minimize server load in apps with large
        user bases and frequent data exchanges or real-time data. Instead of
        users making frequent requests to stay updated with the newest
        information, servers instantly push data as new information is obtained.
        Push APIs are particularly useful for enhancing system efficiency by
        utilizing fewer resources, resulting in a more stable and cost-effective
        system.
      </p>
      <p>
        Users receive around{" "}
        <a
          href="https://www.businessofapps.com/marketplace/push-notifications/research/push-notifications-statistics/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          forty-five notifications
        </a>{" "}
        every single day. Imagine the load that places on a system with
        thousands or even millions of users. Push APIs make this level of
        traffic much more manageable.
      </p>
      <p>
        Push architecture also enables you to trigger parallel workflows in your
        application system. You can simply create a message with appropriate
        data for the workflow and push it to the parallel worker to process it
        or send it to the queue. A similar workflow can be performed using a
        pull architecture, but repeatedly requesting for messages to be placed
        in a queue can be time-consuming and difficult to implement.
      </p>
      <img
        className="my-6"
        src="https://media0.giphy.com/media/4mZQ9uz6ziXamkMW54/giphy.gif"
        alt="Where do I begin"
      />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Use Cases for Push APIs
      </h2>
      <p>
        Both architecture styles have use cases where they shine. Understanding
        these use cases will help you understand which API architecture is right
        for your application, and how it will affect your overall system.
      </p>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Delivering System Updates
      </h3>
      <p>
        Pull APIs can be an expensive and risky choice here. Let's say you have
        a thousand users, and they request updates every five minutes. If that's
        the case, you're looking at around two hundred thousand requests a day,
        just for updates. This puts a huge, unnecessary burden on the system.
        This is especially true if your system isn't updated frequently, since
        most of the time, the client will request information, and receive
        "updated" information in which nothing has changed.
      </p>
      <p>
        Push APIs are an excellent option here, since they can eliminate the
        constant update requests to the server. This reduces the server load,
        and creates room for other processes in your application server.
      </p>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Systems With Complex Routing
      </h3>
      <p>
        If your application system requires complex routing across numerous
        servers, the communication architecture you choose can have a
        significant impact on both the system and the implementation process.
      </p>
      <p>
        With push architecture, servers can simply push messages and client
        details to the queue together, making push architecture a viable option
        in a complex system. In a pull architecture, servers have to go through
        complex logic to check and pull a message out of another server and into
        a queue. Not only is this difficult to implement, but it's also
        expensive and time-consuming.
      </p>
      <p>
        There are many other common use cases where Push APIs are used as a
        standard approach.
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-semibold">Event triggers:</span> A new parallel
          workflow is initiated with an event trigger.
        </li>
        <li>
          <span className="font-semibold">Promotional marketing:</span> Push
          notifications are sent to users to notify them about discounts, sales,
          and new offers.
        </li>
        <li>
          <span className="font-semibold">Geographic location tagging:</span>{" "}
          Location and other geographic data are collected by remote devices,
          such as your cell phone, and sent to servers using push architecture.
        </li>
        <li>
          <span className="font-semibold">Notifications and reminders:</span>{" "}
          Social media notifications, weather alerts, and top news articles that
          are sent to your device are made with push architectures.
        </li>
      </ul>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Push APIs In Advanced Network Architectures
      </h3>
      <p>
        Push APIs are a common feature of advanced network architectures,
        including the following.
      </p>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-2">
        Event driven
      </h4>
      <p>
        <a
          href="https://ably.com/blog/introduction-event-driven-architecture/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Event-driven
        </a>{" "}
        architecture is common in microservices-based systems. It utilises
        events to trigger communication and actions across different services.
      </p>
      <p>
        Producers, brokers, and consumers are the three key components of this
        design. The publishers publish an event, which the brokers then filter
        and push to the consumer micro-services. This architecture uses push
        APIs to push events from publishers to brokers, and then from brokers to
        consumers, triggering appropriate services.
      </p>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-2">
        Pub/Sub
      </h4>
      <p>
        For asynchronous messaging, the{" "}
        <a
          href="https://ably.com/blog/pub-sub-pattern-examples"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          pub/sub
        </a>{" "}
        architecture is very popular. Pub/sub is a specific type of event-driven
        architecture that's more scalable than other messaging architectures.
      </p>
      <p>
        A publisher publishes information to a broker, and clients receive that
        information from the broker based on their subscriptions. Push APIs are
        used by the publisher to send information to the broker, who then sends
        the information to its subscribers.
      </p>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-2">
        WebSockets
      </h4>
      <p>
        <a
          href="https://ably.com/blog/introducing-the-websocket-handbook"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          WebSockets
        </a>{" "}
        establishes a long-lived, socket-like connection between the server and
        the clients, enabling them to exchange data at any moment. There are no
        requests or responses; messages are just pushed from one end to the
        other, and push APIs are at the heart of the WebSockets architecture.
      </p>
      <hr className="my-8 border-gray-300 dark:border-gray-600" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Conclusion
      </h2>
      <p>
        System architecture is rarely exclusively push or pull, but rather a
        combination of the two. All application services have different use
        cases, and you must choose an appropriate architecture for your expected
        use case to maximise your system's potential.
      </p>
    </article>
  );
}
