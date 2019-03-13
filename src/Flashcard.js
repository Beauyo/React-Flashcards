import React from "react";
import { Button, Card, } from "semantic-ui-react";

const Flashcard = ({ id, question, answer, remove, showAnswer }) => (
    <Card>
    <Card.Header>{question}</Card.Header>
    <Card.Description>{}</Card.Description>
    <Card.Content>
        <Button color="blue" onClick={() => answer(answer) }>Show Answer</Button>
      <Button color="blue" onClick={() => remove(id)}>Delete</Button>
    </Card.Content>
  </Card>
);




export default Flashcard;