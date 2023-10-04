import config from 'config';
import { ExpressServer } from './server';

export async function main() {
  const server = new ExpressServer(config);
  await server.boot();
  await server.start();
}

// Run the server application
main().catch((err) => {
  console.error('Cannot start the server application.', err);
  process.exit(1);
});
