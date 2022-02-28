import React from 'react';
import './App.css';
import { Category } from './components/category';
import { Random } from './components/random'
import { Search } from './components/search';

function App() {
	return (
		<div className="App">
			<Random />
			<Category />
			<Search />
		</div>
	);
}

export default App;
