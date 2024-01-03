import AppDataSource from "../../data-source";
import { User } from "../../entities/users";
import { listUsersSchema } from "../../schemas";
import * as i from "../../interfaces/users";

const getAllUsersServices = async (): Promise<i.ReturnUser[]> => {
	const userRepository = AppDataSource.getRepository(User);
	const users = await userRepository.find();

	const returnedList = await listUsersSchema.validate(users, {
		stripUnknown: true,
	});

	return returnedList;
};

export default getAllUsersServices;
