/* 
- Fix a broken profile 

Two Profile components are rendered side by side with different data. Press “Collapse” on the first profile, and then “Expand” it. You’ll notice that both profiles now show the same person. This is a bug.
Find the cause of the bug and fix it.
**/


//Solution

import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

export default function Profile({ person }) {
  return (
    <Panel>
      <Header name={person.name}/>
      <Avatar {...person}/>
    </Panel>
  )
}

function Header({name}) {
  return <h1>{name}</h1>;
}

function Avatar({ name, imageId}) {
  return (
    <img
      className="avatar"
      src={getImageUrl({imageId})}
      alt={name}
      width={50}
      height={50}
    />
  );
}
