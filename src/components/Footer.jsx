import { ArrowUp } from 'lucide-react'
import { siteConfig, navLinks } from '../data/content'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-dark-900 border-t border-dark-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-2">
            <span className="text-amber-400 text-xs tracking-widest uppercase font-body block mb-1">
              {siteConfig.tagline}
            </span>
            <span className="font-display text-3xl text-white block mb-4">
              {siteConfig.name}
            </span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium grooming for the modern gentleman. Walk in confident, walk out legendary.
            </p>
            <a href={siteConfig.social.instagram} aria-label="Instagram"
                className="w-9 h-9 border border-dark-700 flex items-center justify-center text-gray-400 hover:border-amber-400 hover:text-amber-400 transition-all">
                <span className="text-xs font-bold">IG</span>
            </a>
            <a href={siteConfig.social.facebook} aria-label="Facebook"
                className="w-9 h-9 border border-dark-700 flex items-center justify-center text-gray-400 hover:border-amber-400 hover:text-amber-400 transition-all">
                <span className="text-xs font-bold">FB</span>
            </a>
            </div>
          </div>

          <div>
            <h4 className="text-amber-400 text-xs uppercase tracking-widest mb-5">Navigate</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-amber-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-amber-400 text-xs uppercase tracking-widest mb-5">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-400 text-sm">{siteConfig.phone}</li>
              <li className="text-gray-400 text-sm">{siteConfig.email}</li>
              <li className="text-gray-400 text-sm">{siteConfig.address}</li>
              <li className="text-gray-400 text-xs mt-1">{siteConfig.hours.weekdays}</li>
              <li className="text-gray-400 text-xs">{siteConfig.hours.weekend}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 border border-dark-700 flex items-center justify-center text-gray-400 hover:border-amber-400 hover:text-amber-400 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      
    </footer>
  )
}