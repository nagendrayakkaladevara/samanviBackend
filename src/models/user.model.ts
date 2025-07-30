import { prisma } from '../config/prisma';

export const getAllUsers = async () => {
  const result = await prisma.user.findMany();
  return result;
};

export const createUser = async (username: string, password: string) => {
  const result = await prisma.user.create({
    data: {
      username,
      password,
    },
  });
  return result;
};

export const updateUser = async (id: number, username: string, password: string) => {
  const result = await prisma.user.update({
    where: { id },
    data: { username, password },
  });
  return result;
};

export const deleteUser = async (id: number) => {
  await prisma.user.delete({
    where: { id },
  });
};

export const validateUser = async (username: string, password: string) => {
  const result = await prisma.user.findFirst({
    where: { username, password },
  });
  return result;
};
