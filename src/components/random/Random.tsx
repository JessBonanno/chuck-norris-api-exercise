import axios from 'axios';
import { useEffect, useState } from 'react'
import { DisplayJoke } from '../joke';

type Props = {}

export const Random = (props: Props) => {
	const [joke, setJoke] = useState<string>('');

	const getRandomJoke = async () => {
		try {
			const response = await axios.get('https://api.chucknorris.io/jokes/random');
			setJoke(response.data.value)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		getRandomJoke();
	}, [])

	return (
		<div>
			<h2>Chuck of the day</h2>
			{joke &&
				<DisplayJoke joke={joke} />
			}		</div>
	)
}