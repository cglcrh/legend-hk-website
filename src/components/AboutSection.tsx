import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Award, Users, Globe, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import content from '../i18n/content'

const highlightIcons = [Award, Users, Globe]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { lang } = useLanguage()
  const t = content[lang].about

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0a0f1c]">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.title}<span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-[#94a3b8]">
            {t.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {t.highlights.map((item: any, index: number) => {
              const Icon = highlightIcons[index]
              return (
                <div
                  key={index}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.03] border border-[rgba(148,163,184,0.1)] card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-[rgba(148,163,184,0.1)]">
              <h3 className="text-lg font-semibold text-white mb-4">{t.valuesTitle}</h3>
              <div className="space-y-3">
                {t.values.map((value: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[#94a3b8] text-sm leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">{t.addressTitle}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-[#94a3b8]">
                  <span className="text-white font-medium">{t.addressCnLabel}</span>
                  {lang === 'zh-CN' ? '香港新蒲岗大有街3号万廸广场19H' : '香港新蒲崗大有街3號萬廸廣場19H'}
                </p>
                <p className="text-[#94a3b8]">
                  <span className="text-white font-medium">{t.addressEnLabel}</span>
                  19H MAXGRAND PLAZA, NO.3 TAI YAU STREET, SAN PO KONG, KL
                </p>
                <p className="text-[#94a3b8] pt-2 border-t border-[rgba(148,163,184,0.1)]">
                  <span className="text-white font-medium">{t.regLabel}</span>
                  72627993-000-02-25-6
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <h3 className="text-center text-xl font-bold text-white mb-10">{t.timelineTitle}</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50" />

            {t.timeline.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`relative flex items-start gap-6 mb-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`hidden lg:block w-1/2 ${index % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                  <div className="inline-block p-4 rounded-xl bg-white/[0.03] border border-[rgba(148,163,184,0.1)]">
                    <div className="text-cyan-400 font-bold text-lg mb-1">{item.year}</div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-[#94a3b8] text-sm">{item.desc}</div>
                  </div>
                </div>

                <div className="absolute left-4 lg:left-1/2 w-3 h-3 -translate-x-1/2 mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-[#0a0f1c] z-10" />

                <div className="lg:hidden pl-10 flex-1">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-[rgba(148,163,184,0.1)]">
                    <div className="text-cyan-400 font-bold text-lg mb-1">{item.year}</div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-[#94a3b8] text-sm">{item.desc}</div>
                  </div>
                </div>

                <div className="hidden lg:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
