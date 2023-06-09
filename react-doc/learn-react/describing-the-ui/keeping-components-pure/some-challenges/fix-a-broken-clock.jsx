/* 
This component tries to set the <h1>’s CSS class to "night" during the time from midnight to six hours in the morning, and "day" at all other times. However, it doesn’t work. Can you fix this component?

You can verify whether your solution works by temporarily changing the computer’s timezone. When the current time is between midnight and six in the morning, the clock should have inverted colors!
**/

// Solution

export default function Clock({ time }) {
  let hours = time.getHours();
  const isNight = hours >= 0 && hours <= 6;
  return (
    <h1 id="time" className={isNight ? 'night' : 'day'}>
      {time.toLocaleTimeString()}
    </h1>
  );
}

