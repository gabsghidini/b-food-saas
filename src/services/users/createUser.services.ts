import AppDataSource from "../../data-source";
import * as i from "../../interfaces/users";
import { User } from "../../entities/users";
import { returnCreatedUserSchema } from "../../schemas";

const createUserService = async (payload: i.NewUser): Promise<i.ReturnUser> => {
	const userRepo = AppDataSource.getRepository(User);

	const user = userRepo.create(payload);

	await userRepo.save(user);

	const returnUser = await returnCreatedUserSchema.validate(user, {
		stripUnknown: true,
	});

	return returnUser;
};

export default createUserService;
