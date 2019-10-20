import React from 'react';
import './App.css';
import CreatePost from './createPost';
import Poem from './Poem';
function App () {
	return (
		<div>
			<h1>Γεια σου κόσμε</h1>
			<CreatePost />
			<hr/><hr/>
			<Poem />
		</div>
	);
}

export default App;
