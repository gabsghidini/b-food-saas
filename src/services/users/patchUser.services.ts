import AppDataSource from "../../data-source";
import { User } from "../../entities/users";
import { returnUpdatedUserSchema } from "../../schemas";
import * as i from "../../interfaces/users";

const patchUserServices = async (
	id: string,
	payload
): Promise<i.ReturnUser> => {
	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({ id: id });

	const newUser = userRepository.create({
		...user,
		...payload,
	});

	await userRepository.save(newUser);

	const returnedUser = await returnUpdatedUserSchema.validate(newUser, {
		stripUnknown: true,
	});

	return returnedUser;
};

export default patchUserServices;
