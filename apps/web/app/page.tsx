import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex" data-tour="welcome">
        <h1 className="text-display text-center text-high-contrast">
          🧑‍🌾 FedBase
        </h1>
        <p className="text-large text-center mt-4 text-high-contrast">
          Gestión Agrícola Offline-First
        </p>
      </div>

      <div className="relative flex place-items-center">
        <div className="text-center">
          <h2 className="text-heading-2 font-semibold mb-6 text-high-contrast">
            ¡Bienvenido a FedBase!
          </h2>
          <p className="text-body-large mb-8 max-w-2xl text-high-contrast">
            La plataforma agrícola más avanzada de Colombia.
            Gestiona tu finca de manera eficiente con herramientas offline-first,
            IA agrícola y marketplace integrado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-tour="start-demo" aria-label="Comenzar demostración de FedBase">
              Comenzar Demo
            </Button>
            <Button variant="outline" size="lg" aria-label="Ver documentación de FedBase">
              Ver Documentación
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <div
          className="group rounded-lg border border-transparent px-6 py-5 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-tour="offline-first"
          role="button"
          tabIndex={0}
          aria-label="Característica offline-first: funciona sin conexión a internet"
        >
          <h3 className="mb-3 text-lg font-semibold text-high-contrast">
            📱 Offline-First
          </h3>
          <p className="m-0 max-w-[30ch] text-body-large text-gray-700">
            Funciona sin internet. Captura datos y sincroniza automáticamente.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-6 py-5 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-tour="ai-features"
          role="button"
          tabIndex={0}
          aria-label="Inteligencia artificial agrícola para asesoramiento"
        >
          <h3 className="mb-3 text-lg font-semibold text-high-contrast">
            🤖 IA Agrícola
          </h3>
          <p className="m-0 max-w-[30ch] text-body-large text-gray-700">
            Asesor inteligente para manejo de plagas y optimización de cultivos.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-6 py-5 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-tour="marketplace"
          role="button"
          tabIndex={0}
          aria-label="Marketplace agrícola con blockchain"
        >
          <h3 className="mb-3 text-lg font-semibold text-high-contrast">
            🏪 Marketplace
          </h3>
          <p className="m-0 max-w-[30ch] text-body-large text-gray-700">
            Compra y vende productos agrícolas con tokenización blockchain.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-6 py-5 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-tour="analytics"
          role="button"
          tabIndex={0}
          aria-label="Análisis y reportes predictivos"
        >
          <h3 className="mb-3 text-lg font-semibold text-high-contrast">
            📊 Analytics
          </h3>
          <p className="m-0 max-w-[30ch] text-body-large text-gray-700">
            Dashboards predictivos y reportes automatizados.
          </p>
        </div>
      </div>

      {/* Additional navigation for user management */}
      <div className="w-full max-w-4xl mt-12">
        <h3 className="text-heading-3 text-center mb-6 text-high-contrast">
          Acceso Rápido
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className="inline-flex items-center gap-3 px-6 py-4 text-left rounded-lg border-2 border-gray-300 bg-transparent hover:bg-gray-50 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
            role="button"
            tabIndex={0}
            aria-label="Crear nuevo usuario en el sistema"
          >
            <span className="text-2xl">👥</span>
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-high-contrast">Crear Usuario</span>
              <p className="text-sm text-gray-600 mt-1">
                Registra nuevos usuarios en el sistema
              </p>
            </div>
          </div>
          <div
            className="inline-flex items-center gap-3 px-6 py-4 text-left rounded-lg border-2 border-gray-300 bg-transparent hover:bg-gray-50 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
            role="button"
            tabIndex={0}
            aria-label="Administrar accesos y permisos de usuarios"
          >
            <span className="text-2xl">⚙️</span>
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-high-contrast">Administrar Acceso</span>
              <p className="text-sm text-gray-600 mt-1">
                Gestiona permisos y roles de usuarios
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}