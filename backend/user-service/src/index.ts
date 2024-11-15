import express, { Application } from "express";
import userRoutes from "./routes/users";

const app: Application = express();
app.use(express.json());

// 사용자 라우트 등록
app.use("/users", userRoutes);

// 서버 시작
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`User Service가 실행중입니다 http://localhost:${PORT}`);
});
