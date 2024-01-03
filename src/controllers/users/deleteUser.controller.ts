import { Request, Response } from "express";
import { deleteUserServices } from "../../services";

const deleteUserController = async (req: Request, res: Response) => {
	const { id } = req.params;

	const data: object = await deleteUserServices(id);

	return res.status(204).json(data);
};

export default deleteUserController;
