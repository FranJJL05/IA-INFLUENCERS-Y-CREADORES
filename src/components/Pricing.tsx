import { Zap } from 'lucide-react';

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
