# Samanvi Backend

A production-ready Node.js backend built with Express, TypeScript, and Prisma.

## Features

- 🔐 **Secure Authentication** - Password hashing with bcrypt
- 🛡️ **Security** - Helmet, CORS, rate limiting, and input validation
- 📝 **Logging** - Comprehensive logging system
- 🗄️ **Database** - PostgreSQL with Prisma ORM
- 🔄 **Graceful Shutdown** - Proper cleanup on server shutdown
- 🏥 **Health Checks** - Built-in health monitoring endpoint
- 📊 **Error Handling** - Comprehensive error handling and validation

## Prerequisites

- Node.js 18+ 
- PostgreSQL 12+
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd samanviBackend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/samanvibackend?schema=public"
   PORT=3000
   NODE_ENV=development
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run prisma:generate
   
   # Run database migrations
   npm run prisma:migrate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm start` - Start production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio

## API Endpoints

### User Management

#### POST `/api/users`
Create a new user account.

**Request Body:**
```json
{
  "username": "john_doe",
  "password": "securepassword123",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

#### POST `/api/users/login`
Authenticate a user.

**Request Body:**
```json
{
  "username": "john_doe",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### GET `/api/users`
Get all active users.

#### GET `/api/users/:id`
Get a specific user by ID.

#### PUT `/api/users/:id`
Update a user's information.

**Request Body:**
```json
{
  "username": "new_username",
  "email": "newemail@example.com",
  "password": "newpassword123"
}
```

#### DELETE `/api/users/:id`
Soft delete a user (sets isActive to false).

### Health Check

#### GET `/health`
Get server health status.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456,
  "environment": "development"
}
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | - |
| `PORT` | Server port | 3000 |
| `NODE_ENV` | Environment (development/production) | development |
| `BCRYPT_ROUNDS` | Password hashing rounds | 12 |
| `ALLOWED_ORIGINS` | CORS allowed origins | http://localhost:3000 |
| `LOG_LEVEL` | Logging level | info |

## Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **Rate Limiting**: Prevents abuse with configurable limits
- **CORS Protection**: Configurable cross-origin resource sharing
- **Helmet**: Security headers for Express
- **Input Validation**: Zod schema validation for all inputs
- **SQL Injection Protection**: Prisma ORM prevents SQL injection

## Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set production environment variables**
   ```env
   NODE_ENV=production
   DATABASE_URL=<production-database-url>
   ```

3. **Start the production server**
   ```bash
   npm start
   ```

## Database Schema

The application uses a PostgreSQL database with the following schema:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) UNIQUE,
  isActive BOOLEAN DEFAULT true,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);
```

## Error Handling

The application includes comprehensive error handling:

- **Validation Errors**: 400 Bad Request with detailed validation messages
- **Authentication Errors**: 401 Unauthorized for invalid credentials
- **Not Found Errors**: 404 Not Found for missing resources
- **Conflict Errors**: 409 Conflict for duplicate resources
- **Server Errors**: 500 Internal Server Error for unexpected issues

## Logging

The application logs:
- All HTTP requests with method, path, IP, and user agent
- Authentication events (login, logout)
- User management events (create, update, delete)
- Errors with stack traces
- Server startup and shutdown events

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

ISC 