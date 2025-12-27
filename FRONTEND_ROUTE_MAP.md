# 🚀 Frontend Route Map - Samanvi Bus Document Management System

## 📋 **API Base Configuration**
```
Base URL: http://localhost:3000
Authentication: Basic Auth (username: qwert, password: 123456)
Auth Header: Authorization: Basic cXdlcnQ6MTIzNDU2
```

---

## 🏗️ **Frontend Development Priority Order**

### **Phase 1: Core Setup & Authentication**
1. **Authentication Setup**
2. **Dashboard/Overview**
3. **Health Check**

### **Phase 2: Bus Management**
4. **Bus CRUD Operations**
5. **Bus Search & Filtering**

### **Phase 3: Document Types**
6. **Document Type Management**

### **Phase 4: Document Management**
7. **Document CRUD Operations**
8. **Document Upload (URL)**
9. **Document Search & Filtering**

### **Phase 5: Advanced Features**
10. **Expiry Tracking**
11. **Missing Documents**
12. **Reports & Analytics**

---

## 🔐 **1. Authentication Setup**

### **Login Component**
```javascript
// Frontend Authentication Helper
const authHeader = 'Basic ' + btoa('qwert:123456');

// Add to all API requests
headers: {
  'Authorization': authHeader,
  'Content-Type': 'application/json'
}
```

### **Health Check (Test Connection)**
```
GET /health
```
**Purpose:** Verify API connectivity
**Response:** Server status and uptime
**Frontend Use:** Loading screen, connection status

---

## 📊 **2. Dashboard/Overview**

### **Get All Buses (with pagination)**
```
GET /api/v1/buses?page=1&limit=10&search=
```
**Purpose:** Main dashboard - list all buses
**Frontend Use:** Bus listing table, search functionality

### **Get Document Types**
```
GET /api/v1/document-types
```
**Purpose:** Get available document types for dropdowns
**Frontend Use:** Document type selection, form validation

### **Get Expiring Documents**
```
GET /api/v1/documents/expiring?withinDays=30
```
**Purpose:** Dashboard alerts for expiring documents
**Frontend Use:** Warning cards, notification badges

### **Get Missing Required Documents**
```
GET /api/v1/buses/missing-required?types=Insurance,Permit
```
**Purpose:** Dashboard alerts for missing documents
**Frontend Use:** Action items, compliance tracking

### **Get Dashboard Statistics**
```
GET /api/v1/dashboard/stats
```
**Purpose:** Dashboard overview with key metrics
**Response:**
```json
{
  "totalBuses": 7,
  "totalVoiceAppUsers": 2,
  "totalDocuments": 6,
  "expiringDocuments": 5,
  "expiredDocuments": 0,
  "totalDocumentTypes": 7,
  "lastUpdated": "2025-08-16T06:26:46.211Z"
}
```
**Frontend Use:** Dashboard cards, statistics overview, KPI display

---

## 🚌 **3. Bus Management**

### **Create Bus**
```
POST /api/v1/buses
```
**Body:**
```json
{
  "registrationNo": "KA01AB1234",
  "model": "Tata Starbus",
  "manufacturer": "Tata Motors",
  "yearOfMake": 2020,
  "ownerName": "John Doe"
}
```
**Frontend Use:** Add bus form, registration

### **Get Bus by ID**
```
GET /api/v1/buses/:id
```
**Purpose:** Bus details page
**Frontend Use:** Bus profile, edit form pre-population

### **Get Bus with Documents (User App)**
```
GET /api/v1/buses/registration/:registrationNo
```
**Purpose:** Get bus details with all attached documents for user app
**Response:**
```json
{
  "id": "bus_id",
  "registrationNo": "AP39HP3524",
  "model": "Ashok",
  "manufacturer": "Tata",
  "yearOfMake": 2002,
  "ownerName": "Nagendra",
  "documents": [
    {
      "id": "doc_id",
      "documentName": "Permit",
      "documentNumber": "Permit",
      "issueDate": "2025-03-02T18:30:00.000Z",
      "expiryDate": "2025-08-30T18:30:00.000Z",
      "fileUrl": "https://drive.google.com/file/d/...",
      "remarks": "Test Document",
      "uploadedAt": "2025-08-16T03:52:12.985Z",
      "isExpired": false,
      "daysUntilExpiry": 15
    }
  ]
}
```
**Frontend Use:** Mobile app, document viewer, bus information display

