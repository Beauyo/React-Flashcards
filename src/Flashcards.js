import React from "react";
import {  Card, } from "semantic-ui-react";
import Flashcard from "./Flashcard";

const Flashcards = ({ flashcards, remove }) => (
    // <Card called padded>
    // <Card.Header>
    //   <Card.Row>
    //     <Card.Header>Question</Card.Header>
    //     <Card.Header>Answer</Card.Header>
    //     <Card.Header>Options</Card.Header>
    //   </Card.Row>
    // </Card.Header>

    <Card.Group>
      {
        flashcards.map( ( flashcard ) => ( 
            <Flashcard key={flashcard.id} {...flashcard} remove={remove} />
        ))
      }
    </Card.Group>
 
);

export default Flashcards;