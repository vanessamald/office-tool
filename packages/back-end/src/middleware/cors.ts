import { Request, Response, NextFunction } from 'express';

export default function CorsStar(req: Request, res: Response, next: NextFunction) {
  //res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
}
