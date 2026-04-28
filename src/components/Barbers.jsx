import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { barbersData } from '../data/content'

export default function Barbers() {
  const { ref, inView } = useInView()

  return (
    <section id="barbers" className="py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            {barbersData.eyebrow}
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {barbersData.title}
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbersData.items.map((barber, i) => (
            <motion.div
              key={barber.name}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15 }}
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/30 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
              <h3 className="font-display text-2xl text-white mb-1">
                {barber.name}
              </h3>
              <p className="text-amber-400 text-xs uppercase tracking-widest mb-2">
                {barber.role}
              </p>
              <p className="text-gray-400 text-sm">
                {barber.specialty}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}