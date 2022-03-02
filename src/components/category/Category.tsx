import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DisplayJoke } from '../joke/DisplayJoke';

type Props = {}

export const Category = (props: Props) => {
	const [categories, setCategories] = useState<string[]>([]);
	const [categoryJoke, setCategoryJoke] = useState<string>();

	const getCategories = async () => {
		try {
			const response = await axios.get('https://api.chucknorris.io/jokes/categories')
			setCategories(response.data);
		} catch (err) {
			console.error(err)
		}
	}

	const getJokeFromCategory = async (category: string) => {
		try {
			const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
			setCategoryJoke(response.data.value);
		} catch (err) {
			console.error(err)
		}
	}


	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const category = e.target.value
		getJokeFromCategory(category);
	}


	useEffect(() => {
		getCategories();
	}, [])

	return (
		<div>
			<h3>Choose a category to get another joke</h3>
			<select name='categories' onChange={handleSelectChange}>
				{categories.map((c, i) => {
					return (
						<option key={i}>{c}</option>
					)
				})}
			</select>
			{categoryJoke &&
				<DisplayJoke joke={categoryJoke} />
			}
		</div>
	)
}
