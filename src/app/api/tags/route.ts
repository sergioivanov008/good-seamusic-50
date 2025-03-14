export const dynamic = 'force-static'

import { prisma } from "../../../../prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const tags = await prisma.tags.findMany();

  return NextResponse.json(tags);
}