import { combineReducers } from 'redux';

import conversation from './conversation';

const root = combineReducers({
  conversation,
});

export default root;
