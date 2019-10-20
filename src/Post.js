import React, {Component} from 'react';
import EditPost from './editPost';
class Post extends Component {

	componentDidMount () {
		this.props.subscribeToMore();
	}

	render () {
		const items = this.props.data.listPosts.items

		return items.map((post) => {
			return (
				<div key={post.id}>
					<time style={{fontStyle: "italic", float: "right"}} dateTime={post.createdAt}>
						{"Created on "}{new Date(post.createdAt).toDateString()}
					</time>
					<h1>{post.title}</h1>
					<p >{post.body}</p>
					<br />
					<EditPost {...post}/>
				</div>
			)
		})
	}

}

export default Post;
