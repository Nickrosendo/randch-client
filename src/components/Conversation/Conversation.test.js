import React from 'react';
import ReactDOM from 'react-dom';
import Conversation from './Conversation';

// redux
import { Provider } from 'react-redux';
import store from '../../store';

it('should render Conversation without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Conversation />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('should have list DOM reference', () => {
  // TODO: check if component has reference to scroll element
});

it('should scroll to bottom when receive new message', () => {
  // TODO: check if component scroll down when receive new message
});
