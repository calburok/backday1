import { PrismaClient } from "@prisma/client";
import { action, askMenu, askQuestion } from "./prompt";

const prisma = new PrismaClient();

async function main() {
  console.log("대학교 인원관리 프로그램 실행");

  while (true) {
    askMenu();
    const answer = await askQuestion("번호입력: ");
    switch (answer) {
      case "1":
        console.log("학생 등록 선택");
        console.log("학생정보를 입력하세요");

        const lastStudent = await prisma.student.findFirst({
          orderBy: {
            id: "desc", // ID 내림차순 정렬
          },
        });

        const newStudentId = lastStudent ? lastStudent.id + 1 : 1;

        const student_name = await askQuestion("학생 이름 입력 ");
        const student_age = await askQuestion("나이 입력 ");
        const student_admission = await askQuestion("학번 입력");
        const student_majorId = await askQuestion("전공번호 입력");

        try {
          const result = await prisma.student.create({
            data: {
              id: Number(newStudentId),
              student_name: student_name,
              age: Number(student_age),
              admission: Number(student_admission),
              major_id: Number(student_majorId),
            },
          });

          console.log("학생 등록 성공:", result);
        } catch (error) {
          console.error("학생 등록 실패:", error);
        }
        break;

      case "2":
        console.log("학생 수정 선택");
        const studentIdToUpdate = await askQuestion("수정할 학생 ID 입력: ");
        const updatedStudentName = await askQuestion("새로운 이름 입력: ");
        const updatedStudentAge = await askQuestion("새로운 나이 입력: ");
        const updatedStudentAdmission = await askQuestion("새로운 학번 입력: ");
        const updatedStudentMajorId = await askQuestion(
          "새로운 전공 번호 입력: "
        );

        try {
          const updatedStudent = await prisma.student.update({
            where: { id: Number(studentIdToUpdate) },
            data: {
              student_name: updatedStudentName,
              age: Number(updatedStudentAge),
              admission: Number(updatedStudentAdmission),
              major_id: Number(updatedStudentMajorId),
            },
          });

          console.log("학생정보 수정완료:", updatedStudent);
        } catch (error) {
          console.error("학생 수정 실패:", error);
        }
        break;

      case "3":
        console.log("학생 삭제 선택");
        const studentIdToDelete = await askQuestion("삭제할 학생 ID 입력: ");

        try {
          const deletedStudent = await prisma.student.delete({
            where: { id: Number(studentIdToDelete) },
          });

          console.log("학생 삭제 완료:", deletedStudent);
        } catch (error) {
          console.error("학생 삭제 실패:", error);
        }
        break;

      case "4":
        console.log("학생 조회 선택");
        const studentIdToQuery = await askQuestion("조회할 학생 ID 입력: ");

        try {
          const student = await prisma.student.findUnique({
            where: { id: Number(studentIdToQuery) },
          });

          if (student) {
            console.log("학생 정보:", student);
          } else {
            console.log("해당 학생을 찾을 수 없습니다.");
          }
        } catch (error) {
          console.error("학생 조회 실패:", error);
        }
        break;

      case "5":
        console.log("학생 수강과목 등록 선택");
        const studentIdForCourseAdd = await askQuestion(
          "수강과목을 등록할 학생 ID 입력: "
        );
        const courseIdToAdd = await askQuestion("등록할 과목 ID 입력: ");
        const lastStudent2 = await prisma.enrollments.findFirst({
          orderBy: {
            id: "desc", // ID 내림차순 정렬
          },
        });

        const newStudentId2 = lastStudent2 ? lastStudent2.id + 1 : 1;
        try {
          // 수강 과목 등록 로직을 추가합니다.
          console.log(
            `학생 ${studentIdForCourseAdd}에게 과목 ${courseIdToAdd} 등록`
          );
          const newEnrollment = await prisma.enrollments.create({
            data: {
              id: newStudentId2,
              student_id: Number(studentIdForCourseAdd),
              course_id: Number(courseIdToAdd),
            },
          });
          console.log("수강과목 등록", newEnrollment);
        } catch (error) {
          console.error("수강 과목 등록 실패:", error);
        }
        break;

      case "6":
        console.log("학생 수강과목 철회 선택");
        const studentIdForCourseRemove = await askQuestion(
          "수강과목을 철회할 학생 ID 입력: "
        );
        const courseIdToRemove = await askQuestion("철회할 과목 ID 입력: ");

        try {
          // 수강 과목 철회 로직을 추가합니다.
          console.log(
            `학생 ${studentIdForCourseRemove}에서 과목 ${courseIdToRemove} 철회`
          );
          const deletecourse = await prisma.enrollments.delete({
            where: {
              student_id_course_id: {
                student_id: Number(studentIdForCourseRemove),
                course_id: Number(courseIdToRemove),
              },
            },
          });
          console.log("수강과목 철회내용", deletecourse);
        } catch (error) {
          console.error("수강 과목 철회 실패:", error);
        }
        break;

      case "7":
        console.log("프로그램 종료");
        process.exit();
        return;

      default:
        console.log("잘못된 입력입니다. 다시 시도해주세요.");
    }
  }
}

main();
