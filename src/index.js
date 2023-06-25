import React from 'react';
import ReactDOM from 'react-dom/client';
import Chat from './Components/Chat';
import List from './Components/List';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <aside>
      <List/>
    </aside>
    <Chat/>
    <aside>

    </aside>
  </>
);