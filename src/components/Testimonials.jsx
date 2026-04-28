import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { testimonialsData } from '../data/content'

export default function Testimonials() {
  const { ref, inView } = useInView()

  return (
    <section className="py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            {testimonialsData.eyebrow}
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {testimonialsData.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsData.items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-dark-800 border border-dark-700 p-8 hover:border-amber-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>
              <div className="text-white font-body font-500 text-sm">
                — {item.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}