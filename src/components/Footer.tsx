import { Cpu, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'AI智能产线改造', href: '#services' },
    { label: '工业视觉检测', href: '#services' },
    { label: '智能数据分析', href: '#services' },
    { label: '技术咨询服务', href: '#services' },
  ],
  solutions: [
    { label: '汽车制造', href: '#solutions' },
    { label: '电子制造', href: '#solutions' },
    { label: '纺织行业', href: '#solutions' },
    { label: '食品加工', href: '#solutions' },
  ],
  company: [
    { label: '关于我们', href: '#about' },
    { label: '发展历程', href: '#about' },
    { label: '联系我们', href: '#contact' },
  ],
}

export default function Footer() {
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
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-tight">酈景科技</span>
                <span className="text-[10px] text-[#94a3b8] tracking-widest uppercase leading-tight">LegendHK</span>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5 max-w-sm">
              专注为海内外传统制造业提供AI智能化改造与落地应用服务，
              助力企业实现数字化转型升级。
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

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">核心服务</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-[#94a3b8] hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">解决方案</h4>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-[#94a3b8] hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">关于公司</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-[#94a3b8] hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[rgba(148,163,184,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#64748b]">
            © {new Date().getFullYear()} 酈景（香港）科技有限公司 LEGEND (HONGKONG) TECHNOLOGY CO. LIMITED
          </div>
          <div className="text-xs text-[#64748b]">
            商业登记证号: 72627993-000-02-25-6 · 香港注册
          </div>
        </div>
      </div>
    </footer>
  )
}
