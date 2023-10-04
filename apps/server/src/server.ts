import { startServer } from '@coko/server';
import { IConfig } from 'config';
import { once } from 'events';
import express from 'express';
import http from 'http';

export class ExpressServer {
  public readonly app: express.Application;
  public readonly config: IConfig;

  private server?: http.Server;

  constructor(config: IConfig) {
    console.info('Initializing with config:', config.util.toObject());

    this.config = config;
    this.app = express();

    // Serve static assets
    // this.app.use('/assets', express.static(path.join(__dirname, 'assets')));
  }

  public async boot() {
    // initial boot-up sequence here...
  }

  public async start() {
    this.server = await startServer(this.app);
    await once(this.server, 'listening');
  }

  // For testing purposes
  public async stop() {
    if (!this.server) return;

    this.server.close();
    await once(this.server, 'close');
    this.server = undefined;
  }
}
