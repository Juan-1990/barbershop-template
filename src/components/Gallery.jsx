import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { galleryData } from '../data/content'

export default function Gallery() {
  const { ref, inView } = useInView()

  return (
    <section id="gallery" className="py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            {galleryData.eyebrow}
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {galleryData.title.split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'text-amber-400 block' : 'block'}>
                {line}
              </span>
            ))}
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryData.images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden group aspect-square"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}