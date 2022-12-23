import { useState, useEffect } from "react";
import Router from "next/router";
import { getContacts, addContact, deleteContact, Contact } from "../util/api";

import styles from "../styles/components/Contacts.module.css";

const Contacts = () => {
	const [contact, setContact] = useState("");
	const [contactList, setContactList] = useState<Contact[]>([]);

	const updateContacts = () => {
		getContacts().then((data) => {
			if (!data) return;
			setContactList(data);
		});
	};

	useEffect(() => {
		updateContacts();
	});

	return (
		<div className={styles.contactSection}>
			<div className={styles.addccard}>
				<h3>Add a Contact</h3>
				<div className={styles.inputsWrapper}>
					<input
						className={styles.input}
						type="username"
						placeholder=" Username"
						onChange={(e) => setContact(e.target.value)}
					/>

					<button
						onClick={(e) => {
							addContact(contact).then(() => {
								updateContacts();
							});
						}}
						className={styles.submit}
						type="submit"
					>
						Add Contact
					</button>
				</div>
			</div>
			<div className={styles.ccard}>
				<h3>Your Contacts</h3>
				<div className={styles.contactList}></div>
				{contactList.map((obj) => {
					return (
						<div key={obj.id} className={styles.cccard}>
							<div className={styles.info}>
								<img
									className={styles.icon}
									src="./Person.png"
								/>
								<h3>{obj.contact?.username}</h3>
							</div>
							<div className={styles.buttonsWrapper}>
								<div key={Number(obj.id)}>
									<button
										className={styles.csendbutton}
										type="submit"
										onClick={() => {
											Router.push("/transfer");
										}}
									>
										Send
									</button>
									&#160;
									<button
										onClick={(e) => {
											deleteContact(
												obj.contact?.username
											).then(() => {
												setContactList((list) => {
													return (
														list as Contact[]
													).filter(
														(c) => c.id !== obj.id
													) as never[];
												});
											});
										}}
										className={styles.cdelbutton}
										type="submit"
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Contacts;
