// dotenv
import dotenv from 'dotenv';
dotenv.config();

import customerRoutes from './routes/customerRoutes';

import express from 'express';
import cors from 'cors';
import caretakerRepository from './repository/CaretakerRepository';

// Config do express
class App {
  constructor() {
    this.app = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    caretakerRepository.init();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/v1/customer', customerRoutes);
  }
}

export default new App().app;
