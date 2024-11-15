import { Response } from "express";

export const sendErrorResponse = (
  res: Response,
  message: string,
  status = 400
) => {
  res.status(status).json({ status: "error", message });
};

export const handleError = (
  res: Response,
  message: string,
  error: unknown,
  status = 500
) => {
  if (error instanceof Error) {
    console.error(message, error.stack);
    res.status(status).json({ status: "error", message, error: error.message });
  } else {
    console.error(message, error);
    res.status(status).json({ status: "error", message });
  }
};
