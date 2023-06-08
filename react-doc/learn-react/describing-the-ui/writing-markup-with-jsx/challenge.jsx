// Challenge 1 of 1: Convert some HTML to JSX 

// This HTML was pasted into a component, but it’s not valid JSX. Fix it:

// export default function Bio() {
//   return (
//     <div class="intro">
//       <h1>Welcome to my website!</h1>
//     </div>
//     <p class="summary">
//       You can find my thoughts here.
//       <br><br>
//       <b>And <i>pictures</b></i> of scientists!
//     </p>
//   );
// }

// Solution

export default function Bio() {
  return (
    <>
    <div className="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p className="summary">
      You can find my thoughts here.
      <br/><br/>
      <b>And <i>pictures</i></b> of scientists!
    </p>
    </>
  );
}

/** 
Conclusion:
- Tags like class should not be declared within JSX markup because they are reserved words in JavaScript and will result in an error when transformed into an object. Although JSX bears a resemblance to HTML, we must always remember to close all tags, whether they have automatic closing or not, such as the <i> and <br> tags.
*/