'use client'

import { useState, useEffect } from 'react'
import { Wifi, WifiOff, AlertTriangle } from 'lucide-react'
import { cn } from '../lib/utils'

interface OfflineBannerProps {
  className?: string
}

export function OfflineBanner({ className }: OfflineBannerProps) {
  const [isOnline, setIsOnline] = useState(true)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      setShowBanner(true)
      // Hide banner after 3 seconds when coming back online
      setTimeout(() => setShowBanner(false), 3000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowBanner(true)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Check initial status
    setIsOnline(navigator.onLine)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (!showBanner) return null

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 px-4 py-3 text-lg font-semibold transition-all duration-300",
        isOnline
          ? "bg-green-600 text-white shadow-lg"
          : "bg-red-600 text-white shadow-lg animate-pulse",
        className
      )}
      role="status"
      aria-live="polite"
      aria-label={isOnline ? "Conexión restaurada" : "Sin conexión a internet"}
    >
      {isOnline ? (
        <>
          <Wifi className="h-6 w-6" />
          <span>Conexión restaurada - Sincronizando datos...</span>
        </>
      ) : (
        <>
          <WifiOff className="h-6 w-6" />
          <span>Sin conexión - Modo offline activado</span>
          <AlertTriangle className="h-6 w-6 ml-2" />
        </>
      )}
    </div>
  )
}