import styles from './joke.module.css';

type Props = {
	joke: string
}

export const DisplayJoke = (props: Props) => {
	const {joke} = props;
	return (
		<div className={styles.jokeContainer}>
			<p>{joke}</p>
		</div>
	)
}