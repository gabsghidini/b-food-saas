import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";

const verifyUserAdminMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const isAdm = req.user.isAdm;

	if (!isAdm) {
		throw new AppError({ message: "Unauthorized" }, 403);
	}

	return next();
};

export default verifyUserAdminMiddleware;
