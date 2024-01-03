import { Request, Response } from "express";
import { loginUserServices } from "../../services";
import * as i from "../../interfaces/sessions";

const loginUserController = async (req: Request, res: Response) => {
	const data: i.Token = await loginUserServices(req.body);

	return res.status(200).json(data);
};

export default loginUserController;
