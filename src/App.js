import React from "react";
import { Form, TextArea, Comment, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function Conversation() {
  return (
    <Comment.Group className="App-conversation">
      <Comment className="CommentBox">
        <Comment.Content>
          <Comment.Author as="a">
            <Icon name="user circle" />
            Elliot Fu
          </Comment.Author>
          <Comment.Metadata>
            <div>Yesterday at 12:30AM</div>
          </Comment.Metadata>
          <Comment.Text>
            <p>This has been very useful for my research. Thanks as well!</p>
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );
}

function MessageBox() {
  return (
    <Form className="App-MessageBox">
      <TextArea placeholder="Tell me more" />
    </Form>
  );
}

function App() {
  return (
    <div className="App-body">
      <Conversation />
      <MessageBox />
    </div>
  );
}

export default App;
