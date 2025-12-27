# V2 Documents API - Frontend Integration Guide

## 📋 Overview

The V2 Documents API provides a simplified interface for managing vehicle documents. This API is designed for frontend applications that need to store and retrieve vehicle information with associated document folder links.

## 🔐 Authentication

All endpoints require **Basic Authentication** with the following credentials:
- **Username**: `qwert`
- **Password**: `123456`

### Authentication Header
```http
Authorization: Basic cXdlcnQ6MTIzNDU2
```

## 📊 Data Model

### V2Document Structure
```typescript
interface V2Document {
  id: string;           // Unique identifier (CUID)
  vehicleNo: string;    // Vehicle registration number (unique)
  folderLink: string;   // URL to document folder (Google Drive, etc.)
  description?: string; // Optional description (max 500 chars)
  createdAt: string;    // ISO timestamp
  updatedAt: string;    // ISO timestamp
}
```

## 🚀 API Endpoints

### Base URL
```
http://localhost:3000/api/v2/documents
```

---

## 📖 Endpoint Documentation

### 1. Get All Documents
**GET** `/api/v2/documents`

Retrieves all documents with pagination and search capabilities.

#### Query Parameters
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | number | 1 | Page number for pagination |
| `limit` | number | 10 | Number of items per page |
| `search` | string | - | Search in vehicleNo and description |
| `sortBy` | string | "createdAt" | Sort field: "vehicleNo", "createdAt", "updatedAt" |
| `sortOrder` | string | "desc" | Sort order: "asc" or "desc" |

#### Example Request
```javascript
fetch('http://localhost:3000/api/v2/documents?page=1&limit=5&search=KA01', {
  headers: {
    'Authorization': 'Basic cXdlcnQ6MTIzNDU2'
  }
})
```

#### Response
```json
{
  "success": true,
  "data": [
    {
      "id": "cmev9e1sl0000ul74biqyq01k",
      "vehicleNo": "KA01AB1234",
      "folderLink": "https://drive.google.com/drive/folders/123456789",
      "description": "Test vehicle documents",
      "createdAt": "2025-08-28T10:26:26.326Z",
      "updatedAt": "2025-08-28T10:26:26.326Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 5,
    "total": 1,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}
```

---

### 2. Get Document by ID
**GET** `/api/v2/documents/:id`

Retrieves a specific document by its ID.

#### Example Request
```javascript
fetch('http://localhost:3000/api/v2/documents/cmev9e1sl0000ul74biqyq01k', {
  headers: {
    'Authorization': 'Basic cXdlcnQ6MTIzNDU2'
  }
})
```

#### Response
```json
{
  "success": true,
  "data": {
    "id": "cmev9e1sl0000ul74biqyq01k",
    "vehicleNo": "KA01AB1234",
    "folderLink": "https://drive.google.com/drive/folders/123456789",
    "description": "Test vehicle documents",
    "createdAt": "2025-08-28T10:26:26.326Z",
    "updatedAt": "2025-08-28T10:26:26.326Z"
  }
}
```

#### Error Response (404)
```json
{
  "success": false,
  "message": "V2 document not found"
}
```

---

### 3. Create New Document
**POST** `/api/v2/documents`

Creates a new document record.

#### Request Body
```json
{
  "vehicleNo": "KA01AB1234",
  "folderLink": "https://drive.google.com/drive/folders/123456789",
  "description": "Vehicle registration documents"
}
```

#### Validation Rules
- `vehicleNo`: Required, 1-50 characters, must be unique
- `folderLink`: Required, must be a valid URL
- `description`: Optional, max 500 characters

#### Example Request
```javascript
fetch('http://localhost:3000/api/v2/documents', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic cXdlcnQ6MTIzNDU2'
  },
  body: JSON.stringify({
    vehicleNo: 'KA01AB1234',
    folderLink: 'https://drive.google.com/drive/folders/123456789',
    description: 'Vehicle registration documents'
  })
})
```

