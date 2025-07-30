import { config } from '../config/config';

interface LogLevel {
  error: 0;
  warn: 1;
  info: 2;
  debug: 3;
}

const levels: LogLevel = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

const levelNames = {
  0: 'ERROR',
  1: 'WARN',
  2: 'INFO',
  3: 'DEBUG',
};

const currentLevel = levels[config.logging.level as keyof LogLevel] || 2;

class Logger {
  private log(level: number, message: string, meta?: any): void {
    if (level <= currentLevel) {
      const timestamp = new Date().toISOString();
      const levelName = levelNames[level as keyof typeof levelNames];
      const logMessage = `[${timestamp}] ${levelName}: ${message}`;
      
      if (meta) {
        console.log(logMessage, meta);
      } else {
        console.log(logMessage);
      }
    }
  }

  error(message: string, meta?: any): void {
    this.log(0, message, meta);
  }

  warn(message: string, meta?: any): void {
    this.log(1, message, meta);
  }

  info(message: string, meta?: any): void {
    this.log(2, message, meta);
  }

  debug(message: string, meta?: any): void {
    this.log(3, message, meta);
  }
}

const logger = new Logger();
export default logger; 