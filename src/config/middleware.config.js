import express from 'express';
import cors from 'cors';

export const configureMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};