import AppDataSource from "../../data-source";
import { User } from "../../entities/users";
import * as i from "../../interfaces/sessions";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { AppError } from "../../errors";
import "dotenv/config";

const loginUserServices = async (payload: i.UserLogin): Promise<i.Token> => {
	const { email, password } = payload;
	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({
		email: email,
	});

	const doesPasswordMatch = await compare(password, user.password);

	if (!doesPasswordMatch) {
		throw new AppError({ message: "Incorrect email or password" }, 403);
	}

	const token = jwt.sign({ isAdm: user.isAdm }, process.env.SECRET_KEY, {
		expiresIn: "24h",
		subject: user.id,
	});

	return { token: token };
};

export default loginUserServices;
