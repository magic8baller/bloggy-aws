import gql from 'graphql-tag';
import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import {deletePost} from '../graphql/mutations';
import {listPosts} from '../graphql/queries';

class DeletePost extends Component {

	handleDeletePost = deletePost => {
		deletePost({
			variables: {
				input: {
					id: this.props.id
				}
			},
			// optimisticResponse function we passed exactly the delete Post data with __typename: 'ModelPostConnection' then we update the cache by removing the deleted post.
			optimisticResponse: () => ({
				deletePost: {
					// This type must match the return type of
					//the query below (listPosts)
					__typename: 'ModelPostConnection',
					id: this.props.id,
					title: this.props.title,
					body: this.props.body,
					createdAt: this.props.createdAt
				}
			}),
			update: (cache, {data: {deletePost}}) => {
				const query = gql(listPosts);

				//read query from cache;
				const data = cache.readQuery({query});

				//add updated postslist to cached copy
				data.listPosts.items = [
					...data.listPosts.items.filter(item => item.id !== this.props.id)
				];

				//overwrite cache w new results:
				cache.writeQuery({query, data});
			}
		})
	}

	render () {
		return (
			<Mutation mutation={gql(deletePost)}>
				{(deletePost, {loading, error}) => {
					return <button onClick={() => this.handleDeletePost(deletePost)}>Delete Post</button>
				}}
			</Mutation>
		)
	}
}

export default DeletePost
