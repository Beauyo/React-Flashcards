import React from "react";
import Post from "./Post";
import { Header, } from "semantic-ui-react";
import PostForm from "./PostForm";

class Blog extends React.Component {
    state = {
        posts: [
            { id: 1, title: "Flashcard Review", body: "Flashcard game was great."}
        ]
    };

    renderPosts = () => {
        return this.state.posts.map( post => <Post key={post.id} {...post} edit={this.editPost} />)
    };

    getId = () => {
        return Math.floor((1 + Math.random ()) * 10000)
        .toString(16)
        .substring(1);
    };

    addPost = (postData) => {
        const { posts, } = this.state;
        const post = { id: this.getId(), ...postData, };
        this.setState({ posts: [post, ...posts], })
    }

    render() {
        return (
            <div>
                <Header as="h1">Blog</Header>
                <PostForm add={this.addPost} toggleEdit={this.toggleEdit} />
                { this.renderPosts() }
            </div>
        )
    }
}

export default Blog;