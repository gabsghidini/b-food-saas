import * as yup from "yup";

const createAddressSchema = yup.object().shape({
	id: yup.string().max(32),
	district: yup.string().required(),
	zipCode: yup
		.string()
		.max(8, "Zip code can't be longer than 8 characters")
		.required(),
	number: yup.string().required(),
	city: yup.string().required(),
	state: yup
		.string()
		.max(2, "State can't be longer than 2 characters")
		.required(),
});

export default createAddressSchema;
