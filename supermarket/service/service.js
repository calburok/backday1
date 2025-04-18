const { prisma } = require("../prisma/prismaClient");

const service = {
  getAll: async () => {
    return await prisma.products.findMany();
  },

  getId: async (id) => {
    return await prisma.products.findUnique({
      where: { id: +id },
    });
  },

  create: async (data) => {
    return await prisma.products.create({ data });
  },

  update: async (id, data) => {
    return await prisma.products.update({
      where: { id: +id },
      data,
    });
  },

  delete: async (id) => {
    return await prisma.products.delete({
      where: { id: +id },
    });
  },
};

module.exports = service;
