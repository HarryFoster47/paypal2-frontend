import axios, { AxiosError } from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080/api/v1",
});

export const login = async (username: String, password: String) => {
  try {
    const response = await instance.post("/auth/login", { username, password });
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
) => {
  try {
    const response = await instance.post("/registration/register", {
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

export const isloggedin = async () => {
  try {
    const response = await instance.get("/auth");
    return;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const response = await instance.post("/auth/logout");
    return;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error);
  }
};

export const getuser = async () => {
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
};

export const getcontacts = async () => {
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
};

export const addcontact = async (username: String) => {
  try {
    const response = await instance.post("/user/contacts/" + username);
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

export const deletecontact = async (username: String) => {
  try {
    const response = await instance.delete("/user/contacts/" + username);
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

export const getaccount = async () => {
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
};

export const getbalance = async () => {
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
};

export const withdraw = async (amount: Number) => {
  try {
    const response = await instance.post("/account/withdraw", { amount });
    return response.data;
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

export const deposit = async (amount: Number) => {
  try {
    const response = await instance.post("/account/deposit", { amount });
    return response.data;
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

export const gettransactions = async () => {
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
};

export const sendMoney = async (
  amount: Number,
  message: String,
  recipient: String
) => {
  try {
    const response = await instance.post("/account/transfer", {
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
