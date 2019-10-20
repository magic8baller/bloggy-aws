import React, {Component} from 'react';

class Post extends Component {

	componentDidMount () {
		this.props.subscribeToMore();
	}
	render () {
		const {items} = this.props.data.listPosts;
		return (
			items.map((post) => {
				return (
					<div>
						<h1>{post.title}</h1>
						<p>{post.body}</p>
						<time dateTime={post.createdAt}>
							{new Date(post.createdAt).toDateString()}
						</time>
					</div>
				)
			})
		)
	}
}

export default Post;
