import { env } from "./config/env";
import { killServer, server } from "./config/server";
import { HOST, PORT, SIGNALS } from "./utils/constant";

const main = async () => {
	const app = await server();
	try {
		await app.listen({
			port: env.PORT || PORT,
			host: env.HOST || HOST,
		});

		for (const signals of SIGNALS) {
			process.on(signals, () => {
				killServer(app);
			});
		}
	} catch (err) {
		app.log.error(err);
		killServer(app);
		process.exit(1);
	}
};

main();
