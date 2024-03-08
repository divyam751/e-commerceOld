import { dbConnect } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import UserModel from "@/models/user";
export async function GET(req) {
  dbConnect();
  const data = await UserModel.find();
  return NextResponse.json({ data: data }, { status: 200 });
}
export async function POST(req) {
  return NextResponse.json({ msg: "Successful post request" }, { status: 201 });
}
