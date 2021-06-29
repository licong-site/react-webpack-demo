import * as React from 'react';
import './index.css';

export interface HelloProps {
  name: string,
  age?: number,
}

function Hello({ name, age = 18 }: HelloProps) {
  if (age <= 0) {
    throw new Error('wrong age');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name}, age is {age}.
      </div>
    </div>
  );
}

export default Hello;