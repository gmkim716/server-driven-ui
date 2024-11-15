"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// 사용자 라우트 등록
app.use("/users", users_1.default);
// 서버 시작
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`User Service running on http://localhost:${PORT}`);
});
