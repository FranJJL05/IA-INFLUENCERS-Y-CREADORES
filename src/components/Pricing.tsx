import { Check, Sparkles, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
    price: '29',
    description: 'Perfecto para creadores emergentes que comienzan su viaje.',
    color: 'from-blue-600 to-blue-400',
    popular: false,
    features: [
      '3 cuentas sociales',
      '50 posts con IA/mes',
      'Programación básica',
      'Analytics básicos',
      'Soporte por email',
      'Templates de contenido'
    ]
  },
  {
    name: 'Professional',
    icon: Zap,
    price: '79',
    description: 'Ideal para creadores establecidos que buscan escalar.',
    color: 'from-cyan-600 to-blue-500',
    popular: true,
    features: [
      '10 cuentas sociales',
      'Posts ilimitados con IA',
      'Automatización avanzada',
      'Analytics profesionales',
      'Embudos de marketing',
      'Gestión de colaboraciones',
      'Soporte prioritario 24/7',
      'Predicción de tendencias',
      'A/B Testing automático'
    ]
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: '199',
    description: 'Solución completa para agencias y creadores top.',
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    features: [
      'Cuentas ilimitadas',
      'Todo lo de Professional',
      'Equipo colaborativo',
      'API personalizada',
      'Manager dedicado',
      'Capacitación 1-a-1',
      'Workflows personalizados',
      'White-label disponible',
      'SLA garantizado',
      'Integración personalizada'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30 mb-4">
            <Zap className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-500">Precios Transparentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Planes que Escalan
            <span className="block bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
              Contigo
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Contacta con Nosotros para una consultoría personalizada y generarte el mejor plan.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            Contacta con Nosotros para Más Información
          </a>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-pink-500 to-fuchsia-400 text-white shadow-2xl scale-105 border-4 border-pink-500/30'
                  : 'bg-gray-900 border-2 border-gray-800 hover:border-pink-500'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                  Más Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${
                plan.popular ? 'bg-black/20' : `bg-gradient-to-br ${plan.color}`
              } flex items-center justify-center mb-6`}>
                <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-white' : 'text-white'}`} />
              </div>

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-white'}`}>
                {plan.name}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-6 ${plan.popular ? 'text-pink-100' : 'text-gray-300'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-white'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-lg ml-2 mb-1 ${plan.popular ? 'text-pink-100' : 'text-gray-300'}`}>
                    /mes
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                plan.popular
                  ? 'bg-black text-white hover:shadow-xl hover:scale-105 border border-white/20'
                  : 'bg-gradient-to-r from-pink-500 to-fuchsia-400 text-white hover:shadow-lg hover:shadow-pink-500/50'
              }`}>
                {plan.popular ? 'Comenzar Ahora' : 'Seleccionar Plan'}
              </button>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full ${
                      plan.popular ? 'bg-black/20' : 'bg-pink-100'
                    } flex items-center justify-center flex-shrink-0`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-pink-500'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-pink-50' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-900 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Preguntas Frecuentes
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: '¿Puedo cambiar de plan en cualquier momento?',
                a: 'Sí, puedes actualizar o degradar tu plan cuando quieras sin penalizaciones.'
              },
              {
                q: '¿Ofrecen garantía de devolución?',
                a: 'Ofrecemos 14 días de garantía de devolución sin preguntas.'
              },
              {
                q: '¿Hay cargos ocultos?',
                a: 'No. El precio que ves es el precio que pagas. Sin sorpresas.'
              },
              {
                q: '¿Necesito tarjeta de crédito para probar?',
                a: 'No, puedes comenzar con nuestra prueba gratuita sin ingresar datos de pago.'
              }
            ].map((faq, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
