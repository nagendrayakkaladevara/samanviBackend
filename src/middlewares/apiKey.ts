import { Request, Response, NextFunction } from 'express';
import { config } from '../config/config';

export const validateApiKey = (req: Request, res: Response, next: NextFunction): void => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey) {
    res.status(401).json({ message: 'API key is required' });
    return;
  }

  if (apiKey !== config.adminApiKey) {
    res.status(403).json({ message: 'Invalid API key' });
    return;
  }

  next();
};
