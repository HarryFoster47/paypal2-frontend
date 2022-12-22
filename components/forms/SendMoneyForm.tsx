import { useState } from "react";
import { sendMoney } from "../../util/api";

import styles from "../../styles/components/Forms.module.css";

const SendMoneyForm = (props: {
	className?: string;
	onSuccess: (amount: number, value: String | undefined) => void;
}) => {
	const [amount, setamount] = useState(0);
	const [message, setmessage] = useState("");
	const [recipient, setrecipient] = useState("");

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
					<h2>Send Money</h2>
					<input
						className={styles.input}
						type="text"
						placeholder="Username"
						onChange={(e) => {
							setrecipient(e.target.value);
						}}
					/>
					<input
						className={styles.input}
						type="number"
						placeholder="Amount"
						onChange={(e) => {
							setamount(Number(e.target.value));
						}}
					/>
					<input
						className={styles.input}
						type="text"
						placeholder="Message"
						onChange={(e) => {
							setmessage(e.target.value);
						}}
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							sendMoney(amount, message, recipient).then(
								(msg) => {
									props.onSuccess(amount, msg);
								}
							);
						}}
						className={`${styles.submit} ${styles.green}`}
						type="submit"
					>
						Send
					</button>
				</section>
			</form>
		</section>
	);
};

export default SendMoneyForm;
