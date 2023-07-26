---
title: Events
---

Events are the primary concept on Sailhouse. The container, envelope, metaphor of choice for your data.

## Summary

Events are JSON objects that get sent to a topic. You can't send an event to multiple topics, but you can send multiple events with the same data to multiple topics (although, that is likely an anti-pattern).

## Publishing events

Sending, or publishing, and event is the first step in communicating with your application.


```ts
client.publish("some-topic", {
    some: "property",
});
```

As mentioned above, an event must be sent to a topic. This directs your event to downstream subscribers, and acts as a "bucket" that your different types of events can live in. To read more fun things about topics, head over to [their concepts section](/concepts/topics).

## Limitations

:::caution
This will change throughout the course of the Beta. We may impose data size limits, or other such restrictions, to maintain the performance of the application and promote good usage.
:::

So far, so good.

## Metadata
:::note[Future thing]
This is currently in-development and not available for public access.
:::

Events can have metadata attached to them. For attaching trace-ids
