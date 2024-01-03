import { Request, Response } from "express";
import { patchUserServices } from "../../services";
import * as i from "../../interfaces/users";

const patchUserController = async (req: Request, res: Response) => {
	const id = req.params.id;
	const payload = req.body;

	const data: i.ReturnUser = await patchUserServices(id, payload);

	return res.status(200).json(data);
};

export default patchUserController;
