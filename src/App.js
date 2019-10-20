import React from 'react';
import './App.css';
import CreatePost from './createPost';
import DisplayPosts from './displayPosts.js'
import Poem from './Poem';
// import {withAuthenticator} from 'aws-amplify-react'
// import Amplify from 'aws-amplify'

//Get the resources configurations params
// import awsconfig from './aws-exports'

// Amplify.configure(awsconfig)
function App () {
	return (
		<div>
			<h1>Γεια σου κόσμε</h1>
			<CreatePost />
			<DisplayPosts/>
			<hr/><hr/>
			<Poem />
		</div>
	);
}

export default App;

// export default withAuthenticator(App, {includeGreetings: true})
