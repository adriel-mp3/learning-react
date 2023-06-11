# Passing Props to a Component

React components use props to communicate with each other. Each parent component can pass information to its child components by giving them props. Props resemble HTML attributes, but we can pass any JavaScript value through them, including objects, arrays, and functions.

## Familiar Props

Props resemble HTML attributes. Props are the information we pass to a JSX tag. For example, className, src, alt, width, and height are some of the props we can pass to an img tag.

```javascript
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}
```

The props you can pass to an img tag are predefined (ReactDOM follows the HTML standard). But you can pass any props to your own components, like Avatar, to customize them.

## Passing JSX as Children

- It's common to nest inner tags in HTML, like:
```jsx
<div>
  <img />
</div>
```

- Sometimes, you'll want to nest your own components in a similar way:
```jsx
<Card>
  <Avatar />
</Card>
```
- When we nest content inside a JSX tag, the parent component receives that content in a prop called "children". For example, the Card component below receives a children prop defined as <Avatar />, and it renders it inside a wrapper div:

```javascript
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```

Summary

- To pass props, we add them to the JSX just like attributes in HTML.
- To read props, we often use destructuring.
- We can specify a default value for a certain prop when it's not defined or has a fixed value.
- We can forward all the props to a tag using the spread operator, but it's not recommended to overuse it.
- Nested JSX like `<Card><Avatar /></Card>` means that the `<Card />` component will have access to the `<Avatar />` component as its "children" and can render it properly.
- Props are read-only snapshots in time: each rendering receives a new version of props.
- We can't change the props. When we need interactivity, we'll need to define state.