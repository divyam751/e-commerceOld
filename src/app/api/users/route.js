export async function GET(req) {
  return NextResponse.json({ msg: "Users get request" }, { status: 200 });
}
export async function POST(req) {
  return NextResponse.json({ msg: "Successful post request" }, { status: 201 });
}
