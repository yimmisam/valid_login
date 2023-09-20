if (process.env.NODE_ENV != "production") {
	const dotenv = await import("dotenv");
	dotenv.config();
}

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;
export const APP_SECRET_ACCESS = process.env.APP_SECRET_ACCESS;
export const APP_SECRET_ACCESS_TIME = process.env.APP_SECRET_ACCESS_TIME;