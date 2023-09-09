
import {
	getUrlRedirectDao,
} from "./redirect.dao.js";
import {
	validateGetRedirect,
} from "./redirect.validation.js";

export const getUrlRedirect = async (url) => {
	const verified = validateGetRedirect({ url })
	if(verified.valid==false){
		return "https://winwinafi.com";
	}
	const result = await getUrlRedirectDao(url);
	if(!result){
		return "https://winwinafi.com";
	}
	return result?.destinationUrl;
};