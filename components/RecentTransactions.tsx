import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from "../styles/components/RecentTransactions.module.css";
import {
	getTransactions,
	getUser,
	Transaction,
	User,
	UserWithAccount,
} from "../util/api";
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
				if (typeof data == "string") return;
				_setTransactions((data as Transaction[]) ?? []);
			});
		}, []);
	}

	let [user, setUser] = useState<UserWithAccount | null>(null);
	useEffect(() => {
		getUser().then((data) => {
			setUser(data);
		});
	});

	return (
		<section
			className={
				props.className
					? `${styles.transactionsSection} ${props.className}`
					: styles.transactionsSection
			}
		>
			<h3>Transactions</h3>
			<section className={styles.transactionsList}>
				{transactions.map((transaction) => {
					return (
						<TransactionComp
							key={transaction.id}
							transaction={transaction}
							user={user}
						/>
					);
				})}
			</section>
		</section>
	);
};

export default RecentTransactions;
