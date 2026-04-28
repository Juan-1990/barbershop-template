import { motion } from 'framer-motion'
import { ChevronRight, ArrowDown } from 'lucide-react'
import { heroData } from '../data/content'

export default function Hero() {
  const titleLines = heroData.title.split('\n')

  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.image}
          alt="Barbershop atmosphere"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark-900/70" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-28 left-8 w-12 h-12 border-t-2 border-l-2 border-amber-400/50 hidden lg:block" />
      <div className="absolute bottom-16 right-8 w-12 h-12 border-b-2 border-r-2 border-amber-400/50 hidden lg:block" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {heroData.eyebrow}
        </motion.span>

        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {titleLines.map((line, i) => (
            <span key={i} className={i === 1 ? 'text-amber-400 block' : 'block'}>
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg font-light max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {heroData.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#booking" className="btn-primary flex items-center gap-3">
            {heroData.cta}
            <ChevronRight size={16} />
          </a>
          <a href="#services" className="btn-outline">
            {heroData.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-amber-400/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}