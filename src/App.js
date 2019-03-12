import React, { Component } from 'react';
import { Container, Header, Button, Icon } from "semantic-ui-react"
import Flashcards from "./Flashcards"
import FlashcardForm from "./FlashcardForm"
class App extends Component {
  state = {
    flashcards: [
      { id: 1, question: "2x2", answer: "4" },
      { id: 2, question: "2x10", answer: "20" },
      { id: 3, question: "9x5", answer: "45" },
      { id: 4, question: "8x2", answer: "16" },
    ],
    showAnswer: false,
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  }

  addFlashcard = (flashcardData) => {
    let flashcard = { id: this.getId(), ...flashcardData, };
    this.setState({ flashcards: [...this.state.flashcards, flashcard], });
  };

  removeFlashcard = (id) => {
    const flashcards = this.state.flashcards.filter( flashcard => {
      if (flashcard.id !== id )
        return flashcard
    });
    this.setState({ flashcards: [...flashcards], });
  };

  toggleAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer, });
  }

  render() {
    return (
      <Container>
        <Header>React Flash Cards</Header>
        <br />
        <div>
          <Button icon color="blue" onClick={this.toggleAnswer}>
          <Icon name={`angle double ${this.state.showAnswer ? "up" : "down"}`} />
          </Button>
       { this.state.showAnswer ? <FlashcardForm add={this.addFlashcard} /> : null }
        </div>
        <br/>
        <Flashcards flashcards={this.state.flashcards} remove={this.removeFlashcard} />
      </Container>
    );
  }
}

export default App;
