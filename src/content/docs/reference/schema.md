---
title: Schemas
---

Schemas are a declarative way of using Sailhouse, and the _least_ chaotic.

They're decoupled from applications, and you can have them split across several files.

```yaml
key: schema-key

topics:
  - slug: awesome-topic

subscriptions:
  - slug: awesome-subscription
    topic: awesome-topic
    # Push or Pull
    type: push
    # Endpoint only used for push subscriptions
    endpoint: https://...
    # Filters are supported too
    filter:
      path: type
      value: new

  # defaults to pull if no `type` defined
  - slug: great-subscription
    topic: awesome-topic
```

:::note[Future thing]
We plan on supporting other formats beyond YAML. We know how it's _everyones_ favourite.

JSON, and potentially TOML support, down the line.
:::

## Creating a schema

Schemas can be created as an empty `.yaml` file, or via the CLI.

```sh
sailhouse schema create
```

## Schema keys

Schema keys are the way you can manage multiple topics and subscriptions across several different files.

They're a unique `slug` that identifies all of the resources attached to that schema.

:::caution

Subscriptions _can_ reference topics on other schemas for flexibility, but it's **advised against** as this can lead to entangled files which cannot be deployed in order.

:::
## Using the hosted YAML schema

A schema created by the CLI should have this line at the top.

```yaml
# yaml-language-server: $schema=https://assets.sailhouse.dev/schema.yaml
```

If you're using an editor such as VS Code or a more powerful IDE, it should be able to parse this out of the box and provide strong typing support.
