import React from 'react';

import styles from '../styles/Header.module.css';

const Header = () => (
	<div>
		<p className={styles.headerText}>
			<span className={styles.headerText_shared}>Shared</span>{' '}
			<span className={styles.headerText_by}>by you</span>
		</p>
	</div>
);

export default Header;
