import React from 'react';
import './App.css';
import CreatePost from './createPost';
import DisplayPosts from './displayPosts';
import Poem from './Poem';
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
