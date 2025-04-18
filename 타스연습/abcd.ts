case "2":
        askmajorMenu();
        const answer = await askQuestion("번호입력: ");

        switch (answer) {
          case "1":
            console.log("전공 등록 선택");
            console.log("전공을 입력하세요");
            const lastmajors = await prisma.majors.findFirst({
              orderBy: {
                id: "desc",
              },
            });
            const newstudentId = lastmajors ? lastmajors.id + 1 : 1;

            const major_name = await askQuestion("전공을 입력하세요 ");
            const department_id = await askQuestion(
              "소속 전공의 학부의 번호를 입력하세요 "
            );

            try {
              const result = await prisma.majors.create({
                data: {
                  id: Number(newstudentId),
                  major_name: major_name,
                  department_id: Number(department_id),
                },
              });

              console.log("전공 등록 성공:", result);
            } catch (error) {
              console.error("전공 등록 실패:", error);
            }
            break;

          case "2":
            console.log("전공 조회 선택");
            const majorsIdToQuery = await askQuestion("조회할 전공 ID 입력: ");

            try {
              const major = await prisma.majors.findUnique({
                where: { id: Number(majorsIdToQuery) },
              });

              if (major) {
                console.log("전공 정보:", major);
              } else {
                console.log("해당 전공을 찾을 수 없습니다.");
              }
            } catch (error) {
              console.error("전공 조회 실패:", error);
            }
            break;

          case "3":
            console.log("전공 수정 선택");
            const majorsIdToUpdate = await askQuestion(
              "수정할 전공 ID 입력 : "
            );
            const majorsName = await askQuestion("새로운 전공 이름 입력 : ");
            const departmentsIdToUpdate = await askQuestion(
              "새로운 학부를 입력 : "
            );

            try {
              const updatedmajor = await prisma.majors.update({
                where: { id: Number(majorsIdToUpdate) },
                data: {
                  major_name: majorsName,
                  department_id: Number(departmentsIdToUpdate),
                },
              });

              console.log("학생정보 수정완료:", updatedmajor);
            } catch (error) {
              console.error("학생 수정 실패:", error);
            }
            break;

          case "4":
            console.log("전공 삭제 선택");
            const majorsIdToDelete = await askQuestion("삭제할 전공 ID 입력: ");

            try {
              const deletedmajors = await prisma.majors.delete({
                where: { id: Number(majorsIdToDelete) },
              });

              console.log("전공 삭제 완료:", deletedmajors);
            } catch (error) {
              console.error("전공 삭제 실패:", error);
            }
            break;

          case "5":
            console.log("프로그램 종료");
            process.exit();
            return;

          default:
            console.log("잘못된 입력입니다. 다시 시도해주세요.");
        }

        try {
        } catch (error) {}
        break;






        case "3":
        try {
          askMenucourse();
          const answer = await askQuestion("번호입력: ");

          switch (answer) {
            case "1":
              console.log("수강과목등록 선택");
              console.log("수강과목를 입력하세요");
              const lastcourse = await prisma.courses.findFirst({
                orderBy: {
                  id: "desc",
                },
              });

              const newcourseId = lastcourse ? lastcourse.id + 1 : 1;
              const course_name = await askQuestion("수강과목 이름 입력 ");
              const professor_id = await askQuestion("교수id 입력 ");

              try {
                const result = await prisma.courses.create({
                  data: {
                    id: Number(newcourseId),
                    course_name: course_name,

                    professor_id: Number(professor_id),
                  },
                });

                console.log("수강과목 등록 성공:", result);
              } catch (error) {
                console.error("수강과목 등록 실패:", error);
              }
              break;

            case "2":
              console.log("수강과목 수정 선택");
              const courseIdToUpdate = await askQuestion("수강과목 ID 입력: ");
              const updatedcourseName = await askQuestion(
                "수강과목 이름 입력: "
              );
              const updatedcourseAdmission = await askQuestion(
                "교수 id 입력: "
              );

              try {
                const updatedcourse = await prisma.courses.update({
                  where: { id: Number(courseIdToUpdate) },
                  data: {
                    id: Number(courseIdToUpdate),
                    course_name: updatedcourseName,

                    professor_id: Number(updatedcourseAdmission),
                  },
                });

                console.log("수강과목 수정완료:", updatedcourse);
              } catch (error) {
                console.error("수강과목 수정 실패:", error);
              }
              break;

            case "3":
              console.log("수강과목 삭제 선택");
              const courseIdToDelete = await askQuestion(
                "삭제할 수강과목 ID 입력: "
              );

              try {
                const deletedcourse = await prisma.courses.delete({
                  where: { id: Number(courseIdToDelete) },
                });

                console.log("수강과목 삭제 완료:", deletedcourse);
              } catch (error) {
                console.error("수강과목 삭제 실패:", error);
              }
              break;

            case "4":
              console.log("수강과목 조회 선택");
              const courseIdToQuery = await askQuestion(
                "조회할 수강과목 ID 입력: "
              );

              try {
                const course = await prisma.courses.findUnique({
                  where: { id: Number(courseIdToQuery) },
                });

                if (course) {
                  console.log("수강과목 정보:", course);
                } else {
                  console.log("해당 수강과목을 찾을 수 없습니다.");
                }
              } catch (error) {
                console.error("수강과목실패:", error);
              }
              break;

            case "5":
              console.log("프로그램 종료");
              process.exit();
              return;

            default:
              console.log("잘못된 입력입니다. 다시 시도해주세요.");
          }
        } catch (error) {}
        break;