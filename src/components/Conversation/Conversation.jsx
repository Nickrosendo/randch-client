import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';

// redux
import { connect } from 'react-redux';

function ConversationMessage({ message }) {
  return (
    <Comment className="CommentBox">
      <Comment.Content>
        <Comment.Author as="a">
          <Icon name="user circle" />
          {message.user}
        </Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>{message.comment}</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
}

function ConversationList({ messages }) {
  return messages.map(message => (
    <ConversationMessage message={message} key={Math.random()} />
  ));
}

function Conversation(props) {
  const { conversation } = props;
  const { messages } = conversation;

  return (
    <main className="App-conversation-container">
      <Comment.Group className="App-conversation">
        <ConversationList messages={messages} />
      </Comment.Group>
    </main>
  );
}

const mapStateToProps = ({ conversation }) => ({
  conversation,
});

export default connect(mapStateToProps)(Conversation);