#### Response (201)
```json
{
  "success": true,
  "message": "V2 document created successfully",
  "data": {
    "id": "cmev9e1sl0000ul74biqyq01k",
    "vehicleNo": "KA01AB1234",
    "folderLink": "https://drive.google.com/drive/folders/123456789",
    "description": "Vehicle registration documents",
    "createdAt": "2025-08-28T10:26:26.326Z",
    "updatedAt": "2025-08-28T10:26:26.326Z"
  }
}
```

#### Error Response (409 - Duplicate)
```json
{
  "success": false,
  "message": "A document for this vehicle number already exists"
}
```

#### Error Response (400 - Validation)
```json
{
  "message": "Validation error",
  "details": [
    {
      "path": ["vehicleNo"],
      "message": "Vehicle number is required"
    },
    {
      "path": ["folderLink"],
      "message": "Folder link must be a valid URL"
    }
  ]
}
```

---

### 4. Update Document
**PUT** `/api/v2/documents/:id`

Updates an existing document.

#### Request Body
```json
{
  "vehicleNo": "KA01AB1234",
  "folderLink": "https://drive.google.com/drive/folders/987654321",
  "description": "Updated description"
}
```

All fields are optional for updates.

#### Example Request
```javascript
fetch('http://localhost:3000/api/v2/documents/cmev9e1sl0000ul74biqyq01k', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic cXdlcnQ6MTIzNDU2'
  },
  body: JSON.stringify({
    description: 'Updated description',
    folderLink: 'https://drive.google.com/drive/folders/987654321'
  })
})
```

#### Response
```json
{
  "success": true,
  "message": "V2 document updated successfully",
  "data": {
    "id": "cmev9e1sl0000ul74biqyq01k",
    "vehicleNo": "KA01AB1234",
    "folderLink": "https://drive.google.com/drive/folders/987654321",
    "description": "Updated description",
    "createdAt": "2025-08-28T10:26:26.326Z",
    "updatedAt": "2025-08-28T10:26:26.676Z"
  }
}
```

---

### 5. Delete Document
**DELETE** `/api/v2/documents/:id`

Deletes a document by ID.

#### Example Request
```javascript
fetch('http://localhost:3000/api/v2/documents/cmev9e1sl0000ul74biqyq01k', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Basic cXdlcnQ6MTIzNDU2'
  }
})
```

#### Response
```json
{
  "success": true,
  "message": "V2 document deleted successfully"
}
```

---

## 💻 Frontend Integration Examples

### React/JavaScript Example

```javascript
// API Service Class
class V2DocumentsAPI {
  constructor(baseURL = 'http://localhost:3000/api/v2/documents') {
    this.baseURL = baseURL;
    this.authHeader = 'Basic cXdlcnQ6MTIzNDU2';
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Authorization': this.authHeader,
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  }

  // Get all documents with pagination
  async getDocuments(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`?${queryString}`);
  }

  // Get document by ID
  async getDocument(id) {
    return this.request(`/${id}`);
  }

  // Create new document
  async createDocument(documentData) {
    return this.request('', {
      method: 'POST',
      body: JSON.stringify(documentData)
    });
  }

  // Update document
  async updateDocument(id, updateData) {
    return this.request(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updateData)
    });
  }

  // Delete document
  async deleteDocument(id) {
    return this.request(`/${id}`, {
      method: 'DELETE'
    });
  }
}

// Usage Example
const api = new V2DocumentsAPI();

// Get all documents
const documents = await api.getDocuments({ page: 1, limit: 10 });

// Create new document
const newDocument = await api.createDocument({
  vehicleNo: 'KA01AB1234',
  folderLink: 'https://drive.google.com/drive/folders/123456789',
  description: 'Vehicle documents'
});

// Update document
const updated = await api.updateDocument(newDocument.data.id, {
  description: 'Updated description'
});

// Delete document
await api.deleteDocument(newDocument.data.id);
```

### React Hook Example

```javascript
import { useState, useEffect } from 'react';

const useV2Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = new V2DocumentsAPI();

  const fetchDocuments = async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.getDocuments(params);
      setDocuments(response.data);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createDocument = async (documentData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.createDocument(documentData);
      setDocuments(prev => [...prev, response.data]);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateDocument = async (id, updateData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.updateDocument(id, updateData);
      setDocuments(prev => 
        prev.map(doc => doc.id === id ? response.data : doc)
      );
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteDocument = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await api.deleteDocument(id);
      setDocuments(prev => prev.filter(doc => doc.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    documents,
    loading,
    error,
    fetchDocuments,
    createDocument,
    updateDocument,
    deleteDocument
  };
};

export default useV2Documents;
```

