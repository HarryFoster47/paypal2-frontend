import React from "react";
import { Transaction } from "../util/api";

import styles from "../styles/components/Transaction.module.css";

const TransactionComp = (props: { transaction: Transaction }) => {
	return (
		<article className={styles.article}>
			<p>
				{new Intl.NumberFormat("en-gb", {
					style: "currency",
					currency: "GBP",
				}).format(props.transaction.amount)}
			</p>
		</article>
	);
};

export default TransactionComp;
