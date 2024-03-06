import fastify from "fastify";

export async function server() {
	// build server to start the application
	const app = fastify({
		logger: true,
	});

	return app;
}

export async function killServer(app: Awaited<ReturnType<typeof server>>) {
	await app.close();
}
