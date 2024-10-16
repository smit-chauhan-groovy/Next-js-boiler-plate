import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb"; // Adjust path as needed
import Item from "../../models/item"; // Adjust path as needed

// This handles POST requests
export async function POST(req) {
  await dbConnect(); // Connect to the database

  try {
    const body = await req.json(); // Parse the JSON request body
    const item = await Item.create(body); // Mongoose create method

    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
