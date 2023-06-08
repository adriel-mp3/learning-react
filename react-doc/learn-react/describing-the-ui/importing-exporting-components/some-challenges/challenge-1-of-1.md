# Try out some challenges
**Challenge 1 of 1: Split the components further** 

Currently, Gallery.js exports both Profile and Gallery, which is a bit confusing.

- Move the Profile component to its own Profile.js, and then change the App component to render both <Profile /> and <Gallery /> one after another.

You may use either a default or a named export for Profile, but make sure that you use the corresponding import syntax in both App.js and Gallery.js! 

| Syntax  | Export statement                              | Import statement                       |
|---------|-----------------------------------------------|----------------------------------------|
| Default | `export default function Button() {}`         | `import Button from './Button.js';`     |
| Named   | `export function Button() {}`                  | `import { Button } from './Button.js';` |
