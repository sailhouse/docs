---
title: Self Healing
---

To help speed you up, Sailhouse self-heals where possible. If you try to send an event to a topic that doesn't exist, it's created dynamically. If you pull from a subscription that doesn't exist, it's created right there.

It's a core part of the platform, meaning more time in your code and less time updating and deploying schemas.

## Topics

When you send an event to a topic that doesn't exist, Sailhouse will create it using the `slug` you've provided.

The event will then be stored against that topic, and no further action taken.

## Subscriptions

Pull subscriptions can be created with a [time window](/concepts/subscriptions#time-window) value. This can be up to 24 hours, and the subscription will pull in all of the events from the topic in that time period.

Push subscriptions cannot be created dynamically like this.
