---
date: "2021-06-10"
title: "Getting started with Asynchronous programming"
description: "A quick introduction to Asynchronous programming and its practical applications"
---

Generally, when we code an application, a chunk of code runs at a time. So if our code contains a certain number of tasks, then each of them is compiled one at a time. This form of programming is called **Synchronous programming**.

But, don't you think, most of the computer systems are often equipped with multiple processors that can run several operations together. So, what's the point of executing one task at a time?

## Asynchronous Programming

Modern software development revolves around doing multiple tasks simultaneously, making use of maximum computer potential to save as much time as we can. This form of programming is referred to as **Asynchronous programming**.

![unnamed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vnnxmkhuba77bubn3z8n.gif)

### How do we do that?

In asynchronous programming, a program shares its processing to multiple **threads**. A thread is a single process that a program can use to complete tasks. Each thread can only do a single task at once.

```javascript
// single thread application.
Thread: Task 1 -> Task 2 -> Task 3 -> Task 4 -> END
```

So if we use a double thread for the above program, then we can decrease processing time to almost half.

```javascript
// Multi threaded application.
Thread A: Task 1 -> Task 3 -> END
Thread B: Task 2 -> Task 4 -> END
```

Most of the programming languages such as Python, JavaScript are old and are single-threaded built to work synchronously. Later with time, they got tools to help with such problems and send some processing to different threads.

New programming languages such as GO, Rust, etc. use multi-threading by default.

------

## Asynchronous web applications

>"Over 50% of mobile users abandons websites that take longer than three seconds to load." - Research by Google

Let's discuss an application of asynchronous programming in a web apps through a general example. Consider you have a mailing application and you're task is to send 5 emails. 

Assuming one mail takes 2sec to process, then this task is going to cost 10sec in total. This is not good for users, most of the users are not going to wait for 10sec for completion of tasks.

what happens if we try to do this asynchronously?

![Today's developers (2)](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4ri5j7yy73bqwypjr6yh.png)

I am sharing my **Django** based codebase, which is using the [Django-celery](https://docs.celeryproject.org/en/stable/index.html) package to complete tasks in different threads.

> Note: If you're not familiar with python and Django, no worries, just take a look at the codebase to know what's happening and you can apply similar functionality in your applications.

If you code this task synchronously then:

```python
# proj/urls.py
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

    return HttpResponse("Mails, sent successfully.")
```
Which returns output as:
```
Process initiated at 2021-06-09 09:01:58.158870
Process completed at 2021-06-09 09:02:08.179977
Total time for sending 5 mails: 0:00:10.021107
```
> Notice how our function took 10.021107s to execute.

Now part of our code that's consuming most of the time is send_mail(). If you think about it, we can create a separate thread for this process, and let it run. This was, our main thread would execute instantly. This will let the user know that his mails are sending in process, and he can continue with other works.

![Today's developers (3)](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8emqdewzyvpz2gr6nz2m.png)

Let's edit our index function and to send these mails asynchronously by using [celery](https://docs.celeryproject.org/en/stable/index.html).

So, refactored function is:
```python
# proj/urls.py
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

    return HttpResponse("Mails, sent successfully.")

```
which returns output as:
```
Process initiated at 2021-06-09 09:09:19.496051
Process initiated at 2021-06-09 09:09:19.549268
Total time for sending 5 mails: 0:00:00.053217
```

> Notice, this time our function took only 0.053217s to execute.

![giphy (4)](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mjy9hprul89ytw910j3t.gif) 
 
This is how modern web applications are developed to handle time taking tasks on different threads, and process the main thread as fast as possible.

-----

By now, I am hoping you have good understanding of Asynchronous programming and its applications. If you like the article, share it among your peers.

Did I miss anything? Put down in the comments. As always suggestions are always welcome.

Find me on: [Twitter](https://twitter.com/anubhavitis) | [GitHub](https://github.com/anubhavitis) | [LinkedIn](https://linkedin.com/in/anubhavitis) 

> Happy Coding.