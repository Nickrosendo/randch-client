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
