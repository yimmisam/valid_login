export const error404handler = (req, res, next) => {
  res.status(404).json({ message: `Not Found - ${req.originalUrl}` });
};

export const errorGenericHandler = (err, req, res, next) => {
  let errorCode = err.code;
  let errorStatus = err.statusCode || 500;
  let errorMessage = err.message || "Internal server error";

  res.status(errorStatus).json({
    status: errorStatus,
    code: errorCode,
    message: errorMessage,
  });
};

export const errorcHandler = (err, req, res, next) => {
  res.status(500).send("Internal Server Error");
};
