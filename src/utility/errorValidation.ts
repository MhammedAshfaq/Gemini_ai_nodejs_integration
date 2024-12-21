import { Request, Response, NextFunction } from "express";
import Joi from "joi";

// Validation middleware
const validate = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: "Validation failed",
        details: error.details,
      });
    }

    // If validation passes, proceed to the next middleware/controller
    next();
  };
};

export default validate;
