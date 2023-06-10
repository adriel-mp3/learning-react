// In the object below, the full image URL is split into four parts: base URL, imageId, imageSize, and file extension.

// We want the image URL to combine these attributes together: base URL (always 'https://i.imgur.com/'), imageId ('7vQD0fP'), imageSize ('s'), and file extension (always '.jpg'). However, something is wrong with how the <img> tag specifies its src.

// Can you fix it?

const baseUrl1 = 'https://i.imgur.com/';
const person1 = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}


// Solution

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
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
- We can pass multiple values to an attribute, either directly from a variable or from an object. However, we need to pay attention to the syntax and not confuse ourselves when passing these values. We can simplify this expression by using a function that takes an object and returns all the desired properties combined. There are several possibilities when it comes to passing values, but we always need to be careful about how we pass them.
**/

