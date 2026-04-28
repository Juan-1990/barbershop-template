import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { bookingData, siteConfig, servicesData } from '../data/content'

export default function Booking() {
  const { ref, inView } = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    barber: '',
    date: '',
    time: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: siteConfig.phone },
    { icon: Mail, label: 'Email', value: siteConfig.email },
    { icon: MapPin, label: 'Address', value: siteConfig.address },
    { icon: Clock, label: 'Hours', value: siteConfig.hours.weekdays },
  ]

  return (
    <section id="booking" className="py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            {bookingData.eyebrow}
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {bookingData.title.split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'text-amber-400 block' : 'block'}>
                {line}
              </span>
            ))}
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {bookingData.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            <img
              src={bookingData.image}
              alt="Barbershop"
              className="w-full h-52 object-cover"
              loading="lazy"
            />
            <div className="flex flex-col gap-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-amber-400 text-xs uppercase tracking-widest mb-1">
                      {label}
                    </div>
                    <div className="text-gray-300 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-dark-900 border border-dark-700 h-full flex flex-col items-center justify-center text-center gap-6 min-h-[400px] p-8">
                <CheckCircle size={48} className="text-amber-400" />
                <div>
                  <h3 className="font-display text-3xl text-white mb-2">Appointment Booked</h3>
                  <p className="text-gray-400 text-sm">
                    We will confirm your appointment within 24 hours. See you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-dark-900 border border-dark-700 p-8 grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-amber-400 text-xs uppercase tracking-widest">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-dark-800 border border-dark-700 text-white text-sm px-4 py-3 outline-none focus:border-amber-400 transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-amber-400 text-xs uppercase tracking-widest">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-dark-800 border border-dark-700 text-white text-sm px-4 py-3 outline-none focus:border-amber-400 transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-amber-400 text-xs uppercase tracking-widest">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (000) 000-0000"
                    className="bg-dark-800 border border-dark-700 text-white text-sm px-4 py-3 outline-none focus:border-amber-400 transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-amber-400 text-xs uppercase tracking-widest">Service *</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="bg-dark-800 border border-dark-700 text-white text-sm px-4 py-3 outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="">Select service</option>
                    {servicesData.items.map((s) => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-amber-400 text-xs uppercase tracking-widest">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="bg-dark-800 border border-dark-700 text-white text-sm px-4 py-3 outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-amber-400 text-xs uppercase tracking-widest">Time *</label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="bg-dark-800 border border-dark-700 text-white text-sm px-4 py-3 outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="">Select time</option>
                    {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full justify-center">
                    Book Appointment
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}