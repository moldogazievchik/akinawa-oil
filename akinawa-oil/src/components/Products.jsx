// src/components/Products.jsx
import React from 'react';
import prod1 from '../assets/product1.jpeg';
import prod2 from '../assets/product2.jpeg';
import prod3 from '../assets/product3.jpg';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Моторное масло',
    img: prod1,
    desc: 'Для легковых и грузовых автомобилей',
  },
  {
    title: 'Индустриальное масло',
    img: prod2,
    desc: 'Для промышленных установок',
  },
  {
    title: 'Смазки',
    img: prod3,
    desc: 'Высокоэффективные смазочные материалы',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наша продукция</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((prod, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={prod.img}
                alt={prod.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{prod.title}</h3>
                <p className="text-gray-600">{prod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
