import { NextResponse } from "next/server"

export async function GET() {
  // This is where you would typically fetch data from a database
  // For now, we'll just return some mock data
  const data = [
    { id: 1, score: 85 },
    { id: 2, score: 92 },
    { id: 3, score: 78 },
    { id: 4, score: 95 },
    { id: 5, score: 89 },
    { id: 6, score: 97 },
    { id: 7, score: 91 },
    { id: 8, score: 84 },
    { id: 9, score: 88 },
    { id: 10, score: 93 },
  ]



  return NextResponse.json(data)
}

