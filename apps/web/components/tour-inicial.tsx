'use client'

import { TourProvider, useTour } from '@reactour/tour'
import { Button } from '../components/ui/button'
import { useEffect, useState } from 'react'

const TourContent = () => {
  const { setIsOpen, setCurrentStep, steps, currentStep } = useTour()
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    // Check if user has seen the tour before
    const hasSeenTour = localStorage.getItem('fedbase-tour-seen')
    if (!hasSeenTour) {
      setIsFirstVisit(true)
      setIsOpen(true)
    }
  }, [setIsOpen])

  const handleSkip = () => {
    setIsOpen(false)
    localStorage.setItem('fedbase-tour-seen', 'true')
  }

  const handleFinish = () => {
    setIsOpen(false)
    localStorage.setItem('fedbase-tour-seen', 'true')
  }

  if (!isFirstVisit) return null

  return null // Tour is handled by TourProvider
}

const tourSteps = [
  {
    selector: '[data-tour="welcome"]',
    content: (
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">¡Bienvenido a FedBase!</h3>
        <p className="text-lg mb-4">
          La plataforma agrícola más avanzada de Colombia.
          Te guiaremos por las funciones principales.
        </p>
        <Button onClick={() => {}} className="text-lg px-6 py-3">
          Continuar
        </Button>
      </div>
    ),
  },
  {
    selector: '[data-tour="offline-first"]',
    content: (
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">📱 Funciona Sin Internet</h3>
        <p className="text-lg mb-4">
          Captura datos y sincroniza automáticamente cuando tengas conexión.
        </p>
      </div>
    ),
  },
  {
    selector: '[data-tour="ai-features"]',
    content: (
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">🤖 IA Agrícola</h3>
        <p className="text-lg mb-4">
          Asesor inteligente para manejo de plagas y optimización de cultivos.
        </p>
      </div>
    ),
  },
  {
    selector: '[data-tour="marketplace"]',
    content: (
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">🏪 Marketplace</h3>
        <p className="text-lg mb-4">
          Compra y vende productos agrícolas con tokenización blockchain.
        </p>
      </div>
    ),
  },
  {
    selector: '[data-tour="analytics"]',
    content: (
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">📊 Analytics</h3>
        <p className="text-lg mb-4">
          Dashboards predictivos y reportes automatizados.
        </p>
      </div>
    ),
  },
  {
    selector: '[data-tour="start-demo"]',
    content: (
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">¡Listo para Empezar!</h3>
        <p className="text-lg mb-4">
          Haz clic en "Comenzar Demo" para explorar todas las funciones.
        </p>
      </div>
    ),
  },
]

export const TourInicialProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TourProvider
      steps={tourSteps}
      onClickMask={() => {}}
      showCloseButton={false}
      showNavigation={true}
      showPrevNextButtons={true}
      showBadge={false}
      styles={{
        popover: (base) => ({
          ...base,
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          fontSize: '16px',
          lineHeight: '1.5',
        }),
        maskArea: (base) => ({
          ...base,
          rx: 12,
        }),
        maskWrapper: (base) => ({
          ...base,
          color: 'rgba(0, 0, 0, 0.7)',
        }),
        controls: (base) => ({
          ...base,
          marginTop: '20px',
        }),
        button: (base, { type }) => ({
          ...base,
          backgroundColor: type === 'primary' ? '#1E824C' : 'transparent',
          color: type === 'primary' ? 'white' : '#1E824C',
          border: type === 'secondary' ? '2px solid #1E824C' : 'none',
          borderRadius: '8px',
          fontSize: '16px',
          padding: '12px 24px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }),
      }}
      nextButton={({ currentStep, stepsLength, setCurrentStep }) => {
        const last = currentStep === stepsLength - 1
        return (
          <Button
            onClick={() => {
              if (last) {
                localStorage.setItem('fedbase-tour-seen', 'true')
              }
              setCurrentStep(currentStep + 1)
            }}
            className="text-lg px-6 py-3"
          >
            {last ? '¡Comenzar!' : 'Siguiente'}
          </Button>
        )
      }}
      prevButton={({ currentStep, setCurrentStep }) => (
        <Button
          variant="outline"
          onClick={() => setCurrentStep(currentStep - 1)}
          className="text-lg px-6 py-3 mr-4"
        >
          Anterior
        </Button>
      )}
    >
      <TourContent />
      {children}
    </TourProvider>
  )
}