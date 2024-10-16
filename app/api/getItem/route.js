import dbConnect from "../../../lib/mongodb";
import Item from "../../models/item";

export async function GET() {
  await dbConnect();
  const items = await Item.find(); // Fetch items from the database
  return new Response(JSON.stringify(items), { status: 200 });
}
