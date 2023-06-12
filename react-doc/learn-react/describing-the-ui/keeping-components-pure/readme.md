# Keeping Components Pure

Some JavaScript functions are pure. Pure functions are functions that perform only a calculation and nothing else.

By writing components as pure functions, we make our code much more scalable and avoid a class of perplexing bugs and unpredictable behaviors.

## Purity: Components as Formulas

A pure function has the following characteristics:

- It minds its own business. It does not change any object or variable that existed before it was called.

- Same inputs, same outputs. Given the same inputs, a pure function should always return the same result.