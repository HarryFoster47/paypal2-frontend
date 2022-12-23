import PageLayout from "../components/PageLayout";
import RecentTransactions from "../components/RecentTransactions";

import styles from "../styles/pages/History.module.css";

export default function HistoryPage() {
	return (
		<PageLayout>
			<main className={styles.layout}>
				<RecentTransactions />
			</main>
		</PageLayout>
	);
}
