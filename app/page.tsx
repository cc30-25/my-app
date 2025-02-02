import { JustWashTitle } from "@/components/just-wash-title"
import { HandwashingGraph } from "@/components/handwashing-graph"
import { KeyMetrics } from "@/components/key-metrics"

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <JustWashTitle />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <HandwashingGraph />
          </div>
          <div>
            <KeyMetrics />
          </div>
        </div>
      </div>
    </main>
  )
}

