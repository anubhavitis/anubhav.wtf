"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { CopyBlock } from "react-code-blocks";
import { Theme, ThemeModes } from "react-code-blocks/dist/types";

export default function GettingStartedWithAsyncProgramming() {
  const { theme } = useTheme();
  console.log(theme);

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
          Getting Started with Async Programming
        </h1>
        <p className="text-gray-500 dark:text-gray-400">June 10, 2021</p>
      </div>
      <p>
        Generally, when we code an application, a chunk of code runs at a time.
        So if our code contains a certain number of tasks, then each of them is
        compiled one at a time. This form of programming is called{" "}
        <p className="inline font-semibold text-gray-800 dark:text-gray-200">
          Synchronous programming
        </p>
        .
      </p>
      <p>
        But, don't you think, most of the computer systems are often equipped
        with multiple processors that can run several operations together. So,
        what's the point of executing one task at a time?
      </p>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Asynchronous Programming
      </h2>
      <p>
        Modern software development revolves around doing multiple tasks
        simultaneously, making use of maximum computer potential to save as much
        time as we can. This form of programming is referred to as{" "}
        <p className="inline font-semibold text-gray-800 dark:text-gray-200">
          Asynchronous programming
        </p>
        .
      </p>
      <img
        className="my-6"
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vnnxmkhuba77bubn3z8n.gif"
        alt="Async Programming Illustration"
      />
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-3">
        How do we do that?
      </h3>
      <p>
        In asynchronous programming, a program shares its processing to multiple{" "}
        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
          threads
        </code>
        . A thread is a single process that a program can use to complete tasks.
        Each thread can only do a single task at once.
      </p>
      <div className="my-4">
        <CopyBlock
          text={`// single thread application.
Thread: Task 1 -> Task 2 -> Task 3 -> Task 4 -> END`}
          language="javascript"
          showLineNumbers={true}
          theme={codeTheme}
          codeBlock
        />
      </div>
      <p>
        So if we use a double thread for the above program, then we can decrease
        processing time to almost half.
      </p>
      <div className="my-4">
        <CopyBlock
          text={`// Multi threaded application.
Thread A: Task 1 -> Task 3 -> END
Thread B: Task 2 -> Task 4 -> END`}
          language="javascript"
          showLineNumbers={true}
          theme={codeTheme}
          codeBlock
        />
      </div>
      <p>
        Most of the programming languages such as Python, JavaScript are old and
        are single-threaded built to work synchronously. Later with time, they
        got tools to help with such problems and send some processing to
        different threads.
      </p>
      <p>
        New programming languages such as GO, Rust, etc. give extensive support
        for multi-threading.
      </p>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Asynchronous web applications
      </h2>
      <blockquote className="my-4 border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 py-2">
        <p>
          "Over 50% of mobile users abandons websites that take longer than
          three seconds to load." - Research by Google
        </p>
      </blockquote>
      <p>
        Let's discuss an application of asynchronous programming in a web apps
        through a general example. Consider you have a mailing application and
        your task is to send 5 emails.
      </p>
      <p>
        Assuming one mail takes 2sec to process, then this task is going to cost
        10sec in total. This is not good for users, most of the users are not
        going to wait for 10sec for completion of tasks.
      </p>
      <p>What happens if we try to do this asynchronously?</p>
      <img
        className="my-6"
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4ri5j7yy73bqwypjr6yh.png"
        alt="Async Mailing Illustration"
      />
      <p>
        I am sharing my{" "}
        <p className="inline font-semibold text-gray-800 dark:text-gray-200">
          Django
        </p>{" "}
        based codebase, which is using the{" "}
        <a
          href="https://docs.celeryproject.org/en/stable/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Django-celery
        </a>{" "}
        package to complete tasks in different threads.
      </p>
      <blockquote className="my-4 border-l-4 border-yellow-500 pl-4 bg-yellow-50 dark:bg-yellow-900/20 py-2">
        <p>
          Note: If you're not familiar with python and Django, no worries, just
          take a look at the codebase to know what's happening and you can apply
          similar functionality in your applications.
        </p>
      </blockquote>
      <p>If you code this task synchronously then:</p>
      <div className="my-4">
        <CopyBlock
          text={`# proj/urls.py
urlpatterns = [
    path('', index),
]

#proj/views.py
def index(request):
    curr_time = datetime.now()
    print("Process initiated at", curr_time)
    send_mail()    # Send 1st mail
    send_mail()    # Send 2nd mail
    send_mail()    # Send 3rd mail
    send_mail()    # Send 4th mail
    send_mail()    # Send 5th mail

    done_time = datetime.now()
    print("Process completed at", done_time)
    total_time = done_time-curr_time
    print("Total time for sending 5 mails:", total_time)

    return HttpResponse("Mails, sent successfully.")`}
          language="python"
          theme={codeTheme}
          showLineNumbers={true}
          codeBlock
        />
      </div>
      <p>Which returns output as:</p>
      <div className="my-4">
        <CopyBlock
          text={`Process initiated at 2021-06-09 09:01:58.158870\nProcess completed at 2021-06-09 09:02:08.179977\nTotal time for sending 5 mails: 0:00:10.021107`}
          language="stdout"
          theme={codeTheme}
          showLineNumbers={true}
          codeBlock
        />
      </div>
      <blockquote className="my-4 border-l-4 border-red-500 pl-4 bg-red-50 dark:bg-red-900/20 py-2">
        <p>Notice how our function took 10.021107s to execute.</p>
      </blockquote>
      <p>
        Now part of our code that's consuming most of the time is{" "}
        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
          send_mail()
        </code>
        . If you think about it, we can create a separate thread for this
        process, and let it run. This way, our main thread would execute
        instantly. This will let the user know that his mails are sending in
        process, and he can continue with other works.
      </p>
      <img
        className="my-6"
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8emqdewzyvpz2gr6nz2m.png"
        alt="Async Threading Illustration"
      />
      <p>
        Let's edit our index function and to send these mails asynchronously by
        using{" "}
        <a
          href="https://docs.celeryproject.org/en/stable/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          celery
        </a>
        .
      </p>
      <p>So, refactored function is:</p>
      <div className="my-4">
        <CopyBlock
          text={`# proj/urls.py
urlpatterns = [
    path('', index),
]

#proj/views.py
def index(request):
    curr_time = datetime.now()
    print("Process initiated at", curr_time)
    send_mail.delay()    # Send 1st mail with celery
    send_mail.delay()    # Send 2nd mail with celery
    send_mail.delay()    # Send 3rd mail with celery
    send_mail.delay()    # Send 4th mail with celery
    send_mail.delay()    # Send 5th mail with celery

    done_time = datetime.now()
    print("Process initiated at", done_time)
    total_time = done_time-curr_time
    print("Total time for sending 5 mails:", total_time)

    return HttpResponse("Mails, sent successfully.")`}
          language="python"
          showLineNumbers={true}
          theme={codeTheme}
          codeBlock
        />
      </div>
      <p>Which returns output as:</p>
      <div className="my-4">
        <CopyBlock
          text={`Process initiated at 2021-06-09 09:09:19.496051
Process initiated at 2021-06-09 09:09:19.549268
Total time for sending 5 mails: 0:00:00.053217`}
          language="bash"
          showLineNumbers={true}
          theme={codeTheme}
          codeBlock
        />
      </div>
      <blockquote className="my-4 border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-900/20 py-2">
        <p>Notice, this time our function took only 0.053217s to execute.</p>
      </blockquote>
      <img
        className="my-6"
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mjy9hprul89ytw910j3t.gif"
        alt="Async Success Illustration"
      />
      <p>
        This is how modern web applications are developed to handle time taking
        tasks on different threads, and process the main thread as fast as
        possible.
      </p>
      <p>
        By now, I am hoping you have good understanding of Asynchronous
        programming and its applications. If you like the article, share it
        among your peers.
      </p>
    </article>
  );
}
