import { UserLogin, UserRequest } from "../../interfaces/users";

export const mockedUser: UserRequest = {
	name: "Eevee",
	email: "eevee@mail.com",
	isAdm: false,
	password: "Eevee123@",
};

export const mockedAdmin: UserRequest = {
	name: "Gabs",
	email: "gabs@mail.com",
	isAdm: true,
	password: "Eevee123@",
};

export const mockedUserLogin: UserLogin = {
	email: "eevee@mail.com",
	password: "Eevee123@",
};

export const mockedAdminLogin: UserLogin = {
	email: "gabs@mail.com",
	password: "Eevee123@",
};

export const mockedToBeInactive: UserRequest = {
	name: "Inactive",
	email: "tobenactive@mail.com",
	isAdm: false,
	password: "Inactive123@",
};

export const mockedInactiveLogin: UserLogin = {
	email: "tobenactive@mail.com",
	password: "Inactive123@",
};
