import { Response } from "express";

/**
 * 공통 에러 처리 함수
 */
export const handleError = (
  res: Response,
  message: string,
  error: unknown,
  status = 500
): void => {
  if (error instanceof Error) {
    console.error(message, error.stack);
    res.status(status).json({ status: "error", message, error: error.message });
  } else {
    console.error(message, error);
    res.status(status).json({
      status: "error",
      message,
      error: error instanceof Error ? error.message : undefined,
    });
  }
};

/**
 * 간단한 에러 응답 함수
 */
export const sendErrorResponse = (
  res: Response,
  message: string,
  status = 400
): void => {
  res.status(status).json({ status: "error", message });
};
