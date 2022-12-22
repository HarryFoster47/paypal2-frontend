import { useState } from "react";
import { withdraw, deposit } from "../../util/api";

import styles from "../../styles/components/Forms.module.css";

const WithdrawDepositMoneyForm = (props: {
	className?: string;
	onSuccess: (amount: number, value: String | undefined) => void;
}) => {
	const [amount, setamount] = useState(0);

	return (
		<section
			className={
				props.className
					? `${styles.center} ${props.className}`
					: styles.center
			}
		>
			<form className={styles.form}>
				<section className={styles.inputs}>
					<h2>Withdraw/Deposit</h2>
					<input
						className={styles.input}
						type="number"
						placeholder="Amount"
						onChange={(e) => {
							setamount(Number(e.target.value));
						}}
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							withdraw(amount).then((msg) => {
								props.onSuccess(-amount, msg);
							});
						}}
						className={`${styles.submit} ${styles.orange}`}
						type="submit"
					>
						Withdraw
					</button>
					<button
						onClick={(e) => {
							e.preventDefault();
							deposit(amount).then((msg) => {
								props.onSuccess(amount, msg);
							});
						}}
						className={`${styles.submit} ${styles.green}`}
						type="submit"
					>
						Deposit
					</button>
				</section>
			</form>
		</section>
	);
};

export default WithdrawDepositMoneyForm;
