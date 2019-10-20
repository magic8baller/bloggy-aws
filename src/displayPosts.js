import React, { Component } from 'react'
import {Query} from 'react-apollo';
import {listPosts} from './graphql/queries';
import {onCreatePost} from './graphql/subscriptions';
import gql from 'graphql-tag';
import Post from './Post';

class DisplayPosts extends Component {
//query posts list and enable real time subscriptions so can see new created posts rendered first (optimistic render)


subscribeNewPosts = (subscribeToMore) => {
		return subscribeToMore({
			document: gql(onCreatePost),
// updateQuery=merge prev & current data
			updateQuery: (prev, {subscriptionData}) => {
				if (!subscriptionData.data) return prev;
				const newPostData = subscriptionData.data.onCreatePost;
				return Object.assign({}, prev, {
					listPosts: {
						...prev.listPosts,
						items: [...prev.listPosts.items, newPostData]
					}
				})
			}
		})
	}
		render() {
		return (
			<div className="posts">
			{/* <Query/> => access subscribeToMore fn && pass to subscribeNEW method */}
				<Query query={gql(listPosts)}>
					{({loading, data, error, subscribeToMore}) => {
						if (loading) return <p>Loading post...</p>;
						if (error) return <p>{error.message}</p>;
{/* subNEWposts = called whenever <Post/> mounts to DOM & listen for new posts added to API */}
						return <Post data={data} subscribeToMore={() => this.subscribeNewPosts(subscribeToMore)}/>
					}}
				</Query>
			</div>
		)
	}
}

export default DisplayPosts
