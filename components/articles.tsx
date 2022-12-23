import React from "react";

import styles from "../styles/components/Articles.module.css";

const Articles = () => {
	const articles = [
		{
			id: 1,
			image: "/article1.png",
			title: "How to Apply for a Sendo Card",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et voluptas voluptates expedita ut blanditiis quia eveniet nostrum numquam perspiciatis.",
		},
		{
			id: 2,
			image: "/article2.png",
			title: "Welcome to Sendo banking",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et voluptas voluptates expedita ut blanditiis quia eveniet nostrum numquam perspiciatis.",
		},
		{
			id: 3,
			image: "/article3.png",
			title: "How to budget",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et voluptas voluptates expedita ut blanditiis quia eveniet nostrum numquam perspiciatis.",
		},
		{
			id: 4,
			image: "/article4.png",
			title: "The rising cost of living",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et voluptas voluptates expedita ut blanditiis quia eveniet nostrum numquam perspiciatis.",
		},
		{
			id: 5,
			image: "/article5.png",
			title: "Planning for the future",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et voluptas voluptates expedita ut blanditiis quia eveniet nostrum numquam perspiciatis.",
		},
	];
	return (
		<div className={styles.sectionArticles}>
			<h3 className={styles.sectionTitle}>Our guides</h3>
			<div className={styles.articlesWrapper}>
				{articles.map((item) => (
					<div key={item.id} className={styles.article}>
						<div className={styles.imageSection}>
							<img src={item.image} />
						</div>
						<div className={styles.textSection}>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Articles;
