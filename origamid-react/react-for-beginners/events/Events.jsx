import React from 'react'

export const ClickEvents = () => {
  // callback function
  const handleClick = () => {
    console.log('click')
  }
  
  return (
    <div>
      // We can add a callback with an arrow function.
      <button onClick={() => console.log('click')}>Click</button>
      // Or a regular function.
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

/* 
Keeping the state of the DOM is not the best option, we'll see later how to do that with Hooks.
**/

export const windowEvents = () => {
  const handleScroll = () => {
    console.log('scroll')
  }
  // Events in the window/document or any element outside of React must be added with JavaScript using addEventListener.
  window.addEventListener('scroll', handleScroll);
  return (
    <div></div>
  )
}
/* 
That event type is added with the useEffect hook. We'll see later how to do that.
**/