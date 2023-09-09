
import {
	getUrlRedirectDao,
} from "./redirect.dao.js";
import {
	UrlNotFoundError,
} from "../errors.js";

export const getUrlRedirect = async (url) => {
	const result = await getUrlRedirectDao(url);
	if(!result){
		throw UrlNotFoundError;
	}
	return result?.destinationUrl;
};