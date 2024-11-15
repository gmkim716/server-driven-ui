import { Router, Request, Response } from "express";

const router: Router = Router();

// 임시 사용자 데이터
const users = [{ id: 1, name: "Gyeongmin Kim", email: "gmkim716@gmail.com" }];

// 사용자 목록 조회
router.get("/", (req: Request, res: Response) => {
  res.json(users);
});

// 사용자 생성
router.post("/", (req: Request, res: Response) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;
