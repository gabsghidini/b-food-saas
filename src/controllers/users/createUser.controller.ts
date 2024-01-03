import { createUserService } from "../../services";
import { Request, Response } from "express";
import * as i from "../../interfaces/users";

const createUserController = async (req: Request, res: Response) => {
	const user: i.ReturnUser = await createUserService(req.body);

	return res.status(201).json(user);
};

export default createUserController;
