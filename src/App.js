import React from 'react';
import './App.css';
import CreatePost from './components/createPost';
import DisplayPosts from './components/displayPosts.js';

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
