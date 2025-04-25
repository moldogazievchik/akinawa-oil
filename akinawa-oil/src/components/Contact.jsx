import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Связаться с нами</h2>
        <p className="mb-4 text-gray-600">Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <input type="text" placeholder="Ваше имя" className="border p-3 rounded-lg w-full" />
        <input type="email" placeholder="Ваш Email" className="border p-3 rounded-lg w-full" />
        <textarea
            rows="4"
            placeholder="Ваше сообщение"
            className="border p-3 rounded-lg w-full sm:col-span-2"
        />
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition sm:col-span-2">
            Отправить
        </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;