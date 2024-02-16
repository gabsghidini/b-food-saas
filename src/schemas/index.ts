import createUserSchema from "./Users/createUser.schema";
import returnCreatedUserSchema from "./Users/returnCreatedUser.schema";
import loginUserSchema from "./Users/loginUser.schema";
import returnUpdatedUserSchema from "./Users/returnUpdatedUser.schema";
import getUserByIdSchema from "./Users/getUserById.schema";
import listUsersSchema from "./Users/listUsers.schema";

/* Dishes */
import createDishSchema from "./Dishes/dishes.schema";

/* Ingredients */
import createIngredientSchema from "./Ingredients/ingredients.schema";

export {
	createUserSchema,
	returnCreatedUserSchema,
	loginUserSchema,
	returnUpdatedUserSchema,
	getUserByIdSchema,
	listUsersSchema,
	createDishSchema,
	createIngredientSchema,
};
