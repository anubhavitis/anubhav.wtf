---
date: "2022-08-22"
title: "Microservices Architecture: What, Where & Why?"
description: "A deep dive into Microservices Architecture, its benefits, and how it can be implemented in a project"
tags: "tech,backend, system-design"
---

If you are into software development, you've probably heard about microservices. They've acquired a lot of traction in recent years, and every major corporation is creating one.

Microservices are an innovative and very unique approach to developing application systems as a collection of small services, each performing **discrete and well-defined functions** and being deployed independently. They are easier to understand, easier to deploy, and can be shared across different systems. This method brings high agility to an application system and provides many opportunities for DevOps and CI/CD.

In this article, you are going to learn about:

- Microservices architecture of application systems
- Various benefits of building microservices
- Microservices development tools and technology
- Common patterns for implementing microservice architectures

<hr>

## Different architectures of application systems

In terms of architecture, there are two sorts of application systems: the first is centralized and known as a "monolith," whereas the second has a decentralized architecture known as "microservices."

![Image](/images/microservices-monolith-comparison.png)

### Monoliths

An application is composed of three components: a server, a client, and a database. The server processes client requests, implements business logic, collects or stores data in the database, and responds to the client. These kinds of servers are referred to as monoliths.

A monolith is a straightforward approach to building a server application. They're made up of **classes and functions** that let you combine all of your business logic into one running process. This is a **single executable application system**, where every change results in a newer version of the system. Kinda like Thanos with all infinity stones.

