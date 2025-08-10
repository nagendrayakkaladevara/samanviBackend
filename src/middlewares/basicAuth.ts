import { Request, Response, NextFunction } from 'express';

export const validateBasicAuth = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    res.status(401).json({ message: 'Authorization header is required' });
    return;
  }

  if (!authHeader.startsWith('Basic ')) {
    res.status(401).json({ message: 'Basic authentication is required' });
    return;
  }

  // Extract credentials from Authorization header
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  // Check credentials (username: qwert, password: 123456)
  if (username === 'qwert' && password === '123456') {
    next();
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
