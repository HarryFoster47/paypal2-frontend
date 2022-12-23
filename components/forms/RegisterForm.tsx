import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { register } from "../../util/api";

import styles from "../../styles/components/Forms.module.css";

const RegisterForm = () => {
	const [username, setusername] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	return (
		<section className={styles.center}>
			<form className={styles.form}>
				<h1>Register</h1>
				<section className={styles.inputs}>
					<input
						className={styles.input}
						type="text"
						name="username"
						placeholder="username"
						onChange={(e) => {
							setusername(e.target.value);
						}}
					/>
					<input
						className={styles.input}
						type="email"
						name="email"
						placeholder="name@example.com"
						onChange={(e) => {
							setemail(e.target.value);
						}}
					/>
					<input
						className={styles.input}
						type="password"
						name="password"
						placeholder="password"
						onChange={(e) => {
							setpassword(e.target.value);
						}}
					/>
				</section>
				<Link href="/login">
					<p className={styles.noaccount}>
						Already have an account?
						<br />
						Login here
					</p>
				</Link>
				<button
					onClick={function (e) {
						e.preventDefault();
						register(email, username, password).then(() => {
							Router.push("/login");
						});
					}}
					className={styles.submit}
					type="submit"
				>
					Submit
				</button>
			</form>
		</section>
	);
};

export default RegisterForm;
