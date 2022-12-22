import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { isLoggedIn } from "../util/api";

import Header from "./Header";
import Nav from "./Nav";

import styles from "../styles/components/PageLayout.module.css";

const PageLayout = (props: React.PropsWithChildren) => {
	let [loggedIn, setLoggedIn] = useState(true);
	let router = useRouter();

	useEffect(() => {
		isLoggedIn().then((data) => {
			setLoggedIn(data);
			if (!data) {
				if (!["/login", "/register"].includes(router.pathname)) {
					Router.push("/login");
				}
			}
		});
	});

	return (
		<main className={styles.page}>
			<Header loggedIn={loggedIn} />
			<section
				className={
					loggedIn
						? `${styles.content} ${styles.loggedIn}`
						: styles.content
				}
			>
				{loggedIn && <Nav />}
				{props.children}
			</section>
		</main>
	);
};

export default PageLayout;
