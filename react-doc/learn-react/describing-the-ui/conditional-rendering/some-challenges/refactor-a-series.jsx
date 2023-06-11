// Refactor a series of ? : to if and variables 
/* 
This Drink component uses a series of ? : conditions to show different information depending on whether the name prop is "tea" or "coffee". The problem is that the information about each drink is spread across multiple conditions. Refactor this code to use a single if statement instead of three ? : conditions.**/

function Drink({ name }) {
  const drinks = {
    tea: {
      part:'leaf',
      content:'15–70 mg/cup',
      age:'4,000+ years',
    },
    coffee: {
      part:'bean',
      content:'80–185 mg/cup',
      age:'1,000+ years',
    }
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{drinks[name].part}</dd>
        <dt>Caffeine content</dt>
        <dd>{drinks[name].content}</dd>
        <dt>Age</dt>
        <dd>{drinks[name].age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

/* 
Conclusion: 
- In this exercise, the object literal notation was used to simplify the addition of new drinks and make the content dynamic based on the type of drink being rendered in the DrinkList.
**/