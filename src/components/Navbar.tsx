import { useState, useEffect } from 'react'
import { Menu, X, Cpu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import content from '../i18n/content'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const t = content[lang].nav

  const navLinks = [
    { label: t.home, href: '#hero' },
    { label: t.services, href: '#services' },
    { label: t.solutions, href: '#solutions' },
    { label: t.about, href: '#about' },
    { label: t.contact, href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleLang = () => {
    setLang(lang === 'zh-CN' ? 'zh-HK' : 'zh-CN')
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0f1c]/90 backdrop-blur-xl border-b border-[rgba(148,163,184,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-tight">
                  酈景科技
                </span>
                <span className="text-[10px] text-[#94a3b8] tracking-widest uppercase leading-tight">
                  LEGEND HK
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-2 text-sm text-[#94a3b8] hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 text-xs font-medium text-[#94a3b8] bg-white/5 border border-[rgba(148,163,184,0.15)] rounded-lg hover:text-white hover:bg-white/10 transition-all"
              >
                {t.langToggle}
              </button>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] btn-shine"
              >
                {t.cta}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleLang}
                className="px-2.5 py-1.5 text-xs font-medium text-[#94a3b8] bg-white/5 border border-[rgba(148,163,184,0.15)] rounded-lg"
              >
                {t.langToggle}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#94a3b8] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#0a0f1c]/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="relative pt-20 px-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-3 text-lg text-[#94a3b8] hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-4 px-4 py-3 text-center text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-medium"
                >
                  {t.cta}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
