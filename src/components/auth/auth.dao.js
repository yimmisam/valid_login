import { User } from "./auth.model.js";

export const registerUserDao = async (data) => {
	const user = new User(data);
	await user.save();
	return user;
};

export const getByLoginlUserDao = async (email) => {
	const user = await User.findOne({ email: email });
	return user;
};