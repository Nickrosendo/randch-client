import React from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './MessageBox';

// redux
import { Provider } from 'react-redux';
import store from '../../store';

it('should render MessageBox without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MessageBox />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('should send a message without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MessageBox />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('should clear listeners on component unmount', () => {
  //TODO: create unit test that check removeListener after component unmount  
});

it('should send message when hit enter', () => {
 //TODO: create unit test that mock enter press to send a message
});


it('should try to connect to WebSocket Server', () => { 
 //TODO: create unit test that verify websocket connection attempt
});
