import AWSAppSyncClient, {AUTH_TYPE} from 'aws-appsync';
import gql from 'graphql-tag';
import React from 'react';
import {ApolloProvider} from 'react-apollo';
import ReactDOM from 'react-dom';
import App from './App';
import aws_config from './aws-exports';
import {listPosts} from './graphql/queries';
import './index.css';

const client = new AWSAppSyncClient({
	url: aws_config.aws_appsync_graphqlEndpoint,
	region: aws_config.aws_appsync_region,
	auth: {
		type: AUTH_TYPE.API_KEY,
		apiKey: aws_config.aws_appsync_apiKey
	}
})
//init new appsync client by passing aws config params


client.query({
	query: gql(listPosts)
}).then(({data}) => {
	console.log("Blog data: ", data)
})

// global access to client
ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
