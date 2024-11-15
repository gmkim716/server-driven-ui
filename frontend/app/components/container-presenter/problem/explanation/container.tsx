import ProblemExplanationPresenter from "./presenter";

export default async function ProblemExplanationContainer() {
  const response = await fetch(
    "http://localhost:3000/json/print-number-from-given-num-to-100-explanation.json"
  );
  const data = await response.json();

  return (
    <div>
      <ProblemExplanationPresenter data={data} />
    </div>
  );
}
