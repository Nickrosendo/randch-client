const INITIAL_STATE = {
  messages: [],
  scrollBottom: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MSG':
      const { msg } = action;
      return {
        ...state,
        messages: [...state.messages, msg],
      };
    default:
      return state;
  }
};
