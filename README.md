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
- 🚌 **Bus Management** - Complete bus and document management system
- 📄 **Document Tracking** - Document expiry tracking and alerts
- 🔑 **Basic Authentication** - Secure API access control
- 🌐 **File URL Support** - Store document URLs from Google Drive or other cloud storage

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

   # Push schema to database
   npx prisma db push

   # Seed default data
   npm run prisma:seed
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
- `npm run prisma:seed` - Seed database with default data

## API Endpoints

### User Management (Public)

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

#### POST `/api/users/login`
Authenticate a user.

**Request Body:**
```json
{
  "username": "john_doe",
  "password": "securepassword123"
}
```

### Bus Management (Requires Basic Authentication)

**Authentication:** All bus management endpoints require Basic Authentication.

**Credentials:**
- Username: `qwert`
- Password: `123456`

#### POST `/api/v1/buses`
Create a new bus.

**Headers:**
```
Authorization: Basic cXdlcnQ6MTIzNDU2
```

**Request Body:**
```json
{
  "registrationNo": "KA01AB1234",
  "model": "Tata Starbus",
  "manufacturer": "Tata Motors",
  "yearOfMake": 2020,
  "ownerName": "John Doe"
}
```

#### GET `/api/v1/buses`
List buses with pagination and search.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `search` (optional): Search by registration number, model, manufacturer, or owner name

#### GET `/api/v1/buses/:id`
Get bus details with documents.

#### PUT `/api/v1/buses/:id`
Update bus information.

#### DELETE `/api/v1/buses/:id`
Delete a bus (only if no documents exist).

### Document Types (Requires Basic Authentication)

#### POST `/api/v1/document-types`
Create a new document type.

**Request Body:**
```json
{
  "name": "Insurance",
  "description": "Vehicle insurance certificate"
}
```

#### GET `/api/v1/document-types`
List all document types.

#### PUT `/api/v1/document-types/:id`
Update document type.

#### DELETE `/api/v1/document-types/:id`
Delete document type (only if not in use).

### Bus Documents (Requires Basic Authentication)

#### POST `/api/v1/buses/:busId/documents`
Add a document for a bus using file URL.

**Content-Type:** `application/json`

**Request Body:**
```json
{
  "docTypeId": "doc_type_id_here",
  "documentNumber": "INS123456",
  "issueDate": "2024-01-01T00:00:00.000Z",
  "expiryDate": "2025-12-31T00:00:00.000Z",
  "fileUrl": "https://drive.google.com/file/d/your_file_id/view",
  "remarks": "Insurance document uploaded to Google Drive"
}
```

#### GET `/api/v1/buses/:busId/documents`
List all documents for a bus.

#### GET `/api/v1/documents/:docId`
Get a specific document.

#### PUT `/api/v1/documents/:docId`
Update document metadata (including file URL).

**Request Body:**
```json
{
  "fileUrl": "https://drive.google.com/file/d/new_file_id/view",
  "expiryDate": "2026-12-31T00:00:00.000Z",
  "remarks": "Updated insurance document"
}
```

#### DELETE `/api/v1/documents/:docId`
Delete a document.

### Expiry Helpers (Requires Basic Authentication)

#### GET `/api/v1/documents/expiring`
Get documents expiring within specified days.

**Query Parameters:**
- `withinDays` (optional): Days to check (default: 30)

#### GET `/api/v1/buses/missing-required`
Get buses missing required document types.

**Query Parameters:**
- `types` (optional): Comma-separated list of required document types

### Health Check

#### GET `/health`
Get server health status.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | - |
| `PORT` | Server port | 3000 |
| `NODE_ENV` | Environment (development/production) | development |
| `BCRYPT_ROUNDS` | Password hashing rounds | 12 |
| `ALLOWED_ORIGINS` | CORS allowed origins | http://localhost:3000 |
| `LOG_LEVEL` | Logging level | info |

## Database Schema

The application uses a PostgreSQL database with the following schema:

### Users Table
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

### Buses Table
```sql
CREATE TABLE buses (
  id TEXT PRIMARY KEY,
  registrationNo TEXT UNIQUE NOT NULL,
  model TEXT,
  manufacturer TEXT,
  yearOfMake INTEGER,
  ownerName TEXT,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);
```

### Document Types Table
```sql
CREATE TABLE document_types (
  id TEXT PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);
```

### Bus Documents Table
```sql
CREATE TABLE bus_documents (
  id TEXT PRIMARY KEY,
  busId TEXT NOT NULL REFERENCES buses(id) ON DELETE CASCADE,
  docTypeId TEXT NOT NULL REFERENCES document_types(id) ON DELETE RESTRICT,
  documentNumber TEXT,
  issueDate TIMESTAMP,
  expiryDate TIMESTAMP,
  fileUrl TEXT NOT NULL,
  remarks TEXT,
  uploadedAt TIMESTAMP DEFAULT NOW()
);

CREATE INDEX ON bus_documents(busId);
CREATE INDEX ON bus_documents(docTypeId);
CREATE INDEX ON bus_documents(expiryDate);
```

## Security Features

- **Basic Authentication**: All bus management endpoints require valid credentials
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

## Error Handling

The application includes comprehensive error handling:

- **Validation Errors**: 400 Bad Request with detailed validation messages
- **Authentication Errors**: 401 Unauthorized for invalid credentials
- **Authorization Errors**: 403 Forbidden for invalid permissions
- **Not Found Errors**: 404 Not Found for missing resources
- **Conflict Errors**: 409 Conflict for duplicate resources
- **Server Errors**: 500 Internal Server Error for unexpected issues

## Logging

The application logs:
- All HTTP requests with method, path, IP, and user agent
- Authentication events (login, logout)
- User management events (create, update, delete)
- Bus management events (create, update, delete)
- Document management events (upload, update, delete)
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