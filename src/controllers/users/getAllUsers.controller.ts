import { Request, Response } from "express";
import { getAllUsersServices } from "../../services";
import * as i from "../../interfaces/users";

const getAllUsersController = async (req: Request, res: Response) => {
	const users: i.ReturnUser[] = await getAllUsersServices();

	return res.status(200).json(users);
};

export default getAllUsersController;
