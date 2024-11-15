"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const problems_1 = __importDefault(require("./routes/problems"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// 문제 라우트 등록
app.use("/problems", problems_1.default);
// 서버 시작
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Problem Service가 실행중입니다 http://localhost:${PORT}`);
});
