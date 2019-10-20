import AWSAppSyncClient, {AUTH_TYPE} from 'aws-appsync';
import React from 'react';
import {ApolloProvider} from 'react-apollo'; // run queries and mutations from UI
import ReactDOM from 'react-dom';
import App from './App';
import aws_config from './aws-exports'; //gets resources configs params
import './index.css';

//instantiate new appsync client by passing aws config params
const client = new AWSAppSyncClient({
	url: aws_config.aws_appsync_graphqlEndpoint,
	region: aws_config.aws_appsync_region,
	auth: {
		type: AUTH_TYPE.API_KEY,
		apiKey: aws_config.aws_appsync_apiKey,
	}
})

// global access to client
ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
