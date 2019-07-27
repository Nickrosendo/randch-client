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
