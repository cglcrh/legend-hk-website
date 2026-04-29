import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Award, Users, Globe, CheckCircle2 } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: '专业资质',
    description: '香港注册科技公司，持有正式商业登记证，合法合规经营',
  },
  {
    icon: Users,
    title: '技术团队',
    description: '汇聚AI算法、软件工程、工业自动化等多领域专业人才',
  },
  {
    icon: Globe,
    title: '全球视野',
    description: '立足香港，服务海内外制造业客户，具备国际化项目经验',
  },
]

const values = [
  '以客户需求为导向，提供定制化AI解决方案',
  '深耕制造业场景，确保技术真正落地见效',
  '持续迭代优化，陪伴客户长期成长',
  '严格保护客户数据安全与商业机密',
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            关于我们
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            专注AI智造 · <span className="gradient-text">立足香港</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-[#94a3b8]">
            酄景（香港）科技有限公司成立于2021年，是一家专注于为传统制造业提供AI智能化改造与落地应用服务的高科技企业。
            我们以香港为总部，服务网络覆盖海内外，致力于成为制造业数字化转型的可靠伙伴。
          </p>
        </motion.div>

        {/* Company Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.03] border border-[rgba(148,163,184,0.1)] card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Values & Address */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Values */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-[rgba(148,163,184,0.1)]">
              <h3 className="text-lg font-semibold text-white mb-4">我们的承诺</h3>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[#94a3b8] text-sm leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">香港总部</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-[#94a3b8]">
                  <span className="text-white font-medium">中文地址：</span>
                  香港新蒲岗大有街3号万廸广场19H
                </p>
                <p className="text-[#94a3b8]">
                  <span className="text-white font-medium">英文地址：</span>
                  19H MAXGRAND PLAZA, NO.3 TAI YAU STREET, SAN PO KONG, KL
                </p>
                <p className="text-[#94a3b8] pt-2 border-t border-[rgba(148,163,184,0.1)]">
                  <span className="text-white font-medium">商业登记证号：</span>
                  72627993-000-02-25-6
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <h3 className="text-center text-xl font-bold text-white mb-10">发展历程</h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50" />

            {[
              { year: '2021', title: '公司成立', desc: '酄景（香港）科技有限公司在香港注册成立，确立AI+制造业战略方向' },
              { year: '2022', title: '技术积累', desc: '完成首个工业视觉检测项目落地，建立核心算法库与技术中台' },
              { year: '2023', title: '业务扩展', desc: '服务客户突破20家，业务覆盖汽车、电子、纺织等多个制造领域' },
              { year: '2024', title: '深耕落地', desc: '项目成功率达95%以上，形成标准化交付体系与行业解决方案库' },
              { year: '2025', title: '持续创新', desc: '拓展海外市场，引入大模型技术，推动制造业AI应用进入新阶段' },
            ].map((item, index) => (
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

                {/* Dot */}
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
