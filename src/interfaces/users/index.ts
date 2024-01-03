export interface UserRequest {
	name: string;
	email: string;
	password: string;
	isAdm: boolean;
}

export interface User {
	id: string;
	name: string;
	email: string;
	isAdm: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface UserLogin {
	email: string;
	password: string;
}

export interface UserUpdate {
	name?: string;
	email?: string;
	password?: string;
}

export interface NewUser {
	name: string;
	email: string;
	password: string;
	isAdm: boolean;
	isActive: boolean;
}

export interface ReturnUser {
	updatedAt: Date;
	createdAt: Date;
	isActive: boolean;
	isAdm: boolean;
	email: string;
	name: string;
	id: string;
}
