import React from 'react';
import './App.css';
import { Category } from './components/category';
import { Random } from './components/random'
import { Search } from './components/search';
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/nav';


function App() {
	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path='/' element={<Random />} />
				<Route path='/categories' element={<Category />} />
				<Route path='/search' element={<Search />} />
			</Routes>
		</div>
	);
}

export default App;
