import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users";
import { AppError } from "../../errors";

const verifyIfLoginExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { email } = req.body;
	if (!email) {
		throw new AppError({ message: "Missing email" }, 401);
	}

	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({
		email: email,
	});

	if (!user) {
		throw new AppError({ message: "User doesn't exists" }, 403);
	}

	if (!user.isActive) {
		throw new AppError({ message: "User doesn't exists" }, 400);
	}

	return next();
};

export default verifyIfLoginExistsMiddleware;
