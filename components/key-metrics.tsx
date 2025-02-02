"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"

export function KeyMetrics() {
  const [metrics, setMetrics] = useState({
    averageScore: 0,
    lowestScore: 0,
    highestScore: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("/api/handwashing")
      .then((response) => response.json())
      .then((data) => {
        const scores = data.map((item: { score: number }) => item.score)
        setMetrics({
          averageScore: scores.reduce((a: number, b: number) => a + b, 0) / scores.length,
          lowestScore: Math.min(...scores),
          highestScore: Math.max(...scores),
        })
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Average Score</h3>
            <p className="text-3xl font-bold text-blue-600">{metrics.averageScore.toFixed(1)}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Lowest Score</h3>
            <p className="text-3xl font-bold text-red-500">{metrics.lowestScore}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Highest Score</h3>
            <p className="text-3xl font-bold text-green-500">{metrics.highestScore}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

