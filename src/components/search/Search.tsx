import axios from 'axios';
import { useState } from 'react';
import { Joke } from '../joke';

type Props = {}

interface Joke {
	categories: string[];
	createdAt: string;
	icon_url: string;
	id: string;
	updated_at: string;
	url: string;
	value: string;
}

export const Search = (props: Props) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [jokes, setJokes] = useState<Joke[]>([]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	}

	const getJokes = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`);
			setJokes(response.data.result);
		} catch (err) {
			console.error(err)
		}
	}

	console.log(jokes.length);
	console.log({jokes})


	return (
		<div>
			<h3>Search a keyword for more jokes</h3>
			<form onSubmit={getJokes}>
				<input
					type='text'
					name='searchTerm'
					value={searchTerm} 
					onChange={handleSearchChange}
					/>
				<button type='submit'>Search</button>
			</form>
			{jokes.map((joke, i) => {
				return (
					<div key={i}>
						<Joke joke={joke.value}/>
					</div>
				)
			})}
		</div>
	)
}