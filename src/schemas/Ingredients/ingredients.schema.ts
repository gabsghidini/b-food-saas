import * as yup from "yup";

const createIngredientSchema = yup.object().shape({
	id: yup.number(),
	name: yup.string().required(),
	price: yup.number().required(),
	quantity: yup.number().required(),
	measurementUnit: yup.string().required(),
	dish: yup.string(),
});

export default createIngredientSchema;
