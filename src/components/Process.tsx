import { ArrowRight, CheckCircle2, Rocket, Settings, UserPlus } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Conecta tus Redes',
    description: 'Vincula todas tus cuentas sociales en menos de 2 minutos. Soporte para todas las plataformas principales.',
    color: 'from-blue-600 to-blue-400'
  },
  {
    icon: Settings,
    number: '02',
    title: 'Configura tu Estrategia',
    description: 'La IA analiza tu perfil y audiencia para crear una estrategia de contenido personalizada.',
    color: 'from-cyan-600 to-cyan-400'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Activa la Automatización',
    description: 'Deja que la IA trabaje por ti: crea, programa y optimiza contenido automáticamente.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Crece y Monetiza',
    description: 'Observa cómo tu audiencia crece mientras conviertes seguidores en ingresos consistentes.',
    color: 'from-cyan-500 to-blue-500'
  }
];

export default function Process() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30 mb-4">
            <Rocket className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-500">Proceso Simple</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            De Cero a Héroe en
            <span className="block bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
              4 Pasos Simples
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Configuración rápida, resultados inmediatos. Comienza a crecer tu presencia
            digital en minutos, no en meses.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-500 opacity-30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 border-2 border-gray-800 hover:border-pink-500 relative group">
                  {/* Number Badge */}
                  <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{step.description}</p>

                  {/* Arrow Indicator */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-pink-300" />
                    </div>
                  )}
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="w-8 h-8 text-pink-300 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gray-900 rounded-2xl p-12 shadow-xl border border-gray-800 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left flex-1">
                <h3 className="text-3xl font-bold mb-3 text-white">
                  ¿Listo para comenzar?
                </h3>
                <p className="text-lg text-gray-300">
                  Únete a miles de creadores que ya están automatizando su éxito.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="group bg-gradient-to-r from-pink-500 to-fuchsia-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 flex items-center space-x-2">
                  <span>Empezar Ahora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
