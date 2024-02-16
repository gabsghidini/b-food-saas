import * as yup from "yup";

const getUserByIdSchema = yup.object().shape({
	id: yup.string(),
	name: yup.string(),
	email: yup.string().email(),
	isAdm: yup.boolean(),
	isActive: yup.boolean(),
	createdAt: yup.date(),
	updatedAt: yup.date(),
});

export default getUserByIdSchema;
