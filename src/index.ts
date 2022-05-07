import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import bodyParser from 'body-parser';
import cors from 'cors';
import "dotenv/config"
import { router } from './routes';
import 'reflect-metadata';
import { AppError } from './errors/AppError';
import { AppDataSource } from './db/data-source';

const app = express()

app.use(bodyParser.json());

app.use(cors());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

AppDataSource.initialize().then(() => {
  console.log("MongoDB is working")
}).catch(error => console.log(error))

app.listen(3000, () => console.log("Server is running"));