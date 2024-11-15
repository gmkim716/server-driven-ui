export default function Header({
  children,
  bgColor,
}: {
  children: React.ReactNode;
  bgColor?: string;
}) {
  return (
    <header
      className="min-h-[50px] flex items-center"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </header>
  );
}
