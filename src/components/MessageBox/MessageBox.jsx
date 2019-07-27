import React, { useState, useEffect } from 'react';
import { Form, TextArea } from 'semantic-ui-react';

// redux
import { connect } from 'react-redux';
import { addMessage } from '../../store/actions';

function MessageBox(props) {
  const { addMessage } = props;
  const [comment, setComment] = useState('');

  const handleEnterPress = evt => {
    const enterCode = 13;
    if (evt && evt.keyCode === enterCode && comment) {
      const message = {
        user: 'Nicolas Rosendo',
        time: new Date(),
        replys: [],
        comment,
      };
      addMessage(message);

      // wait for handleChange setState of last key pressed
      setTimeout(() => setComment(''), 0);
    }
  };

  const subscribeEnterPress = () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleEnterPress, false);
    }
  };

  const unsubscribeEnterPress = () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleEnterPress, false);
    }
  };

  useEffect(() => {
    subscribeEnterPress();
    return unsubscribeEnterPress;
  });

  const handleChange = (_evt, data) => {
    const { value } = data;
    setComment(value);
  };

  return (
    <Form className="App-MessageBox">
      <TextArea
        name="msg-box"
        placeholder="Tell me more"
        onChange={handleChange}
        value={comment}
      />
    </Form>
  );
}

const mapDispatchToProps = {
  addMessage,
};

export default connect(
  null,
  mapDispatchToProps
)(MessageBox);
