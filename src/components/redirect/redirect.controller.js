import { getUrlRedirect } from "./redirect.service.js";

export const getUrlRedirectHandler = async (req, res, next) => {
  try {
    const url = req.params.url;
    const getUrl = await getUrlRedirect(url);
    res.status(200).json({ data: getUrl });
  } catch (err) {
    next(err);
  }
};
