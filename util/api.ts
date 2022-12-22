import axios, { AxiosError } from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "http://localhost:8080/api/v1",
});

export enum UserRole {
	"USER",
	"ADMIN",
}

export interface User {
	id: number;
	username: string;
	email: string;
	userRole: UserRole;
	account?: Account;
	contacts?: IContact[];
	contactsOf?: IContact[];
}

export interface UserWithAccount extends User {
	account: Account;
}

export interface IContact {
	id: number;
	contact?: User;
}

export interface Contact extends IContact {
	contact: User;
}

export interface Account {
	id: number;
	balance: number;
	incomingTransactions?: Transaction[];
	outgoingTransactions?: Transaction[];
}

export interface AccountWithTransactions extends Account {
	incomingTransactions: Transaction[];
	outgoingTransactions: Transaction[];
}

export enum TransactionType {
	"WITHDRAW",
	"DEPOSIT",
	"TRANSFER",
}

export interface Transaction {
	id: number;
	amount: number;
	transferredAt: string;
	recipient?: Account;
	sender?: Account;
	type: TransactionType;
	message: string | null;
}

export const login = async (
	username: String,
	password: String
): Promise<String | undefined> => {
	try {
		await instance.post("/auth/login", {
			username,
			password,
		});
		return;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 401:
				return "Invalid username or password";
			case 403:
				return "User locked";
			case 409:
				return "User disabled";
		}
	}
};

export const register = async (
	email: String,
	username: String,
	password: String
): Promise<String | undefined> => {
	try {
		await instance.post("/registration/register", {
			username,
			password,
			email,
		});
		return;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 400:
				return "Email is not a valid email";
			case 409:
				return "Username already taken";
		}
	}
};

export const isLoggedIn = async (): Promise<boolean> => {
	try {
		const response = await instance.get("/auth");
		return response.data;
	} catch (e) {
		const error = e as AxiosError;
		console.log(error);
	}
	return false;
};

export const logout = async () => {
	try {
		await instance.post("/auth/logout");
		return;
	} catch (e) {
		const error = e as AxiosError;
		console.log(error);
	}
};

export const getUser = async (): Promise<UserWithAccount | null> => {
	try {
		const response = await instance.get("/user");
		return response.data;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 403:
				console.log("Not logged in");
				break;
		}
	}
	return null;
};

export const getContacts = async (): Promise<Contact[] | null> => {
	try {
		const response = await instance.get("/user/contacts");
		return response.data;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 403:
				console.log("Not logged in");
				break;
		}
	}
	return null;
};

export const addContact = async (
	username: String
): Promise<String | undefined> => {
	try {
		await instance.post("/user/contacts/" + username);
		return;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 403:
				console.log("Not logged in");
				break;
			case 404:
				return "User not found";
		}
	}
};

export const deleteContact = async (
	username: String
): Promise<String | undefined> => {
	try {
		await instance.delete("/user/contacts/" + username);
		return;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 403:
				console.log("Not logged in");
				break;
			case 404:
				return "User not found";
		}
	}
};

export const getAccount = async (): Promise<Account | null> => {
	try {
		const response = await instance.get("/account");
		return response.data;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 403:
				console.log("Not logged in");
				break;
		}
	}
	return null;
};

export const getBalance = async (): Promise<number | null> => {
	try {
		const response = await instance.get("/account/balance");
		return response.data;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 403:
				console.log("Not logged in");
				break;
		}
	}
	return null;
};

export const withdraw = async (amount: Number): Promise<String | undefined> => {
	try {
		await instance.post("/account/withdraw", { amount });
		return;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 403:
				console.log("Not logged in");
				break;
			case 400:
				return error.message;
		}
	}
};

export const deposit = async (amount: Number): Promise<String | undefined> => {
	try {
		await instance.post("/account/deposit", { amount });
		return;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 403:
				console.log("Not logged in");
				break;
			case 400:
				return "Invalid amount";
		}
	}
};

export const getTransactions = async (): Promise<
	Transaction[] | String | null
> => {
	try {
		const response = await instance.get("/account/transactions");
		return response.data;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 403:
				console.log("Not logged in");
				break;
			case 400:
				return "Invalid limit";
		}
	}
	return null;
};

export const sendMoney = async (
	amount: Number,
	message: String,
	recipient: String
): Promise<String | undefined> => {
	try {
		await instance.post("/account/transfer", {
			amount,
			message,
			recipient,
		});
		return;
	} catch (e) {
		const error = e as AxiosError;
		switch (error.status) {
			case 403:
				console.log("Not logged in");
				break;
			case 400:
				return "Invalid amount";
		}
	}
};
