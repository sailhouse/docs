---
title: CLI
---

## Installing the CLI

The CLI can easily be installed via `brew`.

```sh
brew install sailhouse
```

:::note
Currently the CLI can only be installed via homebrew, other platforms and deployment solutions are in the works.
:::

## Authenticating

You authenticate with the CLI with the help of the dashboard.

```sh
sailhouse auth
```

This will open a browser session, where you can login to authenticate the client against your user.

The token this generates will expire after 30 days.

## Command Reference

### List teams

```bash
sailhouse teams list
```

### Set team

```bash
sailhouse teams set
```

### List apps

```bash
sailhouse apps list
```

### Create an app

```bash
sailhouse apps create
```

### Create a token for an app

```bash
sailhouse tokens create [app]
```
