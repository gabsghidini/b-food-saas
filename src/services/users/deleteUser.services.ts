import AppDataSource from "../../data-source";
import { User } from "../../entities/users";
import { AppError } from "../../errors";

const deleteUserServices = async (id: string): Promise<object> => {
	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({ id: id });

	if (user.isActive === false) {
		throw new AppError({ message: "User already deleted" }, 400);
	}

	user.isActive = false;

	await userRepository.save(user);

	return {};
};

export default deleteUserServices;
