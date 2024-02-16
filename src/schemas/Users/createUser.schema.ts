import * as yup from "yup";

export const createUserSchema = yup
	.object()
	.shape({
		name: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().required(),
		isAdm: yup.boolean().required(),
		isActive: yup.boolean(),
	})
	.noUnknown(true)
	.strict();

export default createUserSchema;
