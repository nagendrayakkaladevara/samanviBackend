# Postman Collections

This folder contains Postman collections for testing the Samanvi Backend API.

## Collections Available

### V2_User_API.postman_collection.json
Complete collection for V2 User Management API including login with device management.

## How to Import

1. Open Postman
2. Click **Import** button (top left)
3. Select **File** tab
4. Choose `V2_User_API.postman_collection.json`
5. Click **Import**

## Configuration

### Environment Variables

The collection uses a variable `base_url` which defaults to `http://localhost:3000`.

To change it:
1. Click on the collection name
2. Go to **Variables** tab
3. Update `base_url` value
4. Click **Save**

### Authentication

The collection is pre-configured with Basic Authentication:
- **Username**: `qwert`
- **Password**: `123456`

This is set at the collection level, so all requests will use it automatically.

## API Endpoints Included

### User Management
- **POST** `/api/v2/users` - Create a new user (only `username` and `password` required)
- **GET** `/api/v2/users` - Get all users (with pagination, search, filtering)
- **GET** `/api/v2/users/:id` - Get user by ID
- **PUT** `/api/v2/users/:id` - Update user
- **DELETE** `/api/v2/users/:id` - Delete user

**Note**: When creating a user, only `username` and `password` are required. `name` and `description` are optional. `status` defaults to `'active'`.

### Login
- **POST** `/api/v2/users/login` - User login with device management
  - First Time Login (binds deviceId)
  - Same Device Login (success)
  - Different Device Login (should fail)
  - Blocked User Login (should fail)
  - Invalid Credentials (should fail)

## Login API Logic

1. **Validates** username and password
2. **Checks** if `user.status === 'blocked'` → rejects if blocked
3. **Device Management**:
   - If `user.deviceId` is NULL → binds the provided `deviceId`
   - If `user.deviceId !== request.deviceId` → rejects with: "This account is already in use on another device. Please contact admin."
   - If `user.deviceId === request.deviceId` → allows login

## Testing Workflow

1. **Create User**: Use "Create User" request to create a test user
2. **First Login**: Use "Login - First Time" to bind a device
3. **Same Device**: Use "Login - Same Device" to verify it works
4. **Different Device**: Use "Login - Different Device" to test device restriction
5. **Block User**: Update user status to "blocked" using "Update User"
6. **Blocked Login**: Use "Login - Blocked User" to verify blocking works

## Notes

- All endpoints require Basic Authentication
- User status can be `'active'` or `'blocked'`
- Device ID is required for login
- Password is stored in plain text (no hashing)

