---
title: TypeScript
---

## Installing

The TypeScript SDK can be installed via your _favourite_ package manager, e.g. `pnpm`

```sh
pnpm add @sailhouse/client
```

## Basic Usage

### Importing and initialising

The `SailhouseClient` class from the package has everything we need to get started.

Provided you have generated a [token](/reference/tokens), you can create a client from the class.

```typescript
import { SailhouseClient } from '@sailhouse/client';

const client = new SailhouseClient(process.env.SAILHOUSE_TOKEN);

// lets go 🎉
```


### Sending an event

The client has an async `publish` method for sending data to a given topic

```ts
await client.publish("some-topic", {
    text: "example contents",
    obj: {
        key: "value",
    },
});
```

The second argument can be any object. Ideally, this should just be a map, as the contents are stringified via `JSON.stringify(...)` and we don't want that to get messy.

### Recieving events from a pull subscription

The client wonderfully includes...
