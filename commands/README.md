# Commands
Defining commands give developers a way to organize which microservices are exposed and how they are used within an application or platform.

Properly defining commands can assist with the following:
  - Service discovery
  - Documentation
  - Operational insight

Services **SHOULD** define commands and arguments that can be used.

[[toc]]


# Basic Usage

```yaml
commands:
  foobar:
    arguments:
      foo:
        type: string
      bar:
        type: json
```

# Advanced Usage

## Types

Arguments **MUST** provide a data type.

| Types     | Encoding        |
| --------- | --------------- |
| `int`     | literal         |
| `float`   | literal         |
| `string`  | literal         |
| `uuid`    | literal         |
| `list`    | JSON            |
| `object`  | JSON            |
| `boolean` | `true`, `false` |


## Help

Arguments **SHOULD** provide a short description of the command and any arguments that can provide clarity to end users.

```yaml{3,7}
commands:
  fly:
    help: "Jump on a spaceship."
    arguments:
      dest:
        type: int
        help: "Choose a destination."
```

## Checks

Arguments **SHOULD** provide variable checks.

### Patterns

```yaml{6}
commands:
  foobar:
    arguments:
      color:
        type: string
        pattern: '^\#?\w{6}$'
```

### Enums

```yaml{6}
commands:
  foobar:
    arguments:
      choose:
        type: string
        enum:
        - thing_one
        - thing_two
```

### Range

```yaml{6,7,8}
commands:
  foobar:
    arguments:
      choose:
        type: number
        range:
        - 10
        - 100
```

## Required

```yaml{6}
commands:
  foobar:
    arguments:
      action:
        type: string
        required: true
```

By default, arguments are **optional**.


## Entrypoint

```yaml{2}
commands:
  entrypoint:
    # ...
```

Services **MAY** use the reserved keyword `entrypoint` which is used when no command is provided.
