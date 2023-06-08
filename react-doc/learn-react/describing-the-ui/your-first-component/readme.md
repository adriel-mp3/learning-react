# My First Component

A component is created from the return of a JavaScript function.

```javascript
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}
```
To create React components, we use a JavaScript syntax extension called JSX. It allows writing HTML-like markup within a JavaScript file.

**React components are regular JavaScript functions, but their names must start with an uppercase letter or they won't work!**

## Using a Component

We can nest a component within other components, for example:

```javascript
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

### What the browser sees:
```html
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>
```

**Components can render other components, but we should never nest them like this:**

export default function Gallery() {
  // 🔴 Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ...
}

## Resume

### React Components
- React allows creating **reusable user interface components** for your application.

- In a React application, each part of the user interface is a **component**.

- React components are regular JavaScript functions, except:
  - Their names always start with an uppercase letter.
  - They return **JSX markup**.
