import React from "react";
import Post from "./Post";
import { Header, } from "semantic-ui-react";

class Blog extends React.Component {
    state = {
        posts: [
            { id: 1, title: "Flashcard Review", body: "Flashcard game was great."}
        ]
    };

    renderPosts = () => {
        return this.state.posts.map( post => <Post key={post.id} {...post} />)
    };

    render() {
        return (
            <div>
                <Header as="h1">Blog</Header>
                { this.renderPosts() }
            </div>
        )
    }
}

export default Blog;