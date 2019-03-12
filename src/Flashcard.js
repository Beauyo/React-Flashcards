import React from "react";
import { Button, Card, } from "semantic-ui-react";

const Flashcard = ({ id, question, answer, remove }) => (
    <Card>
    <Card.Header>{question}</Card.Header>
    <Card.Description>{answer}</Card.Description>
    <Card.Content>
      <Button color="blue" onClick={() => remove(id)}>Delete</Button>
    </Card.Content>
  </Card>
);

export default Flashcard;