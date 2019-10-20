import AWSAppSyncClient, {AUTH_TYPE} from 'aws-appsync';
import React from 'react';
import {ApolloProvider} from 'react-apollo'; // run queries and mutations from UI
import ReactDOM from 'react-dom';
import gql from 'graphql-tag'
import App from './App';
import aws_config from './aws-exports'; //gets resources configs params
import './index.css';
import {listPosts} from './graphql/queries'

//instantiate new appsync client by passing aws config params
const client = new AWSAppSyncClient({
	url: aws_config.aws_appsync_graphqlEndpoint,
	region: aws_config.aws_appsync_region,
	auth: {
		type: AUTH_TYPE.API_KEY,
		apiKey: aws_config.aws_appsync_apiKey,
	}
})

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
