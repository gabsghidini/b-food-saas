/* User */
import createUserService from "./users/createUser.services";
import loginUserServices from "./sessions/loginUser.services";
import getAllUsersServices from "./users/getAllUsers.services";
import deleteUserServices from "./users/deleteUser.services";
import patchUserServices from "./users/patchUser.services";

/* Dishes */
import createDishesServices from "./dishes/createDishes.services";
import getAllDishesServices from "./dishes/getAllDishes.services";

/* Ingredients */
import createIngredientsServices from "./ingredients/createIngredients.services";
import getAllIngredientsServices from "./ingredients/getAllIngredients.services";

export {
	createUserService,
	loginUserServices,
	getAllUsersServices,
	deleteUserServices,
	patchUserServices,
	createDishesServices,
	getAllDishesServices,
	createIngredientsServices,
	getAllIngredientsServices,
};
