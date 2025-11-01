import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">Calificación 4.9/5 por +10,000 creadores</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Transforma tu
              <span className="block bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                Presencia Digital
              </span>
              Hoy Mismo
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Únete a la revolución de creadores que están creciendo más rápido,
              trabajando menos y ganando más con automatización inteligente.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                '14 días de prueba gratuita, sin tarjeta requerida',
                'Configuración en menos de 5 minutos',
                'Soporte dedicado en español 24/7',
                'Cancela cuando quieras, sin compromiso'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Comenzar Gratis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Agendar Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Creadores Activos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10M+</div>
                <div className="text-sm text-gray-400">Posts Generados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Comienza Tu Prueba Gratuita
              </h3>
              <p className="text-gray-600">
                Sin tarjeta de crédito. Acceso completo por 14 días.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Plataforma Principal
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all">
                  <option>Selecciona una opción</option>
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>YouTube</option>
                  <option>Twitter</option>
                  <option>Múltiples Plataformas</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
              >
                Crear Mi Cuenta Gratis
              </button>

              <p className="text-xs text-gray-500 text-center">
                Al registrarte, aceptas nuestros Términos de Servicio y Política de Privacidad
              </p>
            </form>

            {/* Social Proof */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 text-center">
                "Increíble herramienta. Triplicó mi engagement en 2 semanas"
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                - María G., Content Creator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
