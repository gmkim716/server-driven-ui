import express, { Application } from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import problemRoutes from "./routes/problems";

dotenv.config();

const app: Application = express();
app.use(express.json());

const requiredEnvVars = [
  "DB_HOST",
  "DB_PORT",
  "DB_USER",
  "DB_PASSWORD",
  "DB_NAME",
];
const missingVars = requiredEnvVars.filter((key) => !process.env[key]);

if (missingVars.length > 0) {
  console.error(`다음 환경 변수가 누락되었습니다: ${missingVars.join(", ")}`);
  process.exit(1);
}

// 데이터베이스 연결
AppDataSource.initialize()
  .then(() => {
    console.log("Postgres DB에 연결되었습니다.");

    app.use("/problems", problemRoutes);

    const PORT = Number(process.env.PORT) || 3002;
    app.listen(PORT, () => {
      console.log(`Problem Service가 실행 중입니다. http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB 연결 중 오류가 발생했습니다:", error);
  });
