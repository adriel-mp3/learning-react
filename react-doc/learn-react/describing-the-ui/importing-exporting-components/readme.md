# Importing and Exporting Components

The magic of components lies in their reusability. We can create components composed of other components.

However, as we nest components, it often makes sense to split them into separate files.

## Default vs Named Exports

There are two main ways to export values in JavaScript: default exports and named exports.

````javascript
// export declaration
export default function Component() {};
export function Component {};

// import declaration
import Component from './...';
import { Component } from './.../';
````
When using default import, we can give it any name after `import`.

**For example:**
````javascript
export default function Component() {}
//Only by default export.
import Banana from './Component.jsx'
````
## We generally use:

- `default exports` when we want to export a single component from a file.

- Named `exports` to export multiple components and values.

**We always provide meaningful names for component functions and the files that contain them.**

````javascript
// Bad example:
export default () => {}
````