import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from "../styles/components/RecentTransactions.module.css";
import { getTransactions, Transaction } from "../util/api";
import TransactionComp from "./TransactionComp";

const RecentTransactions = (props: {
	className?: string;
	transactions?: Transaction[];
	setTransactions?: Dispatch<SetStateAction<Transaction[]>>;
}) => {
	let transactions = props.transactions,
		setTransactions = props.setTransactions;
	if (!transactions || !setTransactions) {
		const [_transactions, _setTransactions] = useState<Transaction[]>(
			transactions ?? []
		);
		transactions = _transactions;
		setTransactions = _setTransactions;

		useEffect(() => {
			getTransactions().then((data) => {
				console.log(data);
				if (typeof data == "string") return;
				_setTransactions((data as Transaction[]) ?? []);
			});
		}, []);
	}

	return (
		<section
			className={
				props.className
					? `${styles.transactionsSection} ${props.className}`
					: styles.transactionsSection
			}
		>
			<h3>Recent Transactions</h3>
			<section className={styles.transactionsList}>
				{transactions.map((transaction) => {
					return <TransactionComp transaction={transaction} />;
				})}
			</section>
		</section>
	);
};

export default RecentTransactions;
