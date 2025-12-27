const http = require('http');

const BASE_URL = 'http://localhost:3000';
const AUTH = Buffer.from('qwert:123456').toString('base64');

function makeRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${AUTH}`
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function testLoginAPI() {
  console.log('🧪 Testing Updated V2 User Login API\n');

  // Clean up: Delete test user if exists
  try {
    const users = await makeRequest('GET', '/api/v2/users?search=testuser');
    if (users.data.success && users.data.data.length > 0) {
      const userId = users.data.data[0].id;
      await makeRequest('DELETE', `/api/v2/users/${userId}`);
      console.log('🧹 Cleaned up existing test user\n');
    }
  } catch (e) {}

  // 1. Create a new user with status 'active'
  console.log('1️⃣ Creating new user with status "active"');
  const createResponse = await makeRequest('POST', '/api/v2/users', {
    name: 'Test User',
    username: 'testuser',
    password: 'password123',
    description: 'Test user for login API',
    status: 'active'
  });
  console.log(`Status: ${createResponse.status}`);
  console.log(`Response:`, JSON.stringify(createResponse.data, null, 2));
  console.log('');

  if (createResponse.status !== 201) {
    console.log('❌ Failed to create user. Stopping tests.');
    return;
  }

  const userId = createResponse.data.data.id;

  // 2. Test login with new device (should bind deviceId)
  console.log('2️⃣ Testing login with new device (should bind deviceId)');
  const login1 = await makeRequest('POST', '/api/v2/users/login', {
    username: 'testuser',
    password: 'password123',
    deviceId: 'device-abc-123'
  });
  console.log(`Status: ${login1.status}`);
  console.log(`Response:`, JSON.stringify(login1.data, null, 2));
  console.log('');

  // 3. Test login with same device (should succeed)
  console.log('3️⃣ Testing login with same device (should succeed)');
  const login2 = await makeRequest('POST', '/api/v2/users/login', {
    username: 'testuser',
    password: 'password123',
    deviceId: 'device-abc-123'
  });
  console.log(`Status: ${login2.status}`);
  console.log(`Response:`, JSON.stringify(login2.data, null, 2));
  console.log('');

  // 4. Test login with different device (should fail)
  console.log('4️⃣ Testing login with different device (should fail)');
  const login3 = await makeRequest('POST', '/api/v2/users/login', {
    username: 'testuser',
    password: 'password123',
    deviceId: 'device-xyz-789'
  });
  console.log(`Status: ${login3.status}`);
  console.log(`Response:`, JSON.stringify(login3.data, null, 2));
  console.log('');

  // 5. Update user status to 'blocked'
  console.log('5️⃣ Updating user status to "blocked"');
  const updateResponse = await makeRequest('PUT', `/api/v2/users/${userId}`, {
    status: 'blocked'
  });
  console.log(`Status: ${updateResponse.status}`);
  console.log(`Response:`, JSON.stringify(updateResponse.data, null, 2));
  console.log('');

  // 6. Test login with blocked status (should fail)
  console.log('6️⃣ Testing login with blocked status (should fail)');
  const login4 = await makeRequest('POST', '/api/v2/users/login', {
    username: 'testuser',
    password: 'password123',
    deviceId: 'device-abc-123'
  });
  console.log(`Status: ${login4.status}`);
  console.log(`Response:`, JSON.stringify(login4.data, null, 2));
  console.log('');

  // 7. Test login with invalid password (should fail)
  console.log('7️⃣ Testing login with invalid password (should fail)');
  const login5 = await makeRequest('POST', '/api/v2/users/login', {
    username: 'testuser',
    password: 'wrongpassword',
    deviceId: 'device-abc-123'
  });
  console.log(`Status: ${login5.status}`);
  console.log(`Response:`, JSON.stringify(login5.data, null, 2));
  console.log('');

  // 8. Test login with invalid username (should fail)
  console.log('8️⃣ Testing login with invalid username (should fail)');
  const login6 = await makeRequest('POST', '/api/v2/users/login', {
    username: 'nonexistent',
    password: 'password123',
    deviceId: 'device-abc-123'
  });
  console.log(`Status: ${login6.status}`);
  console.log(`Response:`, JSON.stringify(login6.data, null, 2));
  console.log('');

  // Clean up
  console.log('🧹 Cleaning up test user');
  await makeRequest('DELETE', `/api/v2/users/${userId}`);
  console.log('✅ Test user deleted\n');

  console.log('✅ All login API tests completed!');
}

testLoginAPI().catch(console.error);

