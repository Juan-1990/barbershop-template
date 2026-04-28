import { motion } from 'framer-motion'
import { Clock, DollarSign } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { servicesData } from '../data/content'

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            {servicesData.eyebrow}
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {servicesData.title}
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-700">
          {servicesData.items.map((item, i) => (
            <motion.div
              key={item.name}
              className="bg-dark-800 p-8 group hover:bg-dark-700 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <h3 className="font-display text-2xl text-white mb-3 group-hover:text-amber-400 transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Clock size={12} />
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 font-display text-2xl">
                  {item.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}