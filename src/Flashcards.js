import React from "react";
import {  Table, } from "semantic-ui-react";
import Flashcard from "./Flashcard";

const Flashcards = ({ flashcards, remove }) => (
    <Table called padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Question</Table.HeaderCell>
        <Table.HeaderCell>Answer</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        flashcards.map( ( flashcard ) => ( 
            <Flashcard key={flashcard.id} {...flashcard} remove={remove} />
        ))
      }
    </Table.Body>
  </Table>
);

export default Flashcards;