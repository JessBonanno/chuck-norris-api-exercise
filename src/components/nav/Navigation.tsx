import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

type Props = {}

export const Navigation = (props: Props) => {
	return (
		<nav className={styles.container}>
			<ul className={styles.navItems}>
				<li className={styles.navItem}>
					<Link to='/'>Home</Link>
				</li>
				<li className={styles.navItem}>
					<Link to='/categories'>Categories</Link>
				</li>
				<li className={styles.navItem}>
					<Link to='/search'>Search</Link>
				</li>
			</ul>
		</nav>
	)
}