"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// 임시 사용자 데이터
const users = [{ id: 1, name: "Jadyen", email: "gmkim716@gmail.com" }];
// 사용자 목록 조회
router.get("/", (req, res) => {
    res.json(users);
});
// 사용자 생성
router.post("/", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});
exports.default = router;
