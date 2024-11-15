import Header from "./Header";

export default function ProblemHeader() {
  return (
    <Header bgColor="#F4F7F9">
      <div className="flex justify-between w-full">
        <div className="flex">
          <div>홈으로 이동하는 로고</div>
          <div>문제제목</div>
          <div>단계 표시</div>
        </div>
        <div className="flex">
          <div>언어설정</div>
          <div>기여포인트</div>
          <div>언어설정</div>
          <div>유저</div>
        </div>
      </div>
    </Header>
  );
}
