'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Basic validation (in a real app, use a library like Zod or Yup)
    if (!name || !email || !message) {
      setStatus('Por favor, preencha todos os campos.');
      return;
    }
    if (!email.includes('@')) {
      setStatus('Por favor, insira um email válido.');
      return;
    }

    // Here you would typically send the data to an API endpoint
    // For now, we'll just simulate success
    console.log({ name, email, message });
    setStatus('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          placeholder="seuemail@exemplo.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          placeholder="Sua mensagem aqui..."
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300"
        >
          Enviar Mensagem
        </button>
      </div>
      {status && <p className={`text-sm mt-2 ${status.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>{status}</p>}
    </form>
  );
}

