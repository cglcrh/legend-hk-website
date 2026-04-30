import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Car, CircuitBoard, Shirt, Apple, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import content from '../i18n/content'

const icons = [Car, CircuitBoard, Shirt, Apple]

function SolutionCard({ solution, index, icon: Icon }: { solution: any; index: number; icon: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const gradients = [
    'from-cyan-500/10 to-blue-500/10',
    'from-blue-500/10 to-purple-500/10',
    'from-purple-500/10 to-pink-500/10',
    'from-pink-500/10 to-rose-500/10',
  ]
  const borderColors = ['border-cyan-500/20', 'border-blue-500/20', 'border-purple-500/20', 'border-pink-500/20']
  const iconBgs = ['bg-cyan-500/10', 'bg-blue-500/10', 'bg-purple-500/10', 'bg-pink-500/10']
  const iconColors = ['text-cyan-400', 'text-blue-400', 'text-purple-400', 'text-pink-400']

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`group relative p-8 rounded-2xl bg-gradient-to-br ${gradients[index]} border ${borderColors[index]} backdrop-blur-sm card-hover overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${iconBgs[index]} border ${borderColors[index]} flex items-center justify-center`}>
              <Icon className={`w-6 h-6 ${iconColors[index]}`} />
            </div>
            <span className={`text-sm font-semibold ${iconColors[index]}`}>{solution.industry}</span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-[#94a3b8] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
        <p className="text-[#94a3b8] leading-relaxed mb-6">{solution.desc}</p>

        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[rgba(148,163,184,0.1)]">
          {solution.stats.map((stat: any, i: number) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-[#94a3b8]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function SolutionsSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })
  const { lang } = useLanguage()
  const t = content[lang].solutions

  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-[#080c18]">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.title}<span className="gradient-text">{t.titleHighlight}</span>{t.titleSuffix}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#94a3b8]">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {t.items.map((solution: any, index: number) => (
            <SolutionCard key={index} solution={solution} index={index} icon={icons[index]} />
          ))}
        </div>
      </div>
    </section>
  )
}
