import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Eye, BarChart3, MessageSquareCode } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI智能产线改造',
    description: '基于深度学习和计算机视觉技术，为传统生产线注入AI能力。从需求诊断、方案设计到系统部署，提供端到端的智能化升级服务。',
    features: ['产线智能化评估', 'AI模型定制开发', '系统集成与部署', '持续运维优化'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Eye,
    title: '工业视觉检测',
    description: '部署高精度工业视觉检测系统，实现产品缺陷自动识别、尺寸测量、外观检测等功能，检测准确率达到99%以上，大幅降低人工成本。',
    features: ['缺陷自动识别', '实时在线检测', '多品类兼容', '检测报告生成'],
    gradient: 'from-blue-500/20 to-purple-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: BarChart3,
    title: '智能数据分析平台',
    description: '构建企业生产数据实时采集与分析平台，通过大数据和AI算法挖掘生产瓶颈，优化排产计划，提升整体运营效率。',
    features: ['生产数据可视化', '设备预测性维护', '能耗智能优化', '质量追溯分析'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: MessageSquareCode,
    title: '技术咨询与实施',
    description: '提供专业的AI技术咨询服务，帮助企业梳理数字化需求，制定AI落地路线图，并全程陪伴实施，确保项目成功交付。',
    features: ['AI成熟度评估', '技术路线规划', '原型快速验证', '团队技能培训'],
    gradient: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-400',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative p-8 rounded-2xl bg-gradient-to-br ${service.gradient} border border-[rgba(148,163,184,0.1)] backdrop-blur-sm card-hover overflow-hidden`}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />

      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-white/5 border border-[rgba(148,163,184,0.15)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className={`w-7 h-7 ${service.iconColor}`} />
        </div>

        <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-[#94a3b8] leading-relaxed mb-6">{service.description}</p>

        <div className="flex flex-wrap gap-2">
          {service.features.map((feature, i) => (
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
            核心服务
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            全链路AI智能化<span className="gradient-text">解决方案</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#94a3b8]">
            从诊断到落地，我们为制造企业提供覆盖全流程的AI技术服务，
            让每一个生产环节都焕发智能活力
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
