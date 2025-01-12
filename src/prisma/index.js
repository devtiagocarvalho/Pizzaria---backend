import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();



(async () => {  // para aparecer no console se o BD foi conectado
    try {
      await prismaClient.$connect();
      console.log("Database connected successfully!");
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  })();

export default prismaClient;
