---
title: Hello, You!
has_explanation: true
---

<!-- prettier-ignore-start -->
```typescript
type F<S>=`Hello, ${Capitalize<S&string>}!`
```
<!-- prettier-ignore-end -->

[Playground Link](https://www.typescriptlang.org/play?#code/**C4TwDgpgBAYgPAZQHwF4AGAJCAbbB7AGigBIBvAYQEMwBLYS7GgLwkQDIBnYAJxoDsA5kgC**+AQjQAoCaEhQAKhC4BGKClhwARAHc83bABMNSCQHoTUCwD0A-NPDQFXAEyr1GkHgCuR0+au3fKABNLygeEFE7WRDPbgA5SgBbaDUNOA9YqD4k6AALCG4IJA0oh0VgAGZXeBj4nOMzCygbCSA)

## Explanation

- `type F<S>=`: Defines a generic type `F` which takes a type parameter `S`.

- `` `Hello, ${...}!` ``: Text enclosed in backticks marks an interpolated
  string type. In string interpolation types, types are inserted into spots in
  the string surrounded with `${...}`.

- `Capitalize<S&string>`:

  - `Capitalize` is an intrinsic type built-in to TypeScript's Type System that
    takes in a string type and uppercases the first letter. There also exist
    the types `Lowercase` and `Uppercase` which work similarly. But don't get used
    to having the work done for you—these are pretty much the only built-in
    utility types that will be of much use to us in golfing.

  - `S&string` is an intersection type (denoted by `&`), meaning it takes the
    most specific type common to all of its members. Here, we are finding the
    intersection of `S` (the input) and `string` (referring to any string).

    If S is a string (`S extends string`), then this intersection will just
    return `S`, but if it isn't a string, this will return the special type
    `never` that no other type is assignable to. We need a string type here
    because `Capitalize` won't work if it doesn't know it's type argument is a
    string; other scenarios where we need a string type can arise as well.

    So why do we need this intersection if we know that `S` is a string? Well,
    technically, we _don't_ know that `S` is a string. Normally, we would give
    the TypeScript compiler more information by changing the original type
    definition to `type F<S extends string>=`. But this isn't normal code—we're
    doing code golf. And when the goal is the shortest code possible, we don't
    want to just throw around 15 byte safety measures all willy-nilly. Instead,
    we trick the compiler into letting us use an unknown type here by not
    specifying what type `S` is, only that what we give to `Capitalize` is related
    to type `string`.

    Another way we get around this problem is by using `//@ts-ignore` comments
    to tell the compiler “This is fine” while the house burns down. We'll use
    this technique quite a lot in later examples.
