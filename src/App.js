import React from 'react';
import { Image } from 'semantic-ui-react';

// components
import { Conversation, MessageBox } from './components';

// style
import './App.css';

// images
import Logo from './images/randch.png';

function App() {
  return (
    <div className="App-body">
      <Image src={Logo} size="tiny" className="App-Logo" />
      <Conversation />
      <MessageBox />
    </div>
  );
}

export default App;
