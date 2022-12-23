import { useEffect, useState } from "react";
import Articles from "../components/Articles";
import Balance from "../components/Balance";
import PageLayout from "../components/PageLayout";
import RecentTransactions from "../components/RecentTransactions";
import SendAgain from "../components/SendAgain";
import styles from "../styles/pages/Dashboard.module.css";
import { getTransactions, Transaction } from "../util/api";

export default function IndexPage() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		getTransactions().then((data) => {
			if (typeof data == "string") return;
			setTransactions(data ? (data.slice(0, 6) as Transaction[]) : []);
		});
	});

	return (
		<PageLayout>
			<main className={styles.dashboard}>
				<div className={styles.balanceWrapper}>
					<Balance />
				</div>
				<SendAgain />

				<RecentTransactions
					transactions={transactions}
					setTransactions={setTransactions}
				/>

				<Articles />
			</main>
		</PageLayout>
	);
}
