import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users";
import { AppError } from "../../errors";

const verifyIfUserAlreadyExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { email } = req.body;
	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({
		email: email,
	});

	if (user) {
		throw new AppError({ message: "User already exists" }, 409);
	}

	return next();
};

export default verifyIfUserAlreadyExistsMiddleware;
