import app from "./app";
import AppDataSource from "./data-source";

AppDataSource.initialize()
	.then(() => {
		console.log("Database conectada com sucesso! 🚀");
		app.listen(3000, () => {
			console.log("Servidor executando na porta 3000! 😎");
		});
	})
	.catch((err) => {
		console.log(err);
	});
