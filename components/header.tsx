import { useEffect, useState } from "react";
import Link from "next/link";

import { RiAccountCircleLine } from "react-icons/Ri";

import styles from "../styles/components/Header.module.css";
import { getUser, logout, User } from "../util/api";
import Router from "next/router";

const Header = (props: { loggedIn: boolean }) => {
	const [show, setShow] = useState(false);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		getUser().then((data) => {
			setUser(data);
		});
	}, [user]);

	return (
		<header className={styles.header}>
			<div className={styles.headerBar}>
				<Link className={styles.logoLink} href="/">
					<img src="/SendOLogo.png" />
				</Link>
				{props.loggedIn && (
					<div className={styles.profileBar}>
						<div
							className={styles.profileIcon}
							onClick={() => setShow(!show)}
						>
							<RiAccountCircleLine />
						</div>
						<h2 className={styles.desktopUsername}>
							{user ? user.username : ""}
						</h2>
					</div>
				)}
			</div>
			{show && (
				<div className={styles.profileMenu}>
					<h2 className={styles.mobileUsername}>
						{user ? user.username : ""}
					</h2>
					<div className={styles.itemContainer}>
						<button className={styles.profileMenu__Item}>
							Profile
						</button>
						<button className={styles.profileMenu__Item}>
							Settings
						</button>
						<button
							className={styles.profileMenu__Item}
							onClick={() => {
								logout().then(() => {
									Router.push("/login");
								});
							}}
						>
							Logout
						</button>
					</div>
				</div>
			)}
		</header>
	);
	//Account Nav Bar IMG (React icons)
};

export default Header;
