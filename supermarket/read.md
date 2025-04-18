1. 프로젝트 폴더 구조 설명

app.js : 메인 서버 실행 파일, 라우팅과 미들웨어 설정이 이 파일에 포함되어 있음.

Router/Router.js : 제품 관련 API 라우팅을 담당한다.

service/service.js : 비즈니스 로직이 포함된 서비스 계층 DB 접근 로직이 모여있는 파일임

middleware/validate.js : 유효성을 검사하는 미들웨어가 있다.

prisma/prismaClient.js : PrismaClient를 export 하는 파일이다.

2. 실행 방법

1단계. 패키지 설치

npm install

2단계. Prisma 마이그레이션 및 클라이언트 생성

npx prisma migrate dev --name init
npx prisma generate

3단계. 서버 실행

nodemon app.js

3. 주요 기능
   GET /products : 전체 제품 목록을 조회한다.

GET /products/:id : 특정 제품을 조회함.

POST /products : 제품을 새로 등록하는 기능.

PUT /products/:id : 입력한 id값에 해당하는 상품의 정보를 수정함.

DELETE /products/:id : 입력한 id값에 해당하는 상품을 죽여버림

4. 코드 개선 포인트 및 주의 사항

기능 사용할때 JSON 형식을 정확히 지켜야 함 예: "price": 1000 (숫자여야 함), "price": "1000" 이렇게 입력하면 오류가 발생함

validate.js 내부에서는 req.params.id와 req.body의 유효성을 검사하며, 존재 여부까지 확인하는 로직이 포함되어 있다.

PrismaClient를 사용하기 전에 npx prisma generate를 실행해야 함. 이 과정을 건너뛰면 에러 발생한다.

라우터와 서비스 계층의 분리가 잘 되어 있어 테스트 및 유지보수가 쉽다.
