import gql from 'graphql-tag';
import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import {updatePost} from './graphql/mutations';

class EditPost extends Component {

	state = {
		display: false,
		postData: {
			title: this.props.title,
			body: this.props.body
		}
	};

	handleModal = () => {
		this.setState({display: !this.state.display});
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	// query variables
	// updatePost = mutation passing as arg that is called with updated post TTITLE && BODY!
	handleSubmit = (event, updatePost) => {
		event.preventDefault();
		updatePost({
			variables: {
				input: {
					id: this.props.id,
					title: this.props.title,
					body: this.props.body
				}
			}
		})
			.then(updateSubmitResponse => this.handleModal());
	};

	handleTitleUpdate = event => {
		this.setState({
			postData: {...this.state.postData, title: event.target.value}
		})
	};

	handleBodyUpdate = event => {
		this.setState({
			postData: {...this.state.postData, body: event.target.value}
		})
	};

	render () {
		return (
			<>
				{this.state.display && (
					<div className="modal">
						<button className="close" onClick={this.handleModal}>
							X
						</button>
						{/* Mutation component: pass fn as children b/c render props */}
						{/* with mutation fn param=passed mutation */}
						<Mutation mutation={gql(updatePost)}>
							{/*  */}
							{updatePost => {
								return (
									<form className="add-post" onSubmit={event => this.handleSubmit(event, updatePost)}>
										<input type="text" required value={this.state.postData.title} onChange={this.handleTitleUpdate} />
										<textArea rows="10" cols="40" required value={this.state.postData.body} onChange={this.handleBodyUpdate} />
										<button>Update Post</button>
									</form>
								)
							}}
						</Mutation>
					</div>
				)}
				<button onClick={this.handleModal}>Edit Post</button>
			</>
		)
	}
}

export default EditPost;
