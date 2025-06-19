"use client";
import React from "react";

export default function WhatExactlyIsAPI() {
  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto py-8 mt-16">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          What Exactly is an API?
        </h1>
        <p className="text-gray-500 dark:text-gray-400">January 15, 2021</p>
      </div>
      <p>
        APIs are one of the most significant parts of software development,
        every developer must be well versed with them. I have been working as a
        golang backend engineer for about a year now, have constructed plenty of
        APIs for various projects.
      </p>
      <hr className="my-8 border-gray-300 dark:border-gray-600" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        What is an API?
      </h2>
      <p>
        API stands for{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          Application Programming Interface
        </span>
        , is a set of functions that allows applications to access data and
        interact with external software components, operating systems, or
        microservices.
      </p>
      <img
        className="my-6"
        src="https://user-images.githubusercontent.com/26124625/104198884-ca1bcf80-544c-11eb-94d1-22548426ad4d.png"
        alt="API Diagram"
      />
      <p>
        In simple words, an API is like a waiter in a restaurant. You don't go
        into a cafe and walk straight into the kitchen to tell the chef what you
        wanna eat. The waiter does that for you, and that's exactly what an API
        is - with the client being you, the customer, and any resource that can
        send data, being the chef.
      </p>
      <hr className="my-8 border-gray-300 dark:border-gray-600" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Benefits of using APIs
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-semibold">Security:</span> While using an API,
          client-side and server-side application works independently, and they
          communicate through API, so if anyone tries to hack into the
          client-side app, the server stays unaffected and secured.
        </li>
        <li>
          <span className="font-semibold">Flexibility:</span> APIs allow content
          to be embedded from any site or application more easily. For e.g. an
          API written in GO can be used by Node.js/Django.
        </li>
        <li>
          <span className="font-semibold">Efficiency:</span> When access is
          provided to an API, the content generated can be published
          automatically and is available for every channel. It allows it to be
          shared and distributed more easily.
        </li>
        <li>
          <span className="font-semibold">Innovation:</span> With an API, an
          application layer can be created which can be used to distribute
          information and services to new audiences which can be personalized to
          create custom user experiences.
        </li>
      </ul>
      <hr className="my-8 border-gray-300 dark:border-gray-600" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        REST API
      </h2>
      <p>
        REST stands for{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          Representational State Transfer
        </span>
        , it is the most popular web API architecture. They follow a
        client-server model where one software program sends a request and the
        other response with some data.
      </p>
      <img
        className="my-6"
        src="https://user-images.githubusercontent.com/26124625/104197485-16fea680-544b-11eb-8aaa-d2bd74bf207a.png"
        alt="REST API Diagram"
      />
      <p>
        These APIs generally receive a response in{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          JSON
        </span>{" "}
        format, it's a standard format that is easily "understandable" by
        applications and can be handled well in most languages. For e.g. Ruby
        app can easily use JSON response from Java sever.
      </p>
      <img
        className="my-6"
        src="https://user-images.githubusercontent.com/26124625/104204412-431e2580-5453-11eb-9827-29a65aa6ff82.png"
        alt="JSON Example"
      />
      <p>
        JSON stand for{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          JavaScript Object Notation
        </span>
        , it is a lightweight data-interchange format. It is easy for humans to
        read and write. It is easy for machines to parse and generate. Read more
        about it{" "}
        <a
          href="https://www.json.org/json-en.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          here
        </a>
      </p>
      <blockquote className="my-4 border-l-4 border-yellow-500 pl-4 bg-yellow-50 dark:bg-yellow-900/20 py-2">
        <p>
          There are several other forms of APIs (SOAP, XML-RPC, JSON-RPC, etc.),
          we'll limit our discussion to REST only. For more info,{" "}
          <a
            href="https://stoplight.io/api-types/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Click here
          </a>
        </p>
      </blockquote>
      <hr className="my-8 border-gray-300 dark:border-gray-600" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        REST != HTTP
      </h2>
      <p>
        A lot of people prefer to compare HTTP with REST. REST and HTTP are not
        same.
      </p>
      <p>
        In the REST architectural style, data and functionality are considered
        resources and are accessed using Uniform Resource Identifiers (URIs).
        The resources are acted upon by using a set of simple, well-defined
        operations. The clients and servers exchange representations of
        resources by using a standardized interface and protocol – typically
        HTTP.
      </p>
      <p>
        Resources are decoupled from their representation so that their content
        can be accessed in a variety of formats, such as HTML, XML, plain text,
        PDF, JPEG, JSON, and others. Metadata about the resource is available
        and used, for example, to control caching, detect transmission errors,
        negotiate the appropriate representation format, and perform
        authentication or access control. And most importantly, every
        interaction with a resource is stateless.
      </p>
      <hr className="my-8 border-gray-300 dark:border-gray-600" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        API Request & Response
      </h2>
      <p>
        REST API request generally consists of Method, Body(auth and other
        parameters), and Host. Here is a sample request that I have been working
        on recently.
      </p>
      <img
        className="my-6"
        src="https://user-images.githubusercontent.com/26124625/104276950-e9a60d00-54cb-11eb-84d5-efc4b4202e2e.png"
        alt="API Request Example"
      />
      <p>
        As stated earlier, REST API responses generally in JSON format. Here is
        a sample response to the above API requests.
      </p>
      <p className="font-semibold text-gray-800 dark:text-gray-200">
        Note: To get a similar response from the previous request, you'll have
        to add an API key: and API secret.
      </p>
      <img
        className="my-6"
        src="https://user-images.githubusercontent.com/26124625/104276947-e874e000-54cb-11eb-8a62-d5f0614f236e.png"
        alt="API Response Example"
      />
      <hr className="my-8 border-gray-300 dark:border-gray-600" />
      <blockquote className="my-4 border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 py-2">
        <p>
          For more information, goto{" "}
          <a
            href="https://restfulapi.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            reastfulapi.net
          </a>
        </p>
      </blockquote>
      <p>
        I hope you have a good understanding of APIs now. If this article helped
        you, support it, and share it among your peers.
      </p>
    </article>
  );
}
