import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb"; // Adjust path as needed
import Item from "../../models/item"; // Adjust path as needed

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const item = await Item.create(body);

    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
