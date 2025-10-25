'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Circle, Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'

export interface Step {
  id: string
  title: string
  description?: string
  completed?: boolean
  current?: boolean
  error?: boolean
}

interface ProgressIndicatorProps {
  steps: Step[]
  className?: string
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
}

export function ProgressIndicator({
  steps,
  className,
  orientation = 'horizontal',
  size = 'md'
}: ProgressIndicatorProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  useEffect(() => {
    const currentIndex = steps.findIndex(step => step.current)
    if (currentIndex !== -1) {
      setCurrentStepIndex(currentIndex)
    }
  }, [steps])

  const sizeClasses = {
    sm: {
      container: 'gap-2',
      step: 'w-8 h-8',
      icon: 'w-4 h-4',
      text: 'text-sm',
      line: 'h-0.5'
    },
    md: {
      container: 'gap-4',
      step: 'w-10 h-10',
      icon: 'w-5 h-5',
      text: 'text-base',
      line: 'h-1'
    },
    lg: {
      container: 'gap-6',
      step: 'w-12 h-12',
      icon: 'w-6 h-6',
      text: 'text-lg',
      line: 'h-1.5'
    }
  }

  const classes = sizeClasses[size]

  if (orientation === 'vertical') {
    return (
      <div className={cn("flex flex-col", classes.container, className)}>
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "rounded-full border-2 flex items-center justify-center transition-all duration-300",
                  classes.step,
                  step.completed
                    ? "bg-green-600 border-green-600 text-white"
                    : step.error
                    ? "bg-red-600 border-red-600 text-white"
                    : step.current
                    ? "bg-blue-600 border-blue-600 text-white animate-pulse"
                    : "bg-gray-100 border-gray-300 text-gray-400"
                )}
                aria-label={`Paso ${index + 1}: ${step.title}`}
                role="status"
              >
                {step.completed ? (
                  <CheckCircle className={classes.icon} />
                ) : step.error ? (
                  <Circle className={classes.icon} />
                ) : step.current ? (
                  <Loader2 className={cn(classes.icon, "animate-spin")} />
                ) : (
                  <Circle className={classes.icon} />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-0.5 flex-1 mt-2 transition-colors duration-300",
                    step.completed ? "bg-green-600" : "bg-gray-300"
                  )}
                />
              )}
            </div>
            <div className="flex-1 pt-1">
              <h3
                className={cn(
                  "font-semibold",
                  classes.text,
                  step.completed
                    ? "text-green-700"
                    : step.error
                    ? "text-red-700"
                    : step.current
                    ? "text-blue-700"
                    : "text-gray-500"
                )}
              >
                {step.title}
              </h3>
              {step.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center", classes.container, className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={cn(
              "rounded-full border-2 flex items-center justify-center transition-all duration-300",
              classes.step,
              step.completed
                ? "bg-green-600 border-green-600 text-white"
                : step.error
                ? "bg-red-600 border-red-600 text-white"
                : step.current
                ? "bg-blue-600 border-blue-600 text-white animate-pulse"
                : "bg-gray-100 border-gray-300 text-gray-400"
            )}
            aria-label={`Paso ${index + 1}: ${step.title}`}
            role="status"
          >
            {step.completed ? (
              <CheckCircle className={classes.icon} />
            ) : step.error ? (
              <Circle className={classes.icon} />
            ) : step.current ? (
              <Loader2 className={cn(classes.icon, "animate-spin")} />
            ) : (
              <Circle className={classes.icon} />
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "flex-1 mx-2 transition-colors duration-300",
                classes.line,
                step.completed ? "bg-green-600" : "bg-gray-300"
              )}
            />
          )}
        </div>
      ))}
    </div>
  )
}