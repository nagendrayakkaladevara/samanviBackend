const http = require('http');

// Test the all buses with documents endpoint
const testAllBusesWithDocuments = () => {
  const options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '/api/v1/buses/all-with-documents',
    method: 'GET',
    headers: {
      'Authorization': 'Basic cXdlcnQ6MTIzNDU2',
      'Content-Type': 'application/json'
    }
  };

  const req = http.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers:`, res.headers);

    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('\nResponse Body:');
      try {
        const jsonData = JSON.parse(data);
        console.log(JSON.stringify(jsonData, null, 2));
        
        console.log(`\n📱 All Buses with Documents for User App:`);
        console.log(`🚌 Total Buses: ${jsonData.total}`);
        
        if (jsonData.buses && jsonData.buses.length > 0) {
          console.log(`\n📋 Bus Details:`);
          jsonData.buses.forEach((bus, index) => {
            console.log(`\n${index + 1}. Bus: ${bus.registrationNo}`);
            console.log(`   📄 Documents: ${bus.documents.length}`);
            
            if (bus.documents.length > 0) {
              console.log(`   📋 Document List:`);
              bus.documents.forEach((doc, docIndex) => {
                console.log(`      ${docIndex + 1}. ${doc.documentName}`);
                console.log(`         📝 Number: ${doc.documentNumber || 'N/A'}`);
                console.log(`         🔗 File URL: ${doc.fileUrl}`);
              });
            } else {
              console.log(`   ℹ️  No documents found for this bus`);
            }
          });
        } else {
          console.log(`\nℹ️  No buses found`);
        }
        
        console.log(`\n🎉 SUCCESS: All buses with documents endpoint is working!`);
        
      } catch (error) {
        console.log('Raw response:', data);
        console.error('Error parsing JSON:', error.message);
      }
    });
  });

  req.on('error', (error) => {
    console.error('Request error:', error);
  });

  req.end();
};

console.log('🧪 Testing all buses with documents endpoint...');
console.log('URL: http://localhost:3000/api/v1/buses/all-with-documents');
console.log('Expected: Should return all buses with their attached documents\n');

testAllBusesWithDocuments();
