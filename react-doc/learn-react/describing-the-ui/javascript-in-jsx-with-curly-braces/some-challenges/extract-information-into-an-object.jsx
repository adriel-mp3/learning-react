// Extract the image URL into the person object.


// Solution
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  imageUrl: "https://i.imgur.com/7vQD0fPs.jpg"
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.imageUrl}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

/*
Conclusion:
- We can use dynamic data by passing it within the curly braces. In this case, we are using an object to provide dynamic information to the TodoList component.
**/
