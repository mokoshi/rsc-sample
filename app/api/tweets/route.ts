import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const { rows } = await sql`SELECT * FROM tweets WHERE id = ${id}`;
    return NextResponse.json(rows[0]);
  } else {
    const { rows } = await sql`SELECT * FROM tweets ORDER BY created_at DESC`;
    return NextResponse.json(rows);
  }
}
