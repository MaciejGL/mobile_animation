import Head from 'next/head';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import ImageComp from '../components/ImageComp';
import PrimaryText from '../components/PrimaryText';

import styles from '../styles/Home.module.css';

export default function Home() {
	const [isExpanded, setIsExpanded] = useState(false);
	const [addAnimation, setAddAnimation] = useState(false);

	useEffect(() => {
		if (isExpanded && !addAnimation) {
			setAddAnimation(true);
		}
	}, [isExpanded, addAnimation]);

	return (
		<div>
			<Head>
				<title>Lost in Tokyo</title>
				<meta name="description" content="Gallery" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
				></link>
			</Head>

			<main className={styles.main}>
				<Header />
				<ImageComp isExpanded={isExpanded} />
				<PrimaryText />

				<button
					className={`${styles.buttonExpand} ${
						addAnimation && !isExpanded ? styles.btnFadeIn : ''
					} ${isExpanded ? styles.btnFade : ''}`}
					onClick={() => setIsExpanded(true)}
				>
					<i className="fa fa-chevron-left"></i>
					<i className="fa fa-chevron-right"></i>
				</button>
				<button
					className={styles.buttonShrink}
					onClick={() => setIsExpanded(false)}
				>
					<i className="fa-solid fa-xmark"></i>
				</button>
			</main>
		</div>
	);
}
