import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react';
import React from 'react';
import './App.css';
//Get the resources configurations params
import awsconfig from './aws-exports';
import CreatePost from './components/createPost';
import DisplayPosts from './components/displayPosts.js';
import Poem from './Poem'


Amplify.configure(awsconfig)
function App () {
	return (
		<div>
			<h1>Γεια σου κόσμε</h1>
			<CreatePost />
			<Poem />
			<br />
			<hr /><hr />
			<DisplayPosts />
		</div>
	);
}

export default withAuthenticator(App, {includeGreetings: true});
