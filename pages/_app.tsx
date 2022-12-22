import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Sendo</title>
				<meta name="description" content="A simple way to pay" />
				<link rel="icon" href="/favico.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
