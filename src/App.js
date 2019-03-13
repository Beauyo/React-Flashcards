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
    showForm: false,
    showAnswer: false,
  }

  showAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer, });
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

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm, });
  }

  render() {
    return (
      <Container>
        <Header>React Flash Cards</Header>
        <br />
        <div>
          <Button icon color="blue" onClick={this.toggleForm}>
          <Icon name={`angle double ${this.state.showForm ? "up" : "down"}`} />
          </Button>
       { this.state.showForm ? <FlashcardForm add={this.addFlashcard} /> : null }
       
        </div>
        <br/>
        <Flashcards flashcards={this.state.flashcards} remove={this.removeFlashcard} answer={this.showAnswer} />
      </Container>
    );
  }
}

export default App;
