import React from 'react';
import './App.css';
import CreatePost from './createPost';
import DisplayPosts from './displayPosts.js';

function App () {
	return (
		<div>
			<h1>Γεια σου κόσμε</h1>
			<CreatePost />
			<br />
			<DisplayPosts />
			<hr /><hr />
			{/* <Poem /> */}
		</div>
	);
}

export default App;
