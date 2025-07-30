import { PrismaClient } from "../generated/prisma";
import { config } from "./config";

class PrismaService {
  private static instance: PrismaClient;

  public static getInstance(): PrismaClient {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaClient({
        log: config.nodeEnv === 'development' ? ['error', 'warn'] : ['error'],
        errorFormat: 'pretty',
      });
      console.log('✅ Prisma client created successfully!');
    }

    return PrismaService.instance;
  }

  public static async disconnect(): Promise<void> {
    if (PrismaService.instance) {
      console.log('🔌 Disconnecting Prisma client...');
      await PrismaService.instance.$disconnect();
      console.log('✅ Prisma client disconnected!');
    }
  }
}

export const prisma = PrismaService.getInstance();
console.log('🎯 Prisma client ready for use!');
