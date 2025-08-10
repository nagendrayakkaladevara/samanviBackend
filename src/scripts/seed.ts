import { prisma } from '../config/prisma';

const defaultDocumentTypes = [
  {
    name: 'Insurance',
    description: 'Vehicle insurance certificate'
  },
  {
    name: 'Permit',
    description: 'Route permit for commercial vehicles'
  },
  {
    name: 'Fitness Certificate',
    description: 'Vehicle fitness certificate'
  },
  {
    name: 'Registration Certificate',
    description: 'Vehicle registration certificate'
  },
  {
    name: 'Pollution Certificate',
    description: 'Pollution under control certificate'
  },
  {
    name: 'Tax Receipt',
    description: 'Road tax payment receipt'
  }
];

async function seed() {
  console.log('🌱 Starting database seeding...');

  try {
    // Create default document types
    for (const docType of defaultDocumentTypes) {
      const existing = await prisma.documentType.findUnique({
        where: { name: docType.name }
      });

      if (!existing) {
        await prisma.documentType.create({
          data: docType
        });
        console.log(`✅ Created document type: ${docType.name}`);
      } else {
        console.log(`⏭️  Document type already exists: ${docType.name}`);
      }
    }

    console.log('🎉 Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
