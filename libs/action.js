"use server";

import { signIn, signOut } from "./auth";
import { connectToDb } from "./dbConfig";
import { User } from "./model";
import bcrypt from "bcryptjs";

export const handleGitHubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (prevState, formData) => {
  const { username, email, password, conform_password, img } =
    Object.fromEntries(formData);

  if (password !== conform_password) {
    return { error: "Password doesn't match!" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "User already exist!" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err
  }
};
