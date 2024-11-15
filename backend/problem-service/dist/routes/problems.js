"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// 임시 문제 데이터
const problems = [
    { id: 1, title: "two sum", difficulty: "easy" },
    {
        id: 2,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "medium",
    },
];
// 문제 목록 조회
router.get("/", (re, res) => {
    res.json(problems);
});
// 문제 생성
router.post("/", (req, res) => {
    const newProblem = req.body;
    problems.push(newProblem);
    res.status(201).json(newProblem);
});
exports.default = router;
