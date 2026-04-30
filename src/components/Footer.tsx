import { Cpu, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import content from '../i18n/content'

export default function Footer() {
  const { lang } = useLanguage()
  const t = content[lang].footer

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-[#050811] border-t border-[rgba(148,163,184,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-tight">酈景科技</span>
                <span className="text-[10px] text-[#94a3b8] tracking-widest uppercase leading-tight">LEGEND HK</span>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5 max-w-sm">
              {t.desc}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-[#94a3b8]">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400" />
                <span>19H MAXGRAND PLAZA, NO.3 TAI YAU STREET, SAN PO KONG, KL</span>
              </div>
              <div className="flex items-center gap-2 text-[#94a3b8]">
                <Mail className="w-4 h-4 flex-shrink-0 text-cyan-400" />
                <span>contact@91legend.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.links.services}</h4>
            <ul className="space-y-2.5">
              {t.serviceItems.map((label: string, i: number) => (
                <li key={i}>
                  <a href="#services" onClick={(e) => handleClick(e, '#services')} className="text-sm text-[#94a3b8] hover:text-cyan-400 transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.links.solutions}</h4>
            <ul className="space-y-2.5">
              {t.solutionItems.map((label: string, i: number) => (
                <li key={i}>
                  <a href="#solutions" onClick={(e) => handleClick(e, '#solutions')} className="text-sm text-[#94a3b8] hover:text-cyan-400 transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.links.company}</h4>
            <ul className="space-y-2.5">
              {t.companyItems.map((label: string, i: number) => (
                <li key={i}>
                  <a href={i === 2 ? '#contact' : '#about'} onClick={(e) => handleClick(e, i === 2 ? '#contact' : '#about')} className="text-sm text-[#94a3b8] hover:text-cyan-400 transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(148,163,184,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#64748b]">
            © {new Date().getFullYear()} {t.copyright}
          </div>
          <div className="text-xs text-[#64748b]">
            {t.reg}
          </div>
        </div>
      </div>
    </footer>
  )
}
