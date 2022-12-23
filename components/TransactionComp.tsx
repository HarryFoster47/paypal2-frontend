import React from "react";
import { Transaction, TransactionType, UserWithAccount } from "../util/api";

import styles from "../styles/components/Transaction.module.css";

const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const TransactionComp = (props: {
	transaction: Transaction;
	user: UserWithAccount | null;
}) => {
	let isNegative = false;
	let title = "";
	let desc = "";
	switch (props.transaction.type) {
		case TransactionType.DEPOSIT:
			title = "Deposit";
			desc = "Money in";
			break;
		case TransactionType.WITHDRAW:
			title = "Withdraw";
			desc = "Money out";
			isNegative = true;
			break;
		case TransactionType.TRANSFER:
			if (props.transaction.sender?.id == props.user?.account.id) {
				title = props.transaction.recipient?.user?.username ?? "";
				desc = "Money sent";
				isNegative = true;
			} else {
				title = props.transaction.sender?.user?.username ?? "";
				desc = "Money received";
			}
			break;
	}

	return (
		<article
			className={
				props.transaction.message
					? `${styles.article} ${styles.hasMessage}`
					: styles.article
			}
		>
			<img
				src={
					props.transaction.type == TransactionType.TRANSFER
						? "/Person.png"
						: "/Transfer.png"
				}
			/>
			<div className={styles.info}>
				<h3>{title}</h3>
				<p>
					{props.transaction.transferredAt.getDate() +
						" " +
						MONTHS[props.transaction.transferredAt.getMonth()] +
						" - " +
						desc}
				</p>
				{props.transaction.message && (
					<h5>Msg: {props.transaction.message}</h5>
				)}
			</div>
			<h3 className={styles.amount}>
				{new Intl.NumberFormat("en-gb", {
					style: "currency",
					currency: "GBP",
				}).format((isNegative ? -1 : 1) * props.transaction.amount)}
			</h3>
		</article>
	);
};

export default TransactionComp;
