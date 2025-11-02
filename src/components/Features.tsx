import { Brain, Clock, Globe, Lock, Repeat, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'IA Generativa Avanzada',
    description: 'Nuestra IA aprende de tu estilo único y genera contenido que resuena con tu audiencia.',
  },
  {
    icon: Clock,
    title: 'Ahorra 30+ Horas/Semana',
    description: 'Automatiza tareas repetitivas y enfócate en lo que realmente importa: tu creatividad.',
  },
  {
    icon: Globe,
    title: 'Multi-Plataforma Total',
    description: 'Gestiona Instagram, TikTok, YouTube, Twitter y más desde un solo dashboard.',
  },
  {
    icon: Repeat,
    title: 'Workflows Personalizados',
    description: 'Crea flujos de trabajo automáticos adaptados a tu estrategia única de crecimiento.',
  },
  {
    icon: Lock,
    title: 'Seguridad Empresarial',
    description: 'Protección de datos nivel empresarial con encriptación end-to-end.',
  },
  {
    icon: Sparkles,
    title: 'Optimización Continua',
    description: 'La IA optimiza constantemente tu estrategia basándose en resultados reales.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-fuchsia-500/20 px-4 py-2 rounded-full border border-fuchsia-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            <span className="text-sm font-medium text-fuchsia-400">Características Poderosas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Tecnología de Vanguardia
            <span className="block bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
              al Servicio de tu Creatividad
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative p-8 rounded-2xl border border-gray-800 group-hover:border-pink-500 transition-all duration-300 bg-gray-900">
                <feature.icon className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Dashboard Intuitivo con
              <span className="block bg-gradient-to-r from-pink-600 to-fuchsia-500 bg-clip-text text-transparent">
                Insights Accionables
              </span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Visualiza métricas clave, identifica tendencias y toma decisiones informadas
              con nuestro dashboard diseñado para creadores modernos.
            </p>

            <div className="space-y-4">
              {[
                'Análisis predictivo de engagement',
                'Recomendaciones de contenido personalizadas',
                'Identificación automática de mejores horarios',
                'Comparación con competencia y tendencias'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-pink-500 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
              Explorar Dashboard
            </button>
          </div>

          {/* Visual Representation */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-4 w-32 bg-gray-700 rounded" />
                  <div className="h-8 w-24 bg-gradient-to-r from-pink-500 to-fuchsia-400 rounded-lg" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Engagement', value: '+245%', trend: 'up' },
                    { label: 'Alcance', value: '1.2M', trend: 'up' },
                    { label: 'Conversión', value: '8.4%', trend: 'up' }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-black rounded-xl p-4 shadow-sm border border-gray-800">
                      <div className="h-2 w-16 bg-gray-700 rounded mb-2" />
                      <div className="h-6 w-full bg-gradient-to-r from-pink-500 to-fuchsia-400 rounded mb-1" />
                      <div className="flex items-center space-x-1">
                        <div className="h-2 w-2 bg-green-500 rounded-full" />
                        <div className="h-2 w-12 bg-green-200 rounded" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-black rounded-xl p-4 shadow-sm border border-gray-800">
                  <div className="h-3 w-24 bg-gray-700 rounded mb-3" />
                  <div className="h-40 bg-gradient-to-t from-pink-100 via-fuchsia-50 to-transparent rounded-lg relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 300 160" preserveAspectRatio="none">
                      <path
                        d="M 0 120 Q 75 80 150 90 T 300 40"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#db2777" />
                          <stop offset="100%" stopColor="#c026d3" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gray-900 p-3 rounded-xl shadow-lg animate-pulse border border-pink-500">
              <Brain className="w-6 h-6 text-pink-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gray-900 p-3 rounded-xl shadow-lg border border-fuchsia-500">
              <Sparkles className="w-6 h-6 text-fuchsia-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}