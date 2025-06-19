"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Theme, ThemeModes } from "react-code-blocks/dist/types";

export default function MicroservicesArchitecture() {
  const { theme } = useTheme();
  const [codeTheme, setCodeTheme] = useState<Theme>({
    mode: theme as ThemeModes,
  });

  useEffect(() => {
    setCodeTheme({ mode: theme as ThemeModes });
  }, [theme]);

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto py-8 my-16">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Microservices Architecture: What, Where, Why
        </h1>
        <p className="text-gray-500 dark:text-gray-400">June 15, 2021</p>
      </div>

      <p>
        If you are into software development, you've probably heard about
        microservices. They've acquired a lot of traction in recent years, and
        every major corporation is creating one.
      </p>

      <p>
        Microservices are an innovative and very unique approach to developing
        application systems as a collection of small services, each performing{" "}
        <p className="inline font-semibold text-gray-800 dark:text-gray-200">
          discrete and well-defined functions
        </p>{" "}
        and being deployed independently. They are easier to understand, easier
        to deploy, and can be shared across different systems. This method
        brings high agility to an application system and provides many
        opportunities for DevOps and CI/CD.
      </p>

      <p>In this article, you are going to learn about:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Microservices architecture of application systems</li>
        <li>Various benefits of building microservices</li>
        <li>Microservices development tools and technology</li>
        <li>Common patterns for implementing microservice architectures</li>
      </ul>

      <hr className="my-8 border-gray-300 dark:border-gray-600" />

      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Different architectures of application systems
      </h2>

      <p>
        In terms of architecture, there are two sorts of application systems:
        the first is centralized and known as a "monolith," whereas the second
        has a decentralized architecture known as "microservices."
      </p>

      <img
        className="my-6"
        src="https://i.imgur.com/PhCiUup.png"
        alt="Monolith vs Microservices Architecture"
      />

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Monoliths
      </h3>

      <p>
        An application is composed of three components: a server, a client, and
        a database. The server processes client requests, implements business
        logic, collects or stores data in the database, and responds to the
        client. These kinds of servers are referred to as monoliths.
      </p>

      <p>
        A monolith is a straightforward approach to building a server
        application. They're made up of{" "}
        <p className="inline font-semibold text-gray-800 dark:text-gray-200">
          classes and functions
        </p>{" "}
        that let you combine all of your business logic into one running
        process. This is a{" "}
        <p className="inline font-semibold text-gray-800 dark:text-gray-200">
          single executable application system
        </p>
        , where every change results in a newer version of the system. Kinda
        like Thanos with all infinity stones.
      </p>

      <img
        className="my-6"
        src="https://media4.giphy.com/media/npszbmF6GwHSw/giphy.gif?cid=ecf05e47khleqhrhrju4ozr5t1usltrj9o9av2282gk28eqb&rid=giphy.gif&ct=g"
        alt="Thanos with Infinity Stones"
      />

      <p>
        Monolithic systems are ideal for launching a business since they are
        self-sufficient, offer fast communications, and their requirements are
        easy to define. However, when a business grows, monolithic systems
        become a challenge. They have low scalability and adaptability and
        require extensive maintenance; even small errors at any point cause the
        entire system to crash in a split second. Also, they do not allow
        various teams to work independently and are constrained to be developed
        on a single technology.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Microservices
      </h3>

      <p>
        The microservice architecture is the solution to the challenges faced by
        monolithic systems. Rather than creating a single full-fledged server
        program with a dedicated data storage unit, this system consists of
        multiple microprograms serving unique services, thus referred to as a
        microservice. Kinda like a team of superheros with specific roles and
        abilities.
      </p>

      <img
        className="my-6"
        src="https://media.giphy.com/media/LOFT5Jd31ON1b5kLtP/giphy-downsized-large.gif"
        alt="Avengers Team"
      />

      <p>
        Microservices are built on specialized business capabilities. They have
        their own running process and can even have their own data storage unit.
        Different microservices can employ different programming languages,
        different database approaches, and be deployed independently. Different
        teams in the company work on specific services, and updates result in
        newer versions of the affected microservices rather than the entire
        system. And at any point of error, only the affected service will fail;
        the rest of the programs will work just fine.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Why microservice architecture?
      </h2>

      <p>
        More than{" "}
        <a
          href="https://dzone.com/articles/new-research-shows-63-percent-of-enterprises-are-a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          60% of enterprises
        </a>{" "}
        had switched to microservices architectures by 2018. Many large
        corporations, such as Amazon, Netflix, Twitter, and Paypal, which began
        as monolithic systems, were at the forefront of this transformation. Its
        modular approach in application systems is widely being adopted to
        handle complex applications.
      </p>

      <p>
        Let us take a quick look at some of the real-world use cases of
        microservices:
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Refactoring Legacy Applications
      </h3>
      <p>
        In this competitive world, businesses often need to refactor their
        legacy codes or move to new technologies. Microservices is the preferred
        architecture by enterprises for rebuilding their system to change the
        functionality, add new features, or move to a new technology stack.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Big data, AI/ML
      </h3>
      <p>
        Applications that use technologies such as big data, artificial
        intelligence, machine learning, and so on need complex data pipelines
        for operations such as data collection, data filtering, data processing,
        and so on. In this scenario, a monolithic design could make the system
        heavy and difficult to administer; instead, a distributed system
        architecture with segregated pipelines is the better option.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Real-time data processing
      </h3>
      <p>
        Microservices architecture is used by streaming platforms such as
        Netflix and publish-subscribe pattern apps such as Twitter to provide
        smooth asynchronous communication and real-time data analysis to produce
        intelligent outputs.
      </p>

      <p>
        <a
          href="https://www.nginx.com/blog/microservices-at-netflix-architectural-best-practices/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Netflix
        </a>{" "}
        was an early adopter of microservices and now has more than 500
        microservices working autonomously to provide you with the best
        performance available.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        DevOps
      </h3>
      <p>
        When DevOps and microservices are used together, they work incredibly.
        By adopting a single toolset that can be used for both development and
        operations, microservices help the DevOps team be more efficient.
        Project requirements, task dependencies, and problems may all be
        described using the same terminology and techniques.
      </p>

      <p>
        Microservices, like anything else, have their own pros and cons. You
        must be aware of both of them before integrating this architecture into
        your system.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Benefits of using Microservices
      </h2>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Technical benefits for developers
      </h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          You have the freedom to use different programming languages, tools,
          technologies, and data-storing strategies based on the requirements of
          your service.
        </li>
        <li>
          Since every microservice is isolated, results in fast defect isolation
          too, failure in one microservices won't affect the rest of the system.
        </li>
        <li>
          You can easily integrate or transition to new technology for a
          specific microservice without affecting the whole system.
        </li>
        <li>
          Microservices are simpler to understand for new developers as compared
          to understanding the whole system.
        </li>
      </ul>

      <img
        className="my-6"
        src="https://media.giphy.com/media/RiVH87KOfOLcrEa8Wt/giphy.gif"
        alt="Avengers Team"
      />

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Benefits for organizations
      </h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Microservices save a huge amount of time and money by making the
          system easy to manage and optimize.
        </li>
        <li>
          Different teams in an organization have the freedom to work
          independently without colliding with other teams.
        </li>
        <li>
          Microservices are based on distinct business capabilities, so they can
          be easily developed by a small team.
        </li>
        <li>
          Since a service can be shared among different products, this saves a
          lot of resources for an organization.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Drawbacks of using Microservices
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Testing can be a very tedious task in microservices architecture since
          there are a lot of services to test.
        </li>
        <li>
          Handling the entire product might get difficult as the number of
          services increases.
        </li>
        <li>
          Developer needs to design and develop a lightweight, robust and secure
          communication system for microservices to communicate with each other.
        </li>
        <li>
          Internal communication between microservices increases the time taken
          by servers to respond to clients.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Microservices development tools and technology
      </h2>

      <p>
        As microservices architecture gained popularity, more and more tools and
        technologies have emerged to support this practice and improve the
        developer experience. Here are some of the best technologies for
        developing microservices:
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Containerization
      </h3>
      <p>
        One of the most key traits of a microservice is that it operates
        independently, as autonomously as possible. To maintain their autonomy,
        they must be kept in an isolated environment with their own runtime
        environment. Containerization services such as{" "}
        <a
          href="https://www.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Docker
        </a>
        ,{" "}
        <a
          href="https://aws.amazon.com/bottlerocket/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          AWS BottleRocket
        </a>
        , and others make this feasible. Through autonomous container-based
        microservice architecture, you have the freedom to add, remove, scale,
        and replicate components as required by your business.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        API Management
      </h3>
      <p>
        With an increasing group of microservices comes the challenge of
        establishing safe connections between them. You certainly cannot risk
        exposing any of your microservices to public networks. API management,
        using services like{" "}
        <a
          href="https://aws.amazon.com/api-gateway/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          AWS API Gateway
        </a>
        ,{" "}
        <a
          href="https://azure.microsoft.com/en-us/services/api-management/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Azure API Management
        </a>
        , reduces the time required to build and manage API connections between
        microservices. They have various capabilities like authentication
        services, API monitoring, and so on, which may save developers months of
        time and work.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Continuous Integration, Continuous Deployment (CI/CD)
      </h3>
      <p>
        If you're adopting microservices architecture, you don't want a lengthy
        and costly release train where each team needs to wait their turn. You
        also don't want the release of one service to impact or be impacted by
        the release of another. You need to employ continuous integration and
        continuous deployment pipelines for your microservices. You can use
        CI/CD platforms, such as{" "}
        <a
          href="https://www.jenkins.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Jenkins
        </a>{" "}
        and{" "}
        <a
          href="https://aws.amazon.com/codepipeline/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          AWS CodePipeline
        </a>
        , that provide easy to set up automated but high-velocity releases for
        your microservices.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Application Performance Monitoring (APM) tools
      </h3>
      <p>
        Your microservice is up and running after you design, implement, test,
        and deploy it, but you're not done yet. You must monitor system
        performance in order to improve user retention and rid your systems of
        faults and bottlenecks. Application performance monitoring solutions,
        such as{" "}
        <a
          href="https://aws.amazon.com/cloudwatch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          AWS Cloudwatch
        </a>
        ,{" "}
        <a
          href="https://www.elastic.co/kibana/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Kibana
        </a>
        , allow you to effortlessly monitor all of your microservices, as well
        as increase your mean-time-to-repair (mttr) by detecting problems
        sooner.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Cloud providers
      </h3>
      <p>
        Managing multiple microservice can be very challenging, you need a lot
        of containers, API management tools, host multiple databases, CI/CDs,
        Application performance monitoring tools, etc. But no worry, most cloud
        service providers like{" "}
        <a
          href="https://aws.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          AWS
        </a>
        ,{" "}
        <a
          href="https://azure.microsoft.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Azure
        </a>
        ,{" "}
        <a
          href="https://www.ibm.com/cloud"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          IBM
        </a>
        , etc. provide all of this on their platform, which eventually makes
        managing microservices lot simpler.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Common patterns used to build microservices
      </h2>

      <p>
        There are plenty of{" "}
        <a
          href="https://microservices.io/patterns/microservices.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          design patterns
        </a>{" "}
        available for building microservices, each of them with different
        priorities and solving different problems. Here are some of the most
        popular patterns for building microservices:
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Database architecture
      </h3>
      <p>
        Different services may require different data storage techniques,
        therefore creating a separate database for each service is a realistic
        solution that will improve scalability. However, running searches that
        connect data from several servers becomes quite complex.
      </p>
      <p>
        Creating boundaries that ensure modularity is a smart notion. As a
        result, we may keep the data of a microservice private to that service,
        but we must make it available to other services via APIs.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        API gateways
      </h3>
      <p>
        Making microservices accessible to client applications is a challenging
        task in itself. You don't want to expose all of the services to all
        sorts of customers, and some services even implement API protocols that
        aren't web-friendly. There are many service instances, and their
        location(host+port) varies dynamically.
      </p>
      <p>
        A single access point for all clients, such as an API gateway, is a
        viable option in this case. This API gateway checks client requests
        before routing them to the appropriate microservice. It can send
        requests to a single server or several servers, depending on the
        requirements.
      </p>

      <img
        className="my-6"
        src="https://i.imgur.com/mpBD48D.png"
        alt="API Gateway Architecture"
      />
      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
        credits: Foundersguide
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Access tokens
      </h3>
      <p>
        Consider the following scenario: you've implemented microservice
        architecture and implemented an API gateway as the entry point for all
        client requests. Requests are directed from here to various services
        based on their requirements, but how do you convey the requester's
        authenticity to the service that executes the request?
      </p>
      <p>
        As a result, the API gateway passes an access token (e.g. JSON Web
        Token) along with the request, which securely identifies the requestor
        in each request to the services. The access token can be included in
        requests to other services by a service.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Log aggregation
      </h3>
      <p>
        Requests commonly span various service instances in a microservices
        architecture. Each service instance saves logs in a defined format to a
        file. Errors, warnings, information, and debug messages are all stored
        inside this log file. Debugging an error, on the other hand, might be
        time-consuming if you have to go through all of the services' log files.
      </p>
      <p>
        As a result, having a centralized logging server that collects logs from
        each service instance is preferable. Different logs may be searched,
        analyzed, and even alarms can be created by users.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        Health check APIs
      </h3>
      <p>
        Even if a service instance is unable to handle requests, it may continue
        to run. It might, for example, it has run out of database connections.
        The monitoring system should raise an alert system if this happens, and
        requests should not be sent to the failed service instance. So it is
        very crucial to identify whether a running service instance can handle a
        request of not.
      </p>
      <p>
        As a result, a service's health check API endpoint, like '/health', that
        returns the state of the service should be included. This API endpoint
        handler checks a variety of things, including the status of the service
        instance's connections to infrastructure services, the state of the
        host, and application-specific logic.
      </p>

      <blockquote className="my-4 border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 py-2">
        <p>
          You can learn more patterns for building microservices from{" "}
          <a
            href="https://microservices.io/patterns/microservices.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            here
          </a>
        </p>
      </blockquote>

      <hr className="my-8 border-gray-300 dark:border-gray-600" />

      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Phew!
      </h2>

      <p>
        Looking back, you began with learning about various application system
        designs, followed by many famous microservices architecture use cases,
        and then, the benefits and drawbacks of adopting a microservices
        architecture. Furthermore, you learned about numerous microservices
        tools and technologies for building microservices, as well as some
        typical patterns for making them efficient.
      </p>
    </article>
  );
}
