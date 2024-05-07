import { NextResponse } from "next/server";
//  in Next.js, you can only have one export default per module/file. So here we do not write export default
export function GET() {
  return NextResponse.json({
    hello: "trello",
  });
}
export function POST() {
  return NextResponse.json({
    hello: "trello",
  });
}
export function PATCH() {
  return NextResponse.json({
    hello: "trello",
  });
}