### **Update Bus**
```
PUT /api/v1/buses/:id
```
**Body:** Same as create (all fields optional)
**Frontend Use:** Edit bus form

### **Delete Bus**
```
DELETE /api/v1/buses/:id
```
**Purpose:** Remove bus (cascades to documents)
**Frontend Use:** Delete confirmation modal

### **Search Buses**
```
GET /api/v1/buses?search=KA01AB&page=1&limit=10
```
**Purpose:** Search by registration, model, manufacturer, owner
**Frontend Use:** Search bar, filtered results

---

## 📄 **4. Document Type Management**

### **Create Document Type**
```
POST /api/v1/document-types
```
**Body:**
```json
{
  "name": "Custom Document",
  "description": "Custom document description"
}
```
**Frontend Use:** Admin panel, document type management

### **Update Document Type**
```
PUT /api/v1/document-types/:id
```
**Frontend Use:** Edit document type form

### **Delete Document Type**
```
DELETE /api/v1/document-types/:id
```
**Purpose:** Remove document type (if not in use)
**Frontend Use:** Admin panel with usage validation

---

## 📋 **5. Document Management**

### **Create Document**
```
POST /api/v1/buses/:busId/documents
```
**Body:**
```json
{
  "docTypeId": "doc_type_id",
  "documentNumber": "DOC123456",
  "issueDate": "2024-01-01T00:00:00.000Z",
  "expiryDate": "2025-12-31T00:00:00.000Z",
  "fileUrl": "https://drive.google.com/file/d/your_file_id/view",
  "remarks": "Document remarks"
}
```
**Frontend Use:** Document upload form, file URL input

### **Get Bus Documents**
```
GET /api/v1/buses/:busId/documents?page=1&limit=10
```
**Purpose:** List all documents for a specific bus
**Frontend Use:** Bus documents tab, document gallery

### **Get Document by ID**
```
GET /api/v1/documents/:docId
```
**Purpose:** Document details page
**Frontend Use:** Document viewer, edit form pre-population

### **Update Document**
```
PUT /api/v1/documents/:docId
```
**Body:** Same as create (all fields optional)
**Frontend Use:** Edit document form

### **Delete Document**
```
DELETE /api/v1/documents/:docId
```
**Purpose:** Remove document
**Frontend Use:** Delete confirmation modal

---

## 🔍 **6. Advanced Features**

### **Expiry Tracking**
```
GET /api/v1/documents/expiring?withinDays=30
```
**Purpose:** Documents expiring within specified days
**Frontend Use:** Calendar view, expiry dashboard, email alerts

### **Missing Documents**
```
GET /api/v1/buses/missing-required?types=Insurance,Permit
```
**Purpose:** Buses missing required document types
**Frontend Use:** Compliance dashboard, action items

---

## 🎨 **Frontend Route Structure (React Router Example)**

```javascript
// App Routes
const routes = [
  // Public Routes
  { path: '/', element: <Dashboard /> },
  { path: '/health', element: <HealthCheck /> },
  
  // Bus Management
  { path: '/buses', element: <BusList /> },
  { path: '/buses/new', element: <CreateBus /> },
  { path: '/buses/:id', element: <BusDetails /> },
  { path: '/buses/:id/edit', element: <EditBus /> },
  { path: '/buses/registration/:registrationNo', element: <BusWithDocuments /> },
  
  // Document Management
  { path: '/buses/:busId/documents', element: <BusDocuments /> },
  { path: '/buses/:busId/documents/new', element: <CreateDocument /> },
  { path: '/documents/:docId', element: <DocumentDetails /> },
  { path: '/documents/:docId/edit', element: <EditDocument /> },
  
  // Document Types (Admin)
  { path: '/document-types', element: <DocumentTypeList /> },
  { path: '/document-types/new', element: <CreateDocumentType /> },
  { path: '/document-types/:id/edit', element: <EditDocumentType /> },
  
  // Reports & Analytics
  { path: '/reports/expiring', element: <ExpiringDocuments /> },
  { path: '/reports/missing', element: <MissingDocuments /> },
  { path: '/reports/compliance', element: <ComplianceReport /> },
  { path: '/dashboard', element: <Dashboard /> },
];
```

---

## 📱 **Frontend Components Structure**

