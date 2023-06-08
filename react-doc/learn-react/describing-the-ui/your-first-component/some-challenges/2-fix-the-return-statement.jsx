// Something isn’t right about this return statement. Can you fix it?

export default function Profile() {
  return
  <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;   
}

// Solution:

export default function Profile() {
  return (
    <img 
      src="https://i.imgur.com/jA8hHMpm.jpg" 
      alt="Katsuko Saruhashi" 
    />
  );   
}

/**
Conclusion:
- The component was not being returned correctly. We should always return on the same line or, if necessary, wrap it in parentheses. This is a basic syntax of returning JavaScript functions, where the engine cannot determine what the function returns.
*/
