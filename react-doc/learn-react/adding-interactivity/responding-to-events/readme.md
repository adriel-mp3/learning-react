# Responding to events

React allows us to add event handlers in a different way, using them as if they were HTML attributes.

```jsx
<button onClick={callback}></button>
```

We can also define an inline function:

```jsx
<button onClick={() => {console.log('Click')}}></button>
```

We should be careful when passing inline functions as they behave differently than expected:

```jsx
// Correto
<button onClick={() => alert('...')}>

// Incorreto
<button onClick={alert('...')}>
```

If we execute a function instead of passing it as an anonymous function, it will be executed every time the component is rendered instead of on the click event.   


## Events

Every callback function has access to the same properties and methods as JavaScript event callback functions. Therefore, we need to be aware of behaviors such as event bubbling and some side effects like form submission.

