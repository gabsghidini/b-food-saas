import { Request, Response, NextFunction } from "express";

const validateSchemaMiddleware =
	(serializer) => async (req: Request, res: Response, next: NextFunction) => {
		try {
			const validated = await serializer.validate(req.body, {
				stripUnknown: true,
				abortEarly: false,
			});

			req.validated = validated;

			return next();
		} catch (error) {
			console.log(error);
			return res.status(400).json({ message: error.errors });
		}
	};

export default validateSchemaMiddleware;
