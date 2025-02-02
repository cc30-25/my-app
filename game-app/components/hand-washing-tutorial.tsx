"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, ThumbsUp, Clock } from "lucide-react"

const steps = [
  { name: "Wet Hands", duration: 5, icon: "💧" },
  { name: "Apply Soap", duration: 5, icon: "🧼" },
  { name: "Rub Palms", duration: 5, icon: "🤲" },
  { name: "Back of Hands", duration: 5, icon: "🖐️" },
  { name: "Between Fingers", duration: 5, icon: "🖖" },
  { name: "Fingernails", duration: 5, icon: "💅" },
  { name: "Thumbs", duration: 5, icon: "👍" },
  { name: "Rinse", duration: 10, icon: "🚰" },
  { name: "Dry", duration: 5, icon: "🧻" },
]

const HandWashingTutorial = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [timer, setTimer] = useState(steps[0].duration)
  const [score, setScore] = useState(0)
  const [isWashing, setIsWashing] = useState(false)

  useEffect(() => {
    if (isWashing) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 1) {
            return prevTimer - 1
          } else {
            clearInterval(interval)
            if (currentStep < steps.length - 1) {
              setCurrentStep((prevStep) => prevStep + 1)
              setTimer(steps[currentStep + 1].duration)
              setScore((prevScore) => prevScore + 10)
            } else {
              setIsWashing(false)
            }
            return 0
          }
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isWashing, currentStep])

  const startWashing = () => {
    setIsWashing(true)
    setCurrentStep(0)
    setTimer(steps[0].duration)
    setScore(0)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-blue-600 text-white p-6 text-center">
          <h1 className="text-4xl font-bold mb-2">Fun Hand Washing Tutorial</h1>
          <p className="text-xl">Let's make hand washing exciting!</p>
        </div>
        <div className="p-6">
          {!isWashing ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-lg mx-auto block"
              onClick={startWashing}
            >
              Start Washing!
            </motion.button>
          ) : (
            <div className="text-center">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="text-6xl mb-4"
              >
                {steps[currentStep].icon}
              </motion.div>
              <h2 className="text-3xl font-bold mb-4">{steps[currentStep].name}</h2>
              <div className="flex justify-center items-center space-x-4 mb-6">
                <Clock className="w-6 h-6" />
                <div className="text-2xl font-bold">{timer}s</div>
              </div>
              <motion.div
                className="h-4 bg-blue-200 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: steps[currentStep].duration }}
              >
                <motion.div
                  className="h-full bg-blue-600"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: steps[currentStep].duration }}
                />
              </motion.div>
            </div>
          )}
        </div>
        <div className="bg-gray-100 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <span className="text-2xl font-bold">Score: {score}</span>
          </div>
          <div className="flex items-center space-x-2">
            <ThumbsUp className="w-6 h-6 text-green-500" />
            <span className="text-xl">Great job!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HandWashingTutorial

