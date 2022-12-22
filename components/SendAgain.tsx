import styles from "../styles/components/SendAgain.module.css";

const SendAgain = () => {
	const names = ["Esgrid", "Mum", "George", "Bobby", "Ana"];

	return (
		<div className={styles.section}>
			<h3>Send Again</h3>
			<div className={styles.contactsWrapper}>
				{names.map((name) => (
					<div className={styles.contact}>
						<img src="./Person.png" />
						<p className={styles.name}>{name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SendAgain;