![Thanos](https://media4.giphy.com/media/npszbmF6GwHSw/giphy.gif?cid=ecf05e47khleqhrhrju4ozr5t1usltrj9o9av2282gk28eqb&rid=giphy.gif&ct=g)

Monolithic systems are ideal for launching a business since they are self-sufficient, offer fast communications, and their requirements are easy to define. However, when a business grows, monolithic systems become a challenge. They have low scalability and adaptability and require extensive maintenance; even small errors at any point cause the entire system to crash in a split second. Also, they do not allow various teams to work independently and are constrained to be developed on a single technology.

### Microservices

The microservice architecture is the solution to the challenges faced by monolithic systems. Rather than creating a single full-fledged server program with a dedicated data storage unit, this system consists of multiple microprograms serving unique services, thus referred to as a microservice. Kinda like a team of superheros with specific roles and abilities.

![Avengers](https://media.giphy.com/media/LOFT5Jd31ON1b5kLtP/giphy-downsized-large.gif)

Microservices are built on specialized business capabilities. They have their own running process and can even have their own data storage unit. Different microservices can employ different programming languages, different database approaches, and be deployed independently. Different teams in the company work on specific services, and updates result in newer versions of the affected microservices rather than the entire system. And at any point of error, only the affected service will fail; the rest of the programs will work just fine.

## Why microservice architecture?

More than [60% of enterprises] (https://dzone.com/articles/new-research-shows-63-percent-of-enterprises-are-a) had switched to microservices architectures by 2018. Many large corporations, such as Amazon, Netflix, Twitter, and Paypal, which began as monolithic systems, were at the forefront of this transformation. Its modular approach in application systems is widely being adopted to handle complex applications.

Let us take a quick look at some of the real-world use cases of microservices:

### Refactoring Legacy Applications

In this competitive world, businesses often need to refactor their legacy codes or move to new technologies. Microservices is the preferred architecture by enterprises for rebuilding their system to change the functionality, add new features, or move to a new technology stack.

### Big data, AI/ML

Applications that use technologies such as big data, artificial intelligence, machine learning, and so on need complex data pipelines for operations such as data collection, data filtering, data processing, and so on. In this scenario, a monolithic design could make the system heavy and difficult to administer; instead, a distributed system architecture with segregated pipelines is the better option.

### Real-time data processing

Microservices architecture is used by streaming platforms such as Netflix and publish-subscribe pattern apps such as Twitter to provide smooth asynchronous communication and real-time data analysis to produce intelligent outputs.

[Netflix](https://www.nginx.com/blog/microservices-at-netflix-architectural-best-practices/) was an early adopter of microservices and now has more than 500 microservices working autonomously to provide you with the best performance available.

### DevOps

When DevOps and microservices are used together, they work incredibly. By adopting a single toolset that can be used for both development and operations, microservices help the DevOps team be more efficient. Project requirements, task dependencies, and problems may all be described using the same terminology and techniques.

Microservices, like anything else, have their own pros and cons. You must be aware of both of them before integrating this architecture into your system.

## Benefits of using Microservices

### Technical benefits for developers

- You have the freedom to use different programming languages, tools, technologies, and data-storing strategies based on the requirements of your service.
- Since every microservice is isolated, results in fast defect isolation too, failure in one microservices won't affect the rest of the system.
- You can easily integrate or transition to new technology for a specific microservice without affecting the whole system.
- Microservices are simpler to understand for new developers as compared to understanding the whole system.

![Avengers](https://media.giphy.com/media/RiVH87KOfOLcrEa8Wt/giphy.gif)

### Benefits for organizations

- Microservices save a huge amount of time and money by making the system easy to manage and optimize.
- Different teams in an organization have the freedom to work independently without colliding with other teams.
- Microservices are based on distinct business capabilities, so they can be easily developed by a small team.
- Since a service can be shared among different products, this saves a lot of resources for an organization.

## Drawbacks of using Microservices

- Testing can be a very tedious task in microservices architecture since there are a lot of services to test.
- Handling the entire product might get difficult as the number of services increases.
- Developer needs to design and develop a lightweight, robust and secure communication system for microservices to communicate with each other.
- Internal communication between microservices increases the time taken by servers to respond to clients.

## Microservices development tools and technology

As microservices architecture gained popularity, more and more tools and technologies have emerged to support this practice and improve the developer experience. Here are some of the best technologies for developing microservices:

### Containerization

One of the most key traits of a microservice is that it operates independently, as autonomously as possible. To maintain their autonomy, they must be kept in an isolated environment with their own runtime environment. Containerization services such as [Docker](https://www.docker.com/), [AWS BottleRocket](https://aws.amazon.com/bottlerocket/), and others make this feasible. Through autonomous container-based microservice architecture, you have the freedom to add, remove, scale, and replicate components as required by your business.

### API Management

With an increasing group of microservices comes the challenge of establishing safe connections between them. You certainly cannot risk exposing any of your microservices to public networks. API management, using services like [AWS API Gateway](https://aws.amazon.com/api-gateway/), [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/), reduces the time required to build and manage API connections between microservices. They have various capabilities like authentication services, API monitoring, and so on, which may save developers months of time and work.

### Continuous Integration, Continuous Deployment (CI/CD)

If you're adopting microservices architecture, you don't want a lengthy and costly release train where each team needs to wait their turn. You also don't want the release of one service to impact or be impacted by the release of another. You need to employ continuous integration and continuous deployment pipelines for your microservices. You can use CI/CD platforms, such as [Jenkins](https://www.jenkins.io/) and [AWS CodePipeline](https://aws.amazon.com/codepipeline/), that provide easy to set up automated but high-velocity releases for your microservices.

### Application Performance Monitoring (APM) tools

Your microservice is up and running after you design, implement, test, and deploy it, but you're not done yet. You must monitor system performance in order to improve user retention and rid your systems of faults and bottlenecks. Application performance monitoring solutions, such as [AWS Cloudwatch](https://aws.amazon.com/cloudwatch/), [Kibana](https://www.elastic.co/kibana/), allow you to effortlessly monitor all of your microservices, as well as increase your mean-time-to-repair (mttr) by detecting problems sooner.

### Cloud providers

Managing multiple microservice can be very challenging, you need a lot of containers, API management tools, host multiple databases, CI/CDs, Application performance monitoring tools, etc. But no worry, most cloud service providers like [AWS](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/), [IBM](https://www.ibm.com/cloud), etc. provide all of this on their platform, which eventually makes managing microservices lot simpler.

## Common patterns used to build microservices

There are plenty of [design patterns](https://microservices.io/patterns/microservices.html) available for building microservices, each of them with different priorities and solving different problems. Here are some of the most popular patterns for building microservices:

### Database architecture

Different services may require different data storage techniques, therefore creating a separate database for each service is a realistic solution that will improve scalability. However, running searches that connect data from several servers becomes quite complex.

Creating boundaries that ensure modularity is a smart notion. As a result, we may keep the data of a microservice private to that service, but we must make it available to other services via APIs.

### API gateways

Making microservices accessible to client applications is a challenging task in itself. You don't want to expose all of the services to all sorts of customers, and some services even implement API protocols that aren't web-friendly. There are many service instances, and their location(host+port) varies dynamically.

A single access point for all clients, such as an API gateway, is a viable option in this case. This API gateway checks client requests before routing them to the appropriate microservice. It can send requests to a single server or several servers, depending on the requirements.

![Image](/images/microservices-api-gateway.png) credits: Foundersguide

### Access tokens

Consider the following scenario: you've implemented microservice architecture and implemented an API gateway as the entry point for all client requests. Requests are directed from here to various services based on their requirements, but how do you convey the requester's authenticity to the service that executes the request?

As a result, the API gateway passes an access token (e.g. JSON Web Token) along with the request, which securely identifies the requestor in each request to the services. The access token can be included in requests to other services by a service.

### Log aggregation

Requests commonly span various service instances in a microservices architecture. Each service instance saves logs in a defined format to a file. Errors, warnings, information, and debug messages are all stored inside this log file. Debugging an error, on the other hand, might be time-consuming if you have to go through all of the services' log files.

As a result, having a centralized logging server that collects logs from each service instance is preferable. Different logs may be searched, analyzed, and even alarms can be created by users.

### Health check APIs

Even if a service instance is unable to handle requests, it may continue to run. It might, for example, it has run out of database connections. The monitoring system should raise an alert system if this happens, and requests should not be sent to the failed service instance. So it is very crucial to identify whether a running service instance can handle a request of not.

As a result, a service's health check API endpoint, like '\health', that returns the state of the service should be included. This API endpoint handler checks a variety of things, including the status of the service instance's connections to infrastructure services, the state of the host, and application-specific logic.

> You can learn more patterns for building microservices from [here](https://microservices.io/patterns/microservices.html)

---

## Phew!

Looking back, you began with learning about various application system designs, followed by many famous microservices architecture use cases, and then, the benefits and drawbacks of adopting a microservices architecture. Furthermore, you learned about numerous microservices tools and technologies for building microservices, as well as some typical patterns for making them efficient.

Hope you found the article useful. Thanks for reading. Happy coding.
