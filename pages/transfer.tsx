import PageLayout from "../components/PageLayout";
import Balance from "../components/Balance";
import SendMoneyForm from "../components/forms/SendMoneyForm";
import styles from "../styles/pages/Transfer.module.css";
import WithdrawDepositMoneyForm from "../components/forms/WithdrawDepositMoneyForm";
import { useEffect, useState } from "react";
import { getBalance } from "../util/api";
import RecentTransactions from "../components/RecentTransactions";

export default function TransferPage() {
	const [balance, setBalance] = useState<number>(0);

	useEffect(() => {
		getBalance().then((data) => {
			console.log(data);
			setBalance(data ?? 0);
		});
	}, [balance]);

	return (
		<PageLayout>
			<main className={styles.layout}>
				<div className={styles.balanceWrapper}>
					<Balance balance={balance} setBalance={setBalance} />
				</div>
				<WithdrawDepositMoneyForm
					className={styles.mobileForm}
					onSuccess={(amount, err) => {
						if (err) return;
						setBalance((bal) => {
							return bal + amount;
						});
					}}
				/>
				<SendMoneyForm
					className={styles.mobileForm}
					onSuccess={(amount, err) => {
						if (err) return;
						setBalance((bal) => {
							return bal - amount;
						});
					}}
				/>
				<div className={styles.desktopForms}>
					<WithdrawDepositMoneyForm
						onSuccess={(amount, err) => {
							if (err) return;
							setBalance((bal) => {
								return bal + amount;
							});
						}}
					/>
					<SendMoneyForm
						onSuccess={(amount, err) => {
							if (err) return;
							setBalance((bal) => {
								return bal - amount;
							});
						}}
					/>
				</div>
				<RecentTransactions className={styles.transactions} />
			</main>
		</PageLayout>
	);
}
