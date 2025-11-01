import { Bot, Target, TrendingUp, Zap, MessageSquare, BarChart3, User, Palette, BookOpen, Video, Gamepad2, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Creación de Contenido IA',
    description: 'Genera posts virales, videos y anuncios optimizados con inteligencia artificial avanzada.',
    color: 'from-blue-600 to-blue-400',
    features: ['Posts automáticos', 'Videos con IA', 'Copy persuasivo']
  },
  {
    icon: User,
    title: 'Influencer Virtual',
    description: 'Crea y gestiona tu propio influencer digital con IA que interactúa con tu audiencia 24/7.',
    color: 'from-purple-600 to-pink-500',
    features: ['Persona digital personalizada', '3x más engagement', 'Interacción en tiempo real']
  },
  {
    icon: Palette,
    title: 'Branding & Diseño',
    description: 'Desarrollo de identidad visual completa que refleja los valores únicos de tu marca.',
    color: 'from-orange-600 to-red-500',
    features: ['Diseño de marca', 'Elementos visuales', 'Experiencias memorables']
  },
  {
    icon: BookOpen,
    title: 'Storytelling Transmedia',
    description: 'Narrativas que conectan emocionalmente con tu audiencia en múltiples plataformas.',
    color: 'from-green-600 to-emerald-500',
    features: ['Narrativas envolventes', 'Multi-plataforma', 'Conexión emocional']
  },
  {
    icon: Video,
    title: 'Producción de Video',
    description: 'Videos de alta calidad que cuentan historias y generan conversiones reales.',
    color: 'from-red-600 to-pink-500',
    features: ['Estudio in-house', 'Video marketing', 'Producción completa']
  },
  {
    icon: Target,
    title: 'Estrategia & Publicidad',
    description: 'Estrategias de marketing personalizadas basadas en datos y tendencias del mercado.',
    color: 'from-blue-500 to-cyan-500',
    features: ['Estrategia de marca', 'Experiencia de cliente', 'Reputación digital']
  },
  {
    icon: Gamepad2,
    title: 'Marketing Gamificado',
    description: 'Experiencias interactivas y juegos personalizados que aumentan el engagement.',
    color: 'from-violet-600 to-purple-500',
    features: ['Juegos de marca', 'Experiencias interactivas', 'Engagement alto']
  },
  {
    icon: Zap,
    title: 'Automatización de Redes',
    description: 'Programa, publica y optimiza contenido en todas tus plataformas desde un solo lugar.',
    color: 'from-cyan-600 to-cyan-400',
    features: ['Multi-plataforma', 'Programación inteligente', 'Auto-respuestas']
  },
  {
    icon: TrendingUp,
    title: 'Gestión de Colaboraciones',
    description: 'Conecta con marcas, automatiza outreach y gestiona partnerships desde una plataforma.',
    color: 'from-blue-600 to-cyan-600',
    features: ['Database de marcas', 'Outreach automatizado', 'Gestión de contratos']
  },
  {
    icon: MessageSquare,
    title: 'Social Media & Influencia',
    description: 'Campañas virales con videos, AI influencers y gamificación para máximo impacto.',
    color: 'from-cyan-500 to-blue-500',
    features: ['Campañas virales', 'AI influencers', 'Contenido trendy']
  },
  {
    icon: BarChart3,
    title: 'Analytics Avanzado',
    description: 'Dashboard completo con insights accionables y predicciones de crecimiento con IA.',
    color: 'from-blue-400 to-cyan-400',
    features: ['Métricas en tiempo real', 'Predicción de tendencias', 'Reportes automáticos']
  },
  {
    icon: DollarSign,
    title: 'Publicidad Digital',
    description: 'Anuncios basados en storytelling que destacan y generan conversiones memorables.',
    color: 'from-yellow-600 to-orange-500',
    features: ['Ads creativos', 'Storytelling publicitario', 'ROI optimizado']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30 mb-4">
            <Zap className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-500">Servicios Integrales</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Todo lo que necesitas para
            <span className="block bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
              Dominar las Redes Sociales
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una suite completa de herramientas potenciadas por IA para automatizar,
            optimizar y escalar tu presencia digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 border border-gray-800 hover:border-pink-500"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-pink-500 font-semibold text-sm group-hover:text-fuchsia-400 transition-colors flex items-center space-x-1">
                <span>Explorar más</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-fuchsia-400 rounded-2xl p-12 text-white relative overflow-hidden shadow-xl shadow-pink-500/30">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para revolucionar tu estrategia digital?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Únete a miles de creadores que ya están creciendo más rápido con nuestra plataforma.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 border border-white/20">
                Empezar Prueba Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
