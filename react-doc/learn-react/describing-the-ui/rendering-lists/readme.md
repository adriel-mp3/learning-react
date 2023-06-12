# Rendering Lists

Often, we need to display multiple similar components from a collection of data. In React, we can render JSX conditionally using JavaScript syntax such as `map()` and `filter()` array methods.

## Rendering data from arrays:

```html
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
```

A list like this would be much more flexible if transformed into an array:

```jsx
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
```

We can then use `map()`:
```jsx
const listItems = people.map(person => <li>{person}</li>);
```

And return them wrapped in a `<ul>`:
```jsx
return <ul>{listItems}</ul>;
```

Filtering arrays of items:

We can further structure the data:
```jsx
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
```

Now we can filter using the `filter()` array method:

```jsx
const chemists = people.filter(person =>
  person.profession === 'chemist'
);
```

Mapping the filtered data:

```jsx
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);
```

## Maintaining list items order with a key:

Para cada item do array precisamos definir uma key
```jsx
<li key={person.id}>...</li>
```

This helps React infer exactly what happened and make correct updates to the DOM tree.

**The short syntax `<>...</>` of the Fragment doesn't allow you to pass a key, so you need to wrap them in a single `<div>` or use the slightly longer and more explicit syntax: `<Fragment>`**

```jsx
import { Fragment } from 'react';
// ...
const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```

Key rules:

- Keys must be unique among siblings. However, there's no problem using the same keys for JSX nodes in different arrays.

- Keys should not change or it defeats their purpose! Do not generate them during rendering.