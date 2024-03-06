import { env } from "./config/env";
import { killServer, server } from "./config/server";
import { HOST, PORT, SIGNALS } from "./utils/constant";

const main = async () => {
	const app = await server();

	await app.listen({
		port: env.PORT || PORT,
		host: env.HOST || HOST,
	});

	for (const signals of SIGNALS) {
		process.on(signals, () => {
			killServer(app);
		});
	}
};

main();
