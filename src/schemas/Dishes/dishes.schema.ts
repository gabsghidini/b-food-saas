import * as yup from "yup";

const createDishSchema = yup
	.object()
	.shape({
		name: yup.string().required(),
		price: yup.number().required(),
		ingredients: yup.array().of(yup.string()).required(),
	})
	.noUnknown(true)
	.strict();

export default createDishSchema;
