---
title: Go
---

## Installing

The SDK is available on [Github](https://github.com/sailhouse/sdk-go), so available via the standard `go get`

```bash
go get -u github.com/sailhouse/sdk-go
```

## Basic Usage

### Importing

The `sailhouse` package has all the goodness in it.

```go
import (
    "github.com/sailhouse/sdk-go/sailhouse"
)
```

### Initialising the Client

The package has a `SailhouseClient` struct which holds all the methods for interacting with the Sailhouse platform.

Provided you have generated a [token](/reference/tokens), you can create a client easily with `sailhouse.NewSailhouseClient(...)`

```go
package main

import (
    "os"

    "github.com/sailhouse/sdk-go/sailhouse"
)

func main() {
    client := sailhouse.NewSailhouseClient(os.Getenv("SAILHOUSE_TOKEN"))

    // do awesome things 🚀
}
```

### Sending an event

The client has a `Publish(...)` method on it for easily sending data to a given topic

```go
data := map[string]interface{}{
    "text": "example contents",
    "object": map[string]interface{}{
        "key": "value",
    },
}

ctx := context.Background()

err := client.Publish(ctx, "some-topic", data)
if err != nil {
    panic(err)
}
```

The `data` arg must be able to be marshalled into JSON via `json.Marshal`. If this fails, it will return an error, and the event will not be sent.

### Receiving events from a pull subscription

The client also has a `GetEvents(...)` method for requesting the events sent to a given subscription for a topic.

```go
type Message struct {
	Text string `json:"text"`
}

func main() {
    ctx := context.Background()
    res, err := client.GetEvents(
        ctx,
        "awesome-example",
        "awesome-pull",
        sailhouse.WithLimit(20)
    )
    if err != nil {
        panic(err)
    }

    for _, event := range res.Events {
        var message Message

        // Cast the event data into the `Message` struct
        err := event.As(&message)
        if err != nil {
            panic(err)
        }

        fmt.Println(message.Text)

        // Acknowledge the message so that the event is not
        // returned again
        event.Ack()
    }
}

```
