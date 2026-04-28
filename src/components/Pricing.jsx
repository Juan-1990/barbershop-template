import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const plans = [
  {
    name: 'Basic',
    price: '$25',
    description: 'Perfect for a quick refresh',
    features: [
      'Beard Trim & Shape',
      'Hair & Scalp Treatment',
      'Kids Haircut',
      'Hot Towel Finish',
    ],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '$40',
    description: 'Our most popular package',
    features: [
      'Classic Haircut',
      'Beard Trim & Shape',
      'Hot Towel Shave',
      'Hair & Scalp Treatment',
      'Styling Product',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$55',
    description: 'The full experience',
    features: [
      'Cut & Beard Combo',
      'Hot Towel Shave',
      'Hair & Scalp Treatment',
      'Styling Product',
      'Priority Booking',
      '10% Off Next Visit',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  const { ref, inView } = useInView()

  return (
    <section id="pricing" className="py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Pricing
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Simple <span className="text-amber-400">Pricing</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? 'border-amber-400 bg-dark-800'
                  : 'border-dark-700 bg-dark-800 hover:border-amber-400/30'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15 }}
            >
              {plan.highlighted && (
                <span className="text-dark-900 bg-amber-400 text-xs uppercase tracking-widest px-3 py-1 mb-6 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-3xl text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              <div className="font-display text-5xl text-amber-400 mb-8">{plan.price}</div>
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={14} className="text-amber-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
                href="#booking"
                className={`block text-center text-xs uppercase tracking-widest py-4 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-amber-400 text-dark-900 hover:bg-amber-500'
                    : 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-dark-900'
                }`}
              <a>
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}