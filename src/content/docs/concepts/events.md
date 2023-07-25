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

## Metadata
:::note[Future thing]
This is currently in-development and not available for public access.
:::

Events can have meta-data attached to them, in an entirely customisable
