// import express, { Application, Request, Response } from "express";
// import { User } from "./entity/user";
// import { DataSource, Repository } from "typeorm";
// import { handleError, sendErrorResponse } from "./utils/errorHandlers";
// import { UserService } from "./services/userService";
// import dotenv from "dotenv";

// const app: Application = express();
// app.use(express.json());
// dotenv.config();

// const requiredEnvVars = [
//   "DB_HOST",
//   "DB_PORT",
//   "DB_USER",
//   "DB_PASSWORD",
//   "DB_NAME",
// ];
// const missingVars = requiredEnvVars.filter((key) => !process.env[key]);

// if (missingVars.length > 0) {
//   console.error(`다음 환경 변수가 누락되었습니다: ${missingVars.join(", ")}`);
//   process.exit(1);
// }

// // TypeORM DataSource 설정
// const AppDataSource = new DataSource({
//   type: "postgres",
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   entities: [User],
//   synchronize: true, // 개발 환경에서는 true, 운영 환경에서는 false로 설정
// });

// // TypeORM DataSource 연결
// AppDataSource.initialize()
//   .then(() => {
//     console.log("Postgres DB에 연결했습니다");

//     const userRepository: Repository<User> = AppDataSource.getRepository(User);
//     const userService = new UserService(userRepository);

//     // 사용자 목록 조회
//     app.get("/users", async (req, res) => {
//       try {
//         const users = await userService.getAllUsers();
//         res.status(200).json({
//           status: "success",
//           data: users,
//           message: "사용자 목록 조회 성공",
//         });
//       } catch (error) {
//         handleError(res, "사용자 목록 조회 중 오류가 발생했습니다", error);
//       }
//     });

//     // 사용자 생성
//     app.post("/users", async (req: Request, res: Response): Promise<void> => {
//       try {
//         const { name, email } = req.body;

//         // 필수 데이터 검증
//         if (!name || !email) {
//           sendErrorResponse(res, "이름과 이메일은 필수입니다.", 400);
//           return;
//         }
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//           sendErrorResponse(res, "유효한 이메일 형식을 입력해주세요.", 400);
//           return;
//         }

//         const savedUser = await userService.createUser(name, email);
//         res.status(201).json({
//           status: "success",
//           data: savedUser,
//           message: "사용자 생성 성공",
//         });
//       } catch (error) {
//         handleError(res, "사용자 생성 중 오류가 발생했습니다", error);
//       }
//     });

//     // 사용자 삭제
//     app.delete("/users/:id", async (req, res) => {
//       try {
//         const id = Number(req.params.id);

//         // ID 검증
//         if (isNaN(id)) {
//           sendErrorResponse(res, "유효한 사용자 ID를 입력해주세요.", 400);
//           return;
//         }

//         const result = await userService.deleteUser(id); // 사용자를 삭제합니다
//         if (result.affected === 0) {
//           sendErrorResponse(res, "사용자를 찾을 수 없습니다", 404);
//         } else {
//           res
//             .status(200)
//             .json({ status: "success", message: "사용자를 삭제했습니다" });
//         }
//       } catch (error) {
//         handleError(res, "사용자 삭제 중 오류가 발생했습니다", error);
//       }
//     });

//     const PORT = Number(process.env.PORT) || 3001;

//     app.listen(PORT, () => {
//       console.log(`User Service가 실행 중입니다 http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("DB 연결 중 오류가 발생했습니다", error);
//   });

//== mock repostory 코드 추가 start ==//
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
app.use(express.json());

// Mock 데이터 저장소
const mockUsers = [
  { id: 1, name: "Gyeongmin Kim", email: "gmkim716@gmail.com" },
];
let userIdCounter = mockUsers.length;

// 사용자 목록 조회
app.get("/users", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: mockUsers,
    message: "사용자 목록 조회 성공",
  });
});

// 사용자 생성
app.post("/users", async (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(400).json({
      status: "error",
      message: "이름과 이메일은 필수입니다.",
    });
    return;
  }

  const newUser = { id: ++userIdCounter, name, email };
  mockUsers.push(newUser);

  res.status(201).json({
    status: "success",
    data: newUser,
    message: "사용자 생성 성공",
  });
});

// 사용자 삭제
app.delete("/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const index = mockUsers.findIndex((user) => user.id === id);

  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: "사용자를 찾을 수 없습니다",
    });
    return;
  }

  mockUsers.splice(index, 1);

  res.status(200).json({
    status: "success",
    message: "사용자를 삭제했습니다",
  });
});

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log(`User Service가 실행 중입니다 http://localhost:${PORT}`);
});
//== mock repostory 코드 추가 end ==//
