/**
Something’s wrong with how the Profile component is declared and used. Can you spot the mistake? (Try to remember how React distinguishes components from the regular HTML tags!)
*/

function profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <profile />
      <profile />
      <profile />
    </section>
  );
}

// Solution

function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
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

/**
Conclusion:
- The component was not created correctly, which is why it was not recognized as a component. It's also worth noting that there is no need to export the child component <Profile /> since it's in the same scope as the functional component <Gallery />.
*/
