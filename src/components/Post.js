import React from "react";
import { Header, Segment, } from "semantic-ui-react";

class Post extends React.Component {
    render() {
        return (
            <Segment>
                <Header as="h3">{ this.props.title}</Header>
                <p>{ this.props.body }</p>
                </Segment>
        )
    }
}

export default Post;