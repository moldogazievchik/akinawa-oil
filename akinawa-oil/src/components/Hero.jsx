// src/components/Hero.jsx
import React from 'react'
import heroBg from '../assets/hero-bg.jpeg' // убедитесь, что этот файл лежит в src/assets
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`
      }}
    >
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-4 bg-black bg-opacity-50 rounded-xl"
      >
      <div className="text-center p-6 bg-black bg-opacity-60 rounded-2xl max-w-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Добро пожаловать в Akinawa Oil
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Качественные масла и смазки для вашего производства
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition-shadow shadow-md hover:shadow-lg">
          Подробнее
        </button>
      </div>
        </motion.div>
    </section>
  )
}
