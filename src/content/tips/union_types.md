---
title: Union types
skill: fundamental
---

Union types are a fundamental concept of TypeScript's Type System. A union is a
type that represents a value that could be any one of a collection of possibly
unrelated types. They are represented by multiple values separated by `|` (pipe)
characters:

```typescript
type MyUnion = "a" | "b" | "c";
// A value that is MyUnion can be any of "a", "b", or "c".
// By extension, a type that extends MyUnion must be a
// subset of the union (i.e. representing one or more
// elements of it).
```

Note that union types only represent the unique values of the union. That is, a
type `"a" | "b" | "a"` will be narrowed down to `"a" | "b"`. In this sense, you
can think of a union type as like a Set in traditional programming languages.

This behaviour isn't always intuitive, though: Members of the union that are
assignable to each other end up as the least specific type, so a union like
`"a" | "b" | "c" | string` will narrow down to just `string`, and a union like
`1 | 2 | "a" | "b" | number` will narrow down `number | "a" | "b"`.
