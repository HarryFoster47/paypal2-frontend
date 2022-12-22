import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { getBalance } from "../util/api";

import styles from "../styles/components/Balance.module.css";

const Balance = (props: {
	alone?: boolean;
	balance?: number;
	setBalance?: Dispatch<SetStateAction<number>>;
}) => {
	let balance = props.balance,
		setBalance = props.setBalance;
	if (!balance || !setBalance) {
		const [_balance, _setbalance] = useState<number>(balance ?? 0);
		balance = _balance;
		setBalance = _setbalance;

		useEffect(() => {
			getBalance().then((data) => {
				console.log(data);
				_setbalance(data ?? 0);
			});
		}, []);
	}

	return (
		<section
			className={
				props.alone
					? styles.balanceSectionAlone
					: styles.balanceSectionFit
			}
		>
			<img src="/SendOIcon.png" />
			<div className={styles.balanceInfo}>
				<h2>
					{new Intl.NumberFormat("en-gb", {
						style: "currency",
						currency: "GBP",
					}).format(balance)}
				</h2>
				<p>Sendo balance</p>
			</div>
		</section>
		// <center><div className={styles.balance}><span className={styles.this}>£</span>{balance}</div></center>
	);
};

export default Balance;
