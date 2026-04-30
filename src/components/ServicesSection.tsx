import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Eye, BarChart3, MessageSquareCode } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import content from '../i18n/content'

const icons = [Brain, Eye, BarChart3, MessageSquareCode]

function ServiceCard({ service, index, icon: Icon }: { service: any; index: number; icon: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const gradients = [
    'from-cyan-500/20 to-blue-500/20',
    'from-blue-500/20 to-purple-500/20',
    'from-purple-500/20 to-pink-500/20',
    'from-pink-500/20 to-rose-500/20',
  ]
  const iconColors = ['text-cyan-400', 'text-blue-400', 'text-purple-400', 'text-pink-400']

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative p-8 rounded-2xl bg-gradient-to-br ${gradients[index]} border border-[rgba(148,163,184,0.1)] backdrop-blur-sm card-hover overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />

      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-white/5 border border-[rgba(148,163,184,0.15)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-7 h-7 ${iconColors[index]}`} />
        </div>

        <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-[#94a3b8] leading-relaxed mb-6">{service.desc}</p>

        <div className="flex flex-wrap gap-2">
          {service.features.map((feature: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1.5 text-xs font-medium text-[#94a3b8] bg-white/5 rounded-lg border border-[rgba(148,163,184,0.1)]"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })
  const { lang } = useLanguage()
  const t = content[lang].services

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#0a0f1c]">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.title}<span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#94a3b8]">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.items.map((service: any, index: number) => (
            <ServiceCard key={index} service={service} index={index} icon={icons[index]} />
          ))}
        </div>
      </div>
    </section>
  )
}
