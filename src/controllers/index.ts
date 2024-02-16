/* User */
import createUserController from "./users/createUser.controller";
import loginUserController from "./sessions/loginUser.controller";
import getAllUsersController from "./users/getAllUsers.controller";
import deleteUserController from "./users/deleteUser.controller";
import patchUserController from "./users/patchUser.controller";

/* Dishes */
import createDishesController from "./dishes/createDishes.controller";
import getAllDishesController from "./dishes/getAllDishes.controller";

/* Ingredients */
import createIngredientController from "./ingredients/createIngredients.controller";
import getAllIngredientsController from "./ingredients/getAllIngredients.controller";

export {
	createUserController,
	loginUserController,
	getAllUsersController,
	deleteUserController,
	patchUserController,
	createDishesController,
	getAllDishesController,
	createIngredientController,
	getAllIngredientsController,
};