```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── ConfirmModal.jsx
│   ├── bus/
│   │   ├── BusList.jsx
│   │   ├── BusCard.jsx
│   │   ├── BusForm.jsx
│   │   └── BusDetails.jsx
│   ├── document/
│   │   ├── DocumentList.jsx
│   │   ├── DocumentCard.jsx
│   │   ├── DocumentForm.jsx
│   │   └── DocumentViewer.jsx
│   └── dashboard/
│       ├── Dashboard.jsx
│       ├── StatsCard.jsx
│       ├── ExpiryAlerts.jsx
│       └── MissingDocuments.jsx
├── services/
│   ├── api.js
│   ├── busService.js
│   ├── documentService.js
│   └── authService.js
├── hooks/
│   ├── useApi.js
│   ├── useBuses.js
│   └── useDocuments.js
└── utils/
    ├── constants.js
    ├── helpers.js
    └── validators.js
```

---

## 🔧 **API Service Layer Example**

```javascript
// services/api.js
const API_BASE = 'http://localhost:3000';
const AUTH_HEADER = 'Basic ' + btoa('qwert:123456');

export const api = {
  // Bus APIs
  getBuses: (params) => fetch(`${API_BASE}/api/v1/buses?${new URLSearchParams(params)}`, {
    headers: { 'Authorization': AUTH_HEADER }
  }),
  
  createBus: (data) => fetch(`${API_BASE}/api/v1/buses`, {
    method: 'POST',
    headers: { 
      'Authorization': AUTH_HEADER,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }),
  
  getBusWithDocuments: (registrationNo) => fetch(`${API_BASE}/api/v1/buses/registration/${registrationNo}`, {
    headers: { 'Authorization': AUTH_HEADER }
  }),
  
  // Document APIs
  getBusDocuments: (busId, params) => fetch(`${API_BASE}/api/v1/buses/${busId}/documents?${new URLSearchParams(params)}`, {
    headers: { 'Authorization': AUTH_HEADER }
  }),
  
  createDocument: (busId, data) => fetch(`${API_BASE}/api/v1/buses/${busId}/documents`, {
    method: 'POST',
    headers: { 
      'Authorization': AUTH_HEADER,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }),
  
  // Document Types
  getDocumentTypes: () => fetch(`${API_BASE}/api/v1/document-types`, {
    headers: { 'Authorization': AUTH_HEADER }
  }),
  
  // Reports
  getExpiringDocuments: (days = 30) => fetch(`${API_BASE}/api/v1/documents/expiring?withinDays=${days}`, {
    headers: { 'Authorization': AUTH_HEADER }
  }),
  
  getMissingDocuments: (types) => fetch(`${API_BASE}/api/v1/buses/missing-required?types=${types}`, {
    headers: { 'Authorization': AUTH_HEADER }
  }),
  
  // Dashboard
  getDashboardStats: () => fetch(`${API_BASE}/api/v1/dashboard/stats`, {
    headers: { 'Authorization': AUTH_HEADER }
  })
};
```

---

## 🎯 **Development Checklist**

### **Phase 1: Foundation**
- [ ] Set up React/Vue/Angular project
- [ ] Configure routing
- [ ] Set up API service layer
- [ ] Create authentication helper
- [ ] Build basic layout (header, sidebar)
- [ ] Create loading and error components

### **Phase 2: Bus Management**
- [ ] Bus listing page with search
- [ ] Create bus form
- [ ] Bus details page
- [ ] Edit bus form
- [ ] Delete bus confirmation

### **Phase 3: Document Management**
- [ ] Document listing for each bus
- [ ] Create document form with file URL
- [ ] Document details viewer
- [ ] Edit document form
- [ ] Delete document confirmation

### **Phase 4: Dashboard & Reports**
- [ ] Dashboard with stats
- [ ] Expiring documents alerts
- [ ] Missing documents report
- [ ] Compliance tracking

### **Phase 5: Polish**
- [ ] Form validation
- [ ] Error handling
- [ ] Loading states
- [ ] Responsive design
- [ ] Testing

---

## 🚀 **Quick Start Commands**

```bash
# Test API connectivity
curl http://localhost:3000/health

# Get document types for dropdown
curl -H "Authorization: Basic cXdlcnQ6MTIzNDU2" \
  http://localhost:3000/api/v1/document-types

# Get buses for listing
curl -H "Authorization: Basic cXdlcnQ6MTIzNDU2" \
  http://localhost:3000/api/v1/buses
```

This route map provides a clear development path for building a comprehensive frontend for your bus document management system! 🎉
