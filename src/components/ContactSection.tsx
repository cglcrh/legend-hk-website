import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Phone, Send, MessageCircle, CheckCircle2 } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: '公司地址',
    value: '19H MAXGRAND PLAZA, NO.3 TAI YAU STREET, SAN PO KONG, KL',
    subValue: '香港新蒲岗大有街3号万廸广场19H',
  },
  {
    icon: Mail,
    label: '电子邮箱',
    value: 'contact@legendhk.tech',
    subValue: '商务合作请发送邮件',
  },
  {
    icon: Phone,
    label: '联系电话',
    value: '+852 XXXX XXXX',
    subValue: '工作日 9:00-18:00',
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#080c18]">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            联系我们
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            开启您的<span className="gradient-text">AI转型之旅</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#94a3b8]">
            无论您处于数字化转型的哪个阶段，我们都乐意为您提供专业咨询与方案建议
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-[rgba(148,163,184,0.1)] card-hover"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-[#94a3b8] mb-1">{info.label}</div>
                  <div className="text-white font-medium text-sm leading-relaxed">{info.value}</div>
                  {info.subValue && (
                    <div className="text-[#94a3b8] text-xs mt-1">{info.subValue}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Quick message */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">快速咨询</span>
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                填写右侧表单，我们将在24小时内与您取得联系，为您提供初步的AI转型可行性评估。
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>免费咨询 · 专业诊断 · 保密承诺</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-[rgba(148,163,184,0.1)] backdrop-blur-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">提交成功</h3>
                  <p className="text-[#94a3b8]">感谢您的咨询，我们将尽快与您联系！</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-6">预约免费咨询</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-[#94a3b8] mb-2">姓名 *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[rgba(148,163,184,0.15)] text-white placeholder-[#64748b] focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                        placeholder="您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#94a3b8] mb-2">公司名称</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[rgba(148,163,184,0.15)] text-white placeholder-[#64748b] focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                        placeholder="公司名称"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-[#94a3b8] mb-2">电子邮箱 *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[rgba(148,163,184,0.15)] text-white placeholder-[#64748b] focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#94a3b8] mb-2">联系电话</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[rgba(148,163,184,0.15)] text-white placeholder-[#64748b] focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                        placeholder="+86 / +852"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm text-[#94a3b8] mb-2">所属行业</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[rgba(148,163,184,0.15)] text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0a0f1c]">请选择行业</option>
                      <option value="automotive" className="bg-[#0a0f1c]">汽车制造</option>
                      <option value="electronics" className="bg-[#0a0f1c]">电子制造</option>
                      <option value="textile" className="bg-[#0a0f1c]">纺织行业</option>
                      <option value="food" className="bg-[#0a0f1c]">食品加工</option>
                      <option value="pharma" className="bg-[#0a0f1c]">医药制造</option>
                      <option value="other" className="bg-[#0a0f1c]">其他</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm text-[#94a3b8] mb-2">咨询内容</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[rgba(148,163,184,0.15)] text-white placeholder-[#64748b] focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none"
                      placeholder="请简要描述您的需求或问题..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] btn-shine"
                  >
                    <Send className="w-5 h-5" />
                    提交咨询
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