### Axios Example

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v2/documents',
  headers: {
    'Authorization': 'Basic cXdlcnQ6MTIzNDU2',
    'Content-Type': 'application/json'
  }
});

// Get all documents
const getDocuments = (params) => api.get('/', { params });

// Get document by ID
const getDocument = (id) => api.get(`/${id}`);

// Create document
const createDocument = (data) => api.post('/', data);

// Update document
const updateDocument = (id, data) => api.put(`/${id}`, data);

// Delete document
const deleteDocument = (id) => api.delete(`/${id}`);

export {
  getDocuments,
  getDocument,
  createDocument,
  updateDocument,
  deleteDocument
};
```

## 🚨 Error Handling

### Common HTTP Status Codes
- **200**: Success
- **201**: Created successfully
- **400**: Validation error
- **401**: Unauthorized (invalid credentials)
- **404**: Document not found
- **409**: Conflict (duplicate vehicle number)
- **500**: Internal server error

### Error Response Format
```json
{
  "message": "Error description",
  "details": [
    {
      "path": ["fieldName"],
      "message": "Specific error message"
    }
  ]
}
```

## 🔍 Search and Filtering

### Search Functionality
The search parameter searches in both `vehicleNo` and `description` fields (case-insensitive).

```javascript
// Search for vehicles containing "KA01"
const results = await api.getDocuments({ search: 'KA01' });

// Search for documents with "insurance" in description
const results = await api.getDocuments({ search: 'insurance' });
```

### Sorting Options
```javascript
// Sort by vehicle number ascending
const results = await api.getDocuments({ 
  sortBy: 'vehicleNo', 
  sortOrder: 'asc' 
});

// Sort by creation date descending (default)
const results = await api.getDocuments({ 
  sortBy: 'createdAt', 
  sortOrder: 'desc' 
});
```

## 📱 Mobile App Integration

### React Native Example
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

class V2DocumentsAPI {
  constructor() {
    this.baseURL = 'http://localhost:3000/api/v2/documents';
    this.authHeader = 'Basic cXdlcnQ6MTIzNDU2';
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': this.authHeader,
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Request failed');
    }

    return data;
  }

  // Cache documents locally
  async getDocumentsWithCache(params = {}) {
    try {
      const response = await this.request(`?${new URLSearchParams(params)}`);
      
      // Cache the response
      await AsyncStorage.setItem(
        'v2_documents_cache', 
        JSON.stringify(response)
      );
      
      return response;
    } catch (error) {
      // Return cached data if network fails
      const cached = await AsyncStorage.getItem('v2_documents_cache');
      if (cached) {
        return JSON.parse(cached);
      }
      throw error;
    }
  }
}
```

## 🧪 Testing

### Test with cURL
```bash
# Get all documents
curl -X GET "http://localhost:3000/api/v2/documents" \
  -H "Authorization: Basic cXdlcnQ6MTIzNDU2"

# Create document
curl -X POST "http://localhost:3000/api/v2/documents" \
  -H "Authorization: Basic cXdlcnQ6MTIzNDU2" \
  -H "Content-Type: application/json" \
  -d '{
    "vehicleNo": "KA01AB1234",
    "folderLink": "https://drive.google.com/drive/folders/123456789",
    "description": "Test document"
  }'
```

## 📝 Notes

1. **Unique Vehicle Numbers**: Each vehicle number must be unique across all documents
2. **URL Validation**: Folder links must be valid URLs
3. **Pagination**: Default page size is 10, maximum recommended is 100
4. **Rate Limiting**: API has rate limiting (100 requests per 15 minutes per IP)
5. **CORS**: API allows all origins for development

## 🆘 Support

For issues or questions:
1. Check the server logs for detailed error messages
2. Verify authentication credentials
3. Ensure the server is running on port 3000
4. Check network connectivity

---

**Last Updated**: August 28, 2025  
**API Version**: v2  
**Server**: http://localhost:3000

