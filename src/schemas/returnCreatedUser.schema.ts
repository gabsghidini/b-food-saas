import * as yup from "yup";

const returnCreatedUserSchema = yup.object().shape({
	id: yup.string(),
	name: yup.string(),
	email: yup.string(),
	isAdm: yup.boolean(),
	isActive: yup.boolean(),
	createdAt: yup.date(),
	updatedAt: yup.date(),
});

export default returnCreatedUserSchema;
