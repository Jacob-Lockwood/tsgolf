---
title: Extends, infer, and conditional types
skill: fundamental
---

The `extends` keyword and conditional types are the probably the most important
fundamental structures of TypeScript's Type System; without them, many of the
complicated types you've seen would not be possible.

But what are these structures, and how can you use them? Let's start with the
`extends` keyword. It says that the type on its left side extends the type on
its right side. But what does it mean for a type to extend another type?

The easiest way to explain this is through a couple of examples:

- `1` extends `number` (see [Number types](/tsgolf/tips/number_types))
- `1 | 2` extends `number` (see [Union types](/tsgolf/tips/union_types))
- `1` extends `1 | 2`
- `"a"` extends `string` (see [String types](/tsgolf/tips/string))
- `"a" | "b"` extends `string`
- `"a" extends "a" | "b"`
- `[1, 2, 3]` extends `number[]` (see
  [Tuple and Array types](/tsgolf/tips/tuple_array_types))
- `[1, 2, 3]` extends `[1, number, 3]`

Basically, a type `A` extends a type `B` if `A` is a "subset" of `B`. Subset
isn't quite the right word for this but that's the general idea.

The `extends` keyword can be used in two different contexts:

- In a type parameter, to specify that the argument must extend a given type:
  ```typescript
  type MyType<T extends string[]> = T;
  ```
- As the conditional of the conditional type (see below)
- In an `infer` part (see below)

Okay, now that we understand the concept of extends we can get on to conditional
types, where `extends` is most useful. A conditional type is pretty much what it
says on the tin: It picks a specified type based on a given condition. And in
TypeScript's type system, the condition is always an `extends` clause:

```typescript
type MyType<T> = T extends [1, 2, 3] ? "yes, T extends [1, 2, 3]" : "nope";
```

As you can see, the condition is followed by a `?`, a type, a `:`, and another
type. The type immediately following the `?` is returned if the condition was
true; otherwise the type following the `:` is returned.

Note that, perhaps unintuitively, you can't use an `extends` clause as a
boolean. You can have something like `T extends "blablabla" ? true : false` or
perhaps with those `true` and `false` types replaced with `1` and `0`, but you
can't just have a type `T extends "blablabla"`; that's a syntax error.

And finally, last but absolutely not least, `infer`. This keyword allows all the
complicated matching and conditionals to work. The `infer` keyword basically
tells the compiler that there's going to be a type in part of a conditional, and
to grab that type and give it a name.

In this example, we check if `T extends [1, infer N, 3]`. If it does, return N,
otherwise it will return -1:

```typescript
type MyType<T> = T extends [1, infer N, 3] ? N : -1;
```

This selects the second item of the tuple as `N` if the first and last items are
1 and 3 respectively. `MyType<[1, 2, 3]>` will yield `2` as the result.

You can also have multiple `infer` parts in one conditional:

```typescript
type Select2And4<T> = T extends [any, infer A, any, infer B] ? [A, B] : -1;
```

This type selects the second and fourth items of the tuple wihthout caring about
what type items 1 and 3 are. The only restriction this `extends` clause adds is
that `T` must be a tuple with exactly four items. If it isn't, the conditional
will be false and -1 will be returned.

An `infer` part can also optionally have an `extends` clause attached, to
restrict the selected type:

```typescript
type Select2ndIfABC<T> = T extends [any, infer A extends "a" | "b" | "c"]
  ? A
  : -1;
```

This only returns the second item of `T` if that type `extends "a" | "b" | "c"`.

Remember that the `infer` part can be of any type that you give in the `extends`
clause.
