import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
	statusCode: number;

	constructor(message, statusCode = 400) {
		super();
		this.message = message;
		this.statusCode = statusCode;
	}
}

const errorHandler = (
	error: Error,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).json(error.message);
	}

	console.log(error);

	return response.status(500).json({ message: "Internal Server Error" });
};

export default errorHandler;
