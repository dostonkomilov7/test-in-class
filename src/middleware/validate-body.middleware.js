export const ValidationMiddleware = (schema, target = "body") => {

  const ALLOWED_TARGETS = ["body", "query", "params"];

  if (!ALLOWED_TARGETS.includes(target)) {
    throw new Error("Validation target must be one of: body, query or params");
  }

  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).send({
        success: false,
        error: error?.details || error,
      });
    }

    req[target] = value;
    next();
  };
};


