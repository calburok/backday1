import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.student.findMany({
    where: {
      major_id: 3,
    },
    select: {
      student_name: true,
      majors: {
        select: {
          major_name: true,
        },
      },
    },
  });

  console.log(result);
}

main();
