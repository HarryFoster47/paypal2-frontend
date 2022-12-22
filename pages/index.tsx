import Articles from "../components/Articles";
import Balance from "../components/Balance";
import PageLayout from "../components/PageLayout";
import RecentTransactions from "../components/RecentTransactions";
import SendAgain from "../components/SendAgain";
import styles from "../styles/pages/Dashboard.module.css";

export default function IndexPage() {
	return (
		<PageLayout>
			<main className={styles.dashboard}>
				<div className={styles.balanceWrapper}>
					<Balance />
				</div>
				<SendAgain />

				<RecentTransactions />

				<Articles />
			</main>
		</PageLayout>
	);
}
