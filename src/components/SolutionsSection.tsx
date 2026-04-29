import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Car, CircuitBoard, Shirt, Apple, ArrowUpRight } from 'lucide-react'

const solutions = [
  {
    icon: Car,
    industry: '汽车制造',
    title: '汽车零部件AI质检与焊接监控',
    description: '针对汽车零部件的高精度检测需求，部署AI视觉系统实现焊缝质量实时监控、零部件缺陷自动分类，检测速度提升10倍，漏检率降低至0.1%以下。',
    stats: [
      { value: '10x', label: '检测速度提升' },
      { value: '<0.1%', label: '漏检率' },
      { value: '24/7', label: '全天候运行' },
    ],
    gradient: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
  },
  {
    icon: CircuitBoard,
    industry: '电子制造',
    title: 'PCB缺陷检测与元件精准定位',
    description: '为PCB和SMT产线提供AI视觉检测方案，支持焊点缺陷、元件缺失/偏移/错件等多种缺陷类型的实时识别，兼容多规格PCB板型快速切换。',
    stats: [
      { value: '99.5%', label: '识别准确率' },
      { value: '50ms', label: '单件检测耗时' },
      { value: '100+', label: '缺陷类型覆盖' },
    ],
    gradient: 'from-blue-500/10 to-purple-500/10',
    borderColor: 'border-blue-500/20',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Shirt,
    industry: '纺织行业',
    title: '布料瑕疵智能检测与色差分析',
    description: '基于深度学习的高速度布料瑕疵检测系统，可在织布机运行速度下实时识别断经、断纬、疵点等问题，同时支持精准的色差分析与品级自动判定。',
    stats: [
      { value: '200m/min', label: '检测线速度' },
      { value: '30+', label: '瑕疵类型识别' },
      { value: '95%', label: '人工替代率' },
    ],
    gradient: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/20',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: Apple,
    industry: '食品加工',
    title: '异物检测与包装完整性验证',
    description: 'X光与可见光融合AI检测系统，精准识别食品中的金属、玻璃、塑料等异物，同时自动验证包装密封完整性、标签贴附正确性，守护食品安全。',
    stats: [
      { value: '99.9%', label: '异物检出率' },
      { value: '3mm', label: '最小检测精度' },
      { value: 'HACCP', label: '合规认证' },
    ],
    gradient: 'from-pink-500/10 to-rose-500/10',
    borderColor: 'border-pink-500/20',
    iconBg: 'bg-pink-500/10',
    iconColor: 'text-pink-400',
  },
]

function SolutionCard({ solution, index }: { solution: typeof solutions[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`group relative p-8 rounded-2xl bg-gradient-to-br ${solution.gradient} border ${solution.borderColor} backdrop-blur-sm card-hover overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${solution.iconBg} border ${solution.borderColor} flex items-center justify-center`}>
              <solution.icon className={`w-6 h-6 ${solution.iconColor}`} />
            </div>
            <span className={`text-sm font-semibold ${solution.iconColor}`}>{solution.industry}</span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-[#94a3b8] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
        <p className="text-[#94a3b8] leading-relaxed mb-6">{solution.description}</p>

        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[rgba(148,163,184,0.1)]">
          {solution.stats.map((stat, i) => (
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
            解决方案
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            跨行业<span className="gradient-text">智能制造</span>实践
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#94a3b8]">
            深耕制造业多个细分领域，我们已帮助众多企业实现AI落地，
            以下为部分典型应用场景
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
