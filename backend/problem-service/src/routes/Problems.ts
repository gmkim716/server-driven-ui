import { Router, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Problem } from "../entity/problem";
import { ProblemService } from "../services/problemService";
import { sendErrorResponse, handleError } from "../utils/errorHandlers";
import { getUserById } from "../services/userClient";

const router: Router = Router();
const problemRepository = AppDataSource.getRepository(Problem);
const problemService = new ProblemService(problemRepository);

// 문제 목록 조회
router.get("/:id", async (req, res) => {
  try {
    const problemId = Number(req.params.id);
    const problem = await problemService.getProblemById(problemId);

    if (!problem) {
      res
        .status(404)
        .json({ status: "error", message: "문제를 찾을 수 없습니다." });
      return;
    }

    const user = await getUserById(problem.userId); // 사용자 정보 요청
    res.status(200).json({ status: "success", data: { problem, user } });
  } catch (error) {
    handleError(res, "문제 조회 중 오류가 발생했습니다.", error);
  }
});

// 문제 생성
router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, description, userId } = req.body;

    if (!title || !description || !userId) {
      sendErrorResponse(res, "제목, 설명, 사용자 ID는 필수입니다.", 400);
      return;
    }

    const user = await getUserById(userId); // 사용자 정보 요청
    if (!user) {
      sendErrorResponse(res, "유효한 사용자 ID를 입력해주세요.", 400);
      return;
    }

    const newProblem = await problemService.createProblem(
      title,
      description,
      userId
    );
    res.status(201).json({ status: "success", data: newProblem });
  } catch (error) {
    handleError(res, "문제 생성 중 오류가 발생했습니다.", error);
  }
});

// 문제 삭제
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      sendErrorResponse(res, "유효한 문제 ID를 입력해주세요.", 400);
      return;
    }

    await problemService.deleteProblem(id);
    res
      .status(200)
      .json({ status: "success", message: "문제를 삭제했습니다." });
  } catch (error) {
    handleError(res, "문제 삭제 중 오류가 발생했습니다.", error);
  }
});

export default router;
