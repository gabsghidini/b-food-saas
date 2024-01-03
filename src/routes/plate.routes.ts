import { Router } from "express";
import {} from "../controllers";
import {
	validateSchemaMiddleware,
	verifyTokenMiddleware,
	verifyForbiddenFieldsMiddleware,
} from "../middlewares";
import { createUserSchema } from "../schemas";

const plateRoutes = Router();

plateRoutes.get("", verifyTokenMiddleware, () => console.log("proc Get"));

plateRoutes.post("", validateSchemaMiddleware(createUserSchema), () =>
	console.log("proc Post")
);

plateRoutes.delete("/:id", verifyTokenMiddleware, () =>
	console.log("proc Delete")
);

plateRoutes.patch(
	"/:id",
	verifyTokenMiddleware,
	verifyForbiddenFieldsMiddleware,
	() => console.log("proc Patch")
);

export default plateRoutes;
