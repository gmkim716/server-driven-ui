// import path from "path";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const filePath = path.join(process.cwd(), "public/json", "mission.json");

//   try {
//     const jsonData = f.readFileSync(filePath, "utf-8");
//     const data = JSON.parse(jsonData);
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "파일을 읽을 수 없습니다." },
//       { status: 500 }
//     );
//   }
// }
