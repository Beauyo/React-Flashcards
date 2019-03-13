import React from "react";
import { Button, Card, } from "semantic-ui-react";

class Flashcard extends React.Component {
    state = { showAnswer: true }

    toggleAnswer = () => this.setState({ showAnswer: !this.state.showAnswer });

    render () {

const { id, question, remove, answer }  = this.props
const {showAnswer} = this.state
return( 
    <Card>
    <Card.Header>{question}</Card.Header>
<Card.Description>Answer: { showAnswer ?  [<br />]: answer } </Card.Description>
    <Card.Content>
        <Button color="blue" onClick={() => this.toggleAnswer()} >{showAnswer ? "Show answer" : "Hide answer" }</Button>
      <Button color="blue" onClick={() => remove(id)}>Delete</Button>
    </Card.Content>
  </Card>
        ) 
        
    }
}




export default Flashcard;