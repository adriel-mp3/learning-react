// This sandbox doesn’t work because the root component is not exported:

function Profile() {
  return <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />;
  // Try to fix it yourself before looking at the solution!
}

// My solution:

function Profile() {
  return <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />;
}
export default Profile;

/**
Conclusion:
- The component was created but not exported correctly. There are two ways to export components using either the default export or named exports native to JavaScript.
*/
