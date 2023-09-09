import { urlShortener } from "./redirect.model.js";

export const getUrlRedirectDao = async (url) => {
	const result = await urlShortener.findOne({shortUrl:url,status:"active"}).lean();
	return result;
};
