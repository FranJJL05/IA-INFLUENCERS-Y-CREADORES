import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function SEOSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const services = [
    {
      title: 'Creación de Contenido con Inteligencia Artificial',
      description: 'Generación automática de posts virales, videos marketing, copy persuasivo, contenido para redes sociales, anuncios digitales, storytelling, narrativas transmedia, guiones creativos, diseño gráfico automatizado, templates personalizados, contenido evergreen, engagement optimization, viral content creation, social media content, automated posting, content calendar, editorial planning, brand voice consistency, multimedia content, visual storytelling.',
      keywords: ['contenido IA', 'posts automáticos', 'videos con IA', 'copy persuasivo', 'generador de contenido', 'marketing automation', 'content creation', 'viral posts', 'social media automation']
    },
    {
      title: 'Influencer Virtual e IA Conversacional',
      description: 'Desarrollo de influencers digitales, avatares virtuales, asistentes con IA, chatbots inteligentes, personalidades digitales, interacción automatizada 24/7, engagement en tiempo real, respuestas personalizadas, community management automatizado, AI personas, virtual brand ambassadors, digital influencers, automated customer service, conversational AI, natural language processing, sentiment analysis, chat automation, social listening.',
      keywords: ['influencer virtual', 'IA conversacional', 'chatbot', 'avatar digital', 'asistente virtual', 'community management', 'engagement automatizado', 'AI influencer']
    },
    {
      title: 'Branding y Diseño de Identidad Visual',
      description: 'Desarrollo de marca, identidad corporativa, diseño de logos, paletas de colores, tipografías corporativas, manual de marca, brand guidelines, diseño de packaging, diseño editorial, material publicitario, branding digital, brand positioning, visual identity, corporate design, logo design, color theory, typography, brand consistency, visual communication, creative direction, art direction.',
      keywords: ['branding', 'identidad visual', 'diseño de marca', 'logo design', 'identidad corporativa', 'manual de marca', 'brand identity', 'diseño gráfico']
    },
    {
      title: 'Storytelling Transmedia y Narrativas Digitales',
      description: 'Creación de narrativas envolventes, storytelling emocional, campañas transmedia, contenido multiplataforma, experiencias narrativas, guiones creativos, historias de marca, brand storytelling, emotional marketing, narrative design, cross-platform content, multimedia storytelling, user journey, customer experience, content strategy, narrative structure, creative writing, brand stories.',
      keywords: ['storytelling', 'transmedia', 'narrativas digitales', 'historias de marca', 'contenido multiplataforma', 'marketing emocional', 'brand story']
    },
    {
      title: 'Producción de Video y Marketing Audiovisual',
      description: 'Producción de videos profesionales, video marketing, spots publicitarios, reels, TikToks, YouTube content, motion graphics, animación 2D/3D, edición de video, post-producción, colorización, efectos visuales, video corporativo, testimoniales, product demos, video ads, social media videos, live streaming, video SEO, YouTube optimization, video content strategy.',
      keywords: ['producción de video', 'video marketing', 'spots publicitarios', 'edición de video', 'motion graphics', 'animación', 'reels', 'TikTok', 'YouTube']
    },
    {
      title: 'Estrategia Digital y Publicidad en Redes Sociales',
      description: 'Estrategia de marketing digital, planificación de campañas, análisis de mercado, investigación de audiencia, buyer personas, customer journey mapping, marketing funnel, conversion optimization, social media strategy, paid advertising, Facebook Ads, Instagram Ads, TikTok Ads, Google Ads, LinkedIn Ads, programmatic advertising, retargeting, remarketing, ad optimization.',
      keywords: ['estrategia digital', 'marketing digital', 'publicidad online', 'social ads', 'Facebook Ads', 'Instagram Ads', 'Google Ads', 'campaña publicitaria']
    },
    {
      title: 'Marketing Gamificado y Experiencias Interactivas',
      description: 'Gamificación empresarial, juegos de marca, experiencias interactivas, concursos digitales, trivias, challenges, engagement gamification, loyalty programs, reward systems, interactive content, branded games, social media contests, viral campaigns, user engagement, interactive marketing, game mechanics, points systems, leaderboards, badges, achievements.',
      keywords: ['gamificación', 'marketing gamificado', 'juegos de marca', 'experiencias interactivas', 'concursos digitales', 'engagement', 'interactive marketing']
    },
    {
      title: 'Automatización de Redes Sociales y Social Media Management',
      description: 'Automatización de publicaciones, programación de contenido, gestión multicanal, social media scheduling, auto-posting, content distribution, cross-posting, social media calendar, automated responses, inbox management, social media monitoring, analytics automation, reporting automation, social media tools, buffer, hootsuite alternative, scheduling tools, content planning.',
      keywords: ['automatización redes sociales', 'programación contenido', 'social media management', 'gestión redes sociales', 'scheduling', 'auto-posting', 'content automation']
    },
    {
      title: 'Gestión de Colaboraciones y Partnership Marketing',
      description: 'Influencer marketing, gestión de colaboraciones, outreach automatizado, partnership management, affiliate marketing, brand partnerships, colaboraciones estratégicas, contratos de colaboración, negotiation automation, influencer database, campaign management, ROI tracking, performance metrics, collaboration tools, partner onboarding, relationship management.',
      keywords: ['gestión colaboraciones', 'influencer marketing', 'partnerships', 'affiliate marketing', 'colaboraciones marcas', 'outreach', 'partnership management']
    },
    {
      title: 'Social Media Marketing y Gestión de Influencia Digital',
      description: 'Social media marketing, gestión de influencers, campañas virales, trending topics, viral marketing, meme marketing, user generated content, UGC campaigns, social proof, brand advocacy, ambassador programs, micro-influencers, nano-influencers, influencer campaigns, social media growth, follower growth, engagement rate optimization, social media presence.',
      keywords: ['social media marketing', 'marketing de influencers', 'campañas virales', 'viral marketing', 'gestión influencers', 'trending content', 'UGC']
    },
    {
      title: 'Analytics Avanzado y Business Intelligence',
      description: 'Análisis de datos, métricas de rendimiento, KPI tracking, dashboard analytics, data visualization, predictive analytics, trend analysis, competitive analysis, market research, social media analytics, engagement metrics, conversion tracking, ROI measurement, attribution modeling, A/B testing, performance optimization, data-driven marketing, insights accionables.',
      keywords: ['analytics', 'análisis de datos', 'métricas', 'KPI', 'business intelligence', 'data analytics', 'performance tracking', 'social media metrics']
    },
    {
      title: 'Publicidad Digital y Performance Marketing',
      description: 'Publicidad digital performance, anuncios optimizados, ad campaigns, media buying, programmatic advertising, display ads, video ads, social ads, search ads, native advertising, sponsored content, ad creative, ad copywriting, landing pages, conversion optimization, CRO, growth hacking, user acquisition, customer acquisition cost, ROAS optimization.',
      keywords: ['publicidad digital', 'performance marketing', 'anuncios online', 'media buying', 'ad campaigns', 'growth hacking', 'conversion optimization', 'ROAS']
    }
  ];

  const automationOptions = [
    {
      category: 'Automatización de Contenido',
      features: ['Generación automática de posts con IA', 'Programación de publicaciones multicanal', 'Optimización de horarios según engagement', 'Creación de variaciones de contenido A/B', 'Reciclaje inteligente de contenido evergreen', 'Generación de hashtags optimizados', 'Sugerencias de contenido basadas en tendencias', 'Auto-respuestas personalizadas']
    },
    {
      category: 'Automatización de Marketing',
      features: ['Email marketing automatizado', 'Funnels de conversión automáticos', 'Segmentación dinámica de audiencias', 'Retargeting automatizado', 'Lead nurturing workflows', 'Scoring automático de leads', 'Personalización de mensajes en tiempo real', 'Campañas activadas por comportamiento']
    },
    {
      category: 'Automatización de Análisis',
      features: ['Reportes automáticos diarios/semanales/mensuales', 'Alertas de rendimiento', 'Análisis predictivo de tendencias', 'Monitoreo de competencia automatizado', 'Detección de anomalías en métricas', 'Recomendaciones de optimización con IA', 'Dashboard en tiempo real', 'Integración de datos multiplataforma']
    },
    {
      category: 'Automatización de Engagement',
      features: ['Respuestas automáticas en redes sociales', 'Moderación de comentarios con IA', 'Chatbots para atención al cliente 24/7', 'Follow-up automatizado', 'Gestión de menciones de marca', 'Social listening automatizado', 'Engagement con comunidad programado', 'Reconocimiento y recompensa de usuarios activos']
    },
    {
      category: 'Automatización de Publicidad',
      features: ['Optimización de pujas automática', 'Gestión de presupuesto inteligente', 'Creación de audiencias lookalike', 'Testing multivariante automático', 'Pausado de anuncios de bajo rendimiento', 'Scaling automático de campañas exitosas', 'Generación de creatividades con IA', 'Optimización de landing pages']
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-6 bg-gray-900 hover:bg-gray-800 rounded-xl transition-all duration-300 border border-gray-800 hover:border-pink-500/50 group"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-400 flex items-center justify-center">
              <span className="text-white font-bold text-xl">ℹ️</span>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-1">
                Información Completa de Servicios y Automatización
              </h3>
              <p className="text-gray-400 text-sm">
                {isExpanded ? 'Haz clic para ocultar' : 'Haz clic para ver todos nuestros servicios, procesos y opciones de automatización'}
              </p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-pink-500 transition-transform group-hover:scale-110" />
          ) : (
            <ChevronDown className="w-6 h-6 text-pink-500 transition-transform group-hover:scale-110" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-8 space-y-12 animate-fadeIn">
            {/* Services Section */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
                Servicios Completos de Marketing Digital y Creatividad
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-pink-500 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full border border-pink-500/20"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation Options Section */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                Opciones de Automatización Disponibles
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {automationOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-fuchsia-500/50 transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-fuchsia-400 mb-4">
                      {option.category}
                    </h4>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                          <span className="text-pink-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Keywords Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Tecnologías y Servicios Especializados
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Marketing Digital', 'Redes Sociales', 'Automatización Marketing', 'Content Marketing',
                  'Social Media Management', 'Influencer Marketing', 'Video Marketing', 'Storytelling Digital',
                  'Branding', 'Identidad Visual', 'Diseño Gráfico', 'Producción Audiovisual',
                  'Inteligencia Artificial', 'IA Generativa', 'Chatbots', 'Automatización IA',
                  'Analytics', 'Big Data', 'Business Intelligence', 'Growth Hacking',
                  'SEO', 'SEM', 'Publicidad Digital', 'Performance Marketing', 'Conversion Optimization',
                  'Community Management', 'Engagement', 'Viral Marketing', 'Gamificación',
                  'Email Marketing', 'Marketing Automation', 'CRM', 'Lead Generation',
                  'Instagram Marketing', 'TikTok Marketing', 'YouTube Marketing', 'LinkedIn Marketing',
                  'Facebook Ads', 'Google Ads', 'Programmatic Advertising', 'Native Ads',
                  'UGC Content', 'Brand Strategy', 'Content Strategy', 'Digital Strategy',
                  'Creative Agency', 'Digital Agency', 'Marketing Agency', 'Agencia Creativa',
                  'Agencia Digital', 'Agencia Marketing', 'Social Media Agency', 'Content Creator Tools',
                  'Creadores Contenido', 'Influencers Tools', 'Social Media Tools', 'Automatización Redes',
                  'ROI Marketing', 'KPI Tracking', 'Metrics Dashboard', 'Predictive Analytics',
                  'Customer Journey', 'User Experience', 'Conversion Funnel', 'A/B Testing',
                  'Retargeting', 'Remarketing', 'Lookalike Audiences', 'Segmentación Audiencias',
                  'Real-time Marketing', 'Trending Topics', 'Viral Content', 'Meme Marketing',
                  'Motion Graphics', 'Animation', 'Visual Effects', 'Post-Production',
                  'Brand Identity', 'Corporate Design', 'Logo Design', 'Brand Guidelines',
                  'Transmedia', 'Cross-platform Content', 'Multimedia Marketing', 'Interactive Content'
                ].map((keyword, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-pink-500/50 hover:text-pink-400 transition-colors"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center py-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed">
                The INFAMA Creative ofrece soluciones integrales de marketing digital, automatización con inteligencia artificial,
                creación de contenido viral, gestión de redes sociales, producción audiovisual, branding estratégico y desarrollo
                de campañas publicitarias de alto rendimiento. Especializados en automatización de procesos, optimización de
                conversiones, growth hacking, y maximización de ROI para marcas, empresas, creadores de contenido e influencers
                que buscan escalar su presencia digital y aumentar su impacto en el mercado actual.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
