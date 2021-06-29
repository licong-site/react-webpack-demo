import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '@/components/Hello';

ReactDOM.render(
  <React.StrictMode>
    <Hello name={'Jim'} />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
