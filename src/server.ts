import app from "./app";
import AppDataSource from "./data-source";

AppDataSource.initialize()
	.then(() => {
		console.log("Database conectada com sucesso! 🚀");
		app.listen(666, () => {
			console.log("Servidor executando na porta 666! 👿");
		});
	})
	.catch((err) => {
		console.log(err);
	});
