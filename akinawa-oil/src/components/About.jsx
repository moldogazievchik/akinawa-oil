// src/components/About.jsx
import React from 'react'
import aboutImg from '../assets/about.jpeg'  // убедитесь, что файл лежит здесь
import { motion } from 'framer-motion'
export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* <img
          src={aboutImg}
          alt="О нашей компании"
          className="rounded-2xl shadow-lg"
        /> */}
        <motion.img
          src={aboutImg}
          alt="О нас"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

        <div>
          <h2 className="text-3xl font-bold mb-4">О нашей компании</h2>
          <p className="text-lg leading-relaxed">
            Akinawa Oil — это надёжный поставщик технических масел и смазочных
            материалов. Мы стремимся к высоким стандартам качества и заботимся о
            каждом клиенте. Наши продукты применяются в различных отраслях
            промышленности и всегда соответствуют современным требованиям.
          </p>
        </div>
        </motion.div>
      </div>
    </section>
  )
}
