import React, { useEffect, useState } from 'react';

import styles from '../styles/ImageComp.module.css';

const ImageComp = ({ isExpanded }) => {
	const [addAnimation, setAddAnimation] = useState(false);
	useEffect(() => {
		if (isExpanded && !addAnimation) {
			setAddAnimation(true);
		}
	}, [isExpanded, addAnimation]);

	return (
		<div className={styles.imgWrapper}>
			<div
				className={`${styles.imageContainer} ${
					addAnimation && !isExpanded ? styles.springAnimation : ''
				} ${isExpanded ? styles.imageContainerExpanded : ''}`}
			>
				<section
					className={`${styles.contentSecondary} ${
						isExpanded ? styles.showContent : ''
					}`}
				>
					<h1 className={isExpanded ? styles.bounceInUp : ''}>
						Lost in Tokyo
					</h1>
					<div className={styles.subContent}>
						<p
							className={`${styles.contentSecondaryBy} ${
								isExpanded ? styles.bounceInUp : ''
							}`}
						>
							By Jonathan Vik
						</p>
						<p
							className={`${styles.contentSecondaryComments} ${
								isExpanded ? styles.bounceInLeft : ''
							}`}
						>
							8 <i className="fa-solid fa-message"></i>
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ImageComp;
