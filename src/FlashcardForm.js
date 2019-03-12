import React from "react";
import { Form, } from "semantic-ui-react";

class FlashcardForm extends React.Component {
    state = { question: "", answer: "", };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({ question: "", answer: "", });

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                    fluid
                    label="question"
                    placeholder="question"
                    name="question"
                    value={this.state.question}
                    onChange={this.handleChange}
                    />
                     <Form.Input
                     fluid
                    label="answer"
                    placeholder="answer"
                    name="answer"
                    value={this.state.answer}
                    onChange={this.handleChange}
                    />
                    <Form.Button>Submit</Form.Button>
                    </Form.Group>
                 </Form>
        )
    }
}

export default FlashcardForm;