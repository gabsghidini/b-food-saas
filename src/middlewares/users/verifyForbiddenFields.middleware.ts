import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";

export const verifyForbiddenFieldsMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { isAdm, id, isActive, ...rest } = req.body;

	if (isAdm === undefined && id === undefined && isActive === undefined) {
		return next();
	}

	throw new AppError({ message: "Forbidden fields" }, 401);
};

export default verifyForbiddenFieldsMiddleware;
