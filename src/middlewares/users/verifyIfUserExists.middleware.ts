import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users";
import { AppError } from "../../errors";

const verifyIfUserExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;
	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({
		id: id,
	});

	if (!user) {
		throw new AppError({ message: "User doesn't exists" }, 404);
	}

	return next();
};

export default verifyIfUserExistsMiddleware;
