import express, { Application } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app: Application = express();

// user service 프록시
app.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:3001", // user service 주소
    changeOrigin: true, // 주소 변경
  })
);

// problem service 프록시
app.use(
  "/problems",
  createProxyMiddleware({
    target: "http://localhost:3002", // problem service 주소
    changeOrigin: true, // 주소 변경
  })
);

// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API Gateway가 실행중입니다 http://localhost:${PORT}`);
});
