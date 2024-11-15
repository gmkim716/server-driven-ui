import CodeEditor from "../component/CodeEditor";
import SelectLabels from "../ui/SelectLabels";
import SwitchUI from "../ui/Switch";

export default function ProblemSubLayoutHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-200">
      <SelectLabels />
      <SwitchUI />
      <CodeEditor />
      {children}
    </div>
  );
}
