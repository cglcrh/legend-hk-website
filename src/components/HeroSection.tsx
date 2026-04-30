import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import content from '../i18n/content'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { lang } = useLanguage()
  const t = content[lang].hero

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20))
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.08 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1c]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] z-0" />
      <div className="absolute inset-0 bg-grid opacity-30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>{t.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">{t.title1}</span>
          <br />
          <span className="gradient-text">{t.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-[#94a3b8] mb-10 leading-relaxed"
        >
          {t.desc}
          <span className="text-cyan-400 font-medium">{t.descHighlight1}</span>{lang === 'zh-CN' ? '与' : '與'}
          <span className="text-cyan-400 font-medium">{t.descHighlight2}</span>
          {t.descSuffix}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] btn-shine"
          >
            {t.btnPrimary}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#e2e8f0] bg-white/5 border border-[rgba(148,163,184,0.2)] rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            {t.btnSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: TrendingUp, value: t.stat1Value, label: t.stat1Label },
            { icon: Shield, value: t.stat2Value, label: t.stat2Label },
            { icon: Sparkles, value: t.stat3Value, label: t.stat3Label },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/[0.03] border border-[rgba(148,163,184,0.1)] backdrop-blur-sm"
            >
              <stat.icon className="w-6 h-6 text-cyan-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-[#94a3b8]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-[rgba(148,163,184,0.3)] flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
