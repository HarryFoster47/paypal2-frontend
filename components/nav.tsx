import Link from "next/link";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { VscHistory } from "react-icons/vsc";
import { HiArrowsUpDown } from "react-icons/hi2";

import styles from "../styles/components/Nav.module.css";
import { useRouter } from "next/router";

const getClassName = (ref: String) => {
	let router = useRouter();

	return (
		`${styles.icon}` +
		(router.pathname == ref ? ` ${styles.iconActive}` : "")
	);
};

const Nav = () => {
	return (
		<div className={styles.menu}>
			<div className={styles.iconsContainer}>
				<Link className={getClassName("/")} href="/">
					<div>
						<AiFillHome />
					</div>
				</Link>
				<Link className={getClassName("/contacts")} href="/contacts">
					<div>
						<BsFillPersonLinesFill />
					</div>
				</Link>
				<Link className={getClassName("/transfer")} href="/transfer">
					<div>
						<HiArrowsUpDown />
					</div>
				</Link>
				<Link className={getClassName("/history")} href="/history">
					<div>
						<VscHistory />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Nav;
