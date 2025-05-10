
'use client';

import Image from 'next/image';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import { useTheme } from '@/contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const products = [
  {
    name: 'Carolina Reaper 100ML',
    description: 'A pimenta mais forte do mundo! Ideal para os amantes de sabores intensos e picantes. Use com moderação.',
    volume: '100ml',
    price: 'R$ 6,95',
    imageUrl: '/images/carolina_reaper_100ml.png',
    altText: 'Molho de Pimenta Carolina Reaper Tradição de Minas',
  },
  {
    name: 'Molho de Pimenta Extra Forte 150ml',
    description: 'Para quem gosta de um toque especial e picante nas refeições. Feito com pimentas selecionadas.',
    volume: '150ml',
    price: 'R$ 4,95',
    imageUrl: '/images/molho_pimenta_extra_forte.jpg',
    altText: 'Molho de Pimenta Extra Forte Tradição de Minas',
  },
  {
    name: 'Molho Completo 150ml',
    description: 'Um tempero versátil para todos os tipos de pratos. Realça o sabor de carnes, aves, peixes e saladas.',
    volume: '150ml',
    price: 'R$ 2,95',
    imageUrl: '/images/molho_completo_150ml.jpg',
    altText: 'Molho Completo Tradição de Minas',
  },
];

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const whatsappNumber = "553186131037";
  const whatsappMessage = "Olá! Gostaria de mais informações sobre os produtos da Tradição de Minas.";

  const titleFont = 'font-lobster'; 
  const bodyFont = 'font-montserrat';

  return (
    <div className={`min-h-screen ${bodyFont} bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-3 sm:mb-0">
            <Image src="/images/logo.jpg" alt="Tradição de Minas Logo" width={60} height={60} className="mr-3 rounded-md" />
            <div>
              <h1 className={`text-2xl ${titleFont} text-red-600 dark:text-red-500`}>Tradição de Minas</h1>
              <p className={`text-xs text-green-700 dark:text-green-500 ${bodyFont}`}>Sabor Autêntico de Minas</p>
            </div>
          </div>
          <nav className="flex items-center">
            <ul className="flex space-x-4 text-sm sm:text-base">
              <li><a href="#home" className="hover:text-red-600 dark:hover:text-red-400 transition duration-300">Início</a></li>
              <li><a href="#produtos" className="hover:text-red-600 dark:hover:text-red-400 transition duration-300">Produtos</a></li>
              <li><a href="#sobre" className="hover:text-red-600 dark:hover:text-red-400 transition duration-300">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-red-600 dark:hover:text-red-400 transition duration-300">Contato</a></li>
            </ul>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 sm:py-20 bg-gray-100 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center">
            <Image src="/images/logo.jpg" alt="Tradição de Minas Logo Hero" width={120} height={120} className="rounded-full shadow-lg border-2 border-red-500 dark:border-red-400" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl ${titleFont} text-red-700 dark:text-red-500 mb-4`}>O Verdadeiro Sabor de Minas na sua Mesa</h2>
          <p className={`text-md sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto ${bodyFont}`}>Descubra nossos molhos e temperos artesanais, feitos com tradição e paixão.</p>
          <a href="#produtos" className={`bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg text-md sm:text-lg transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105 ${bodyFont}`}>
            Conheça Nossos Produtos
          </a>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Sobre Nós Section */}
        <section id="sobre" className="my-10 sm:my-12 p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h3 className={`text-2xl sm:text-3xl ${titleFont} text-green-700 dark:text-green-500 mb-6 text-center`}>Sobre a Tradição de Minas</h3>
          <div className={`text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-3 text-justify ${bodyFont}`}>
            <p>Localizada na acolhedora região metropolitana de Belo Horizonte, em Minas Gerais, a <strong className="text-gray-800 dark:text-gray-100">Tradição de Minas Alimentos</strong> nasceu do desejo de compartilhar o verdadeiro sabor da culinária mineira. Nossa paixão é levar à sua mesa produtos de altíssima qualidade, elaborados com ingredientes selecionados e o carinho das receitas que atravessam gerações.</p>
            <p>Valorizamos a autenticidade, o frescor e a tradição em cada item que produzimos, buscando sempre proporcionar uma experiência gastronômica única e memorável.</p>
          </div>
        </section>

        {/* Products Section */}
        <section id="produtos" className="my-10 sm:my-12">
          <h3 className={`text-2xl sm:text-3xl ${titleFont} text-red-700 dark:text-red-500 mb-10 text-center`}>Nossos Produtos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="my-10 sm:my-12 p-6 sm:p-8 bg-gray-100 dark:bg-gray-800/50 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700/50 transition-colors duration-300">
          <h3 className={`text-2xl sm:text-3xl ${titleFont} text-green-700 dark:text-green-500 mb-6 text-center`}>Entre em Contato</h3>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <h4 className={`text-xl font-semibold ${titleFont} text-red-600 dark:text-red-500 mb-4`}>Fale Conosco</h4>
              <ContactForm />
            </div>
            <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-sm ${bodyFont} text-gray-700 dark:text-gray-300 transition-colors duration-300`}>
              <h4 className={`text-xl font-semibold ${titleFont} text-red-600 dark:text-red-500 mb-4`}>Outras Formas de Contato</h4>
              <p className="mb-3">Prefere falar pelo WhatsApp? Clique abaixo!</p>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg text-sm transition duration-300 shadow-sm hover:shadow-md mb-4 ${bodyFont}`}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 00-8 8c0 1.72.538 3.324 1.466 4.662L2 18l3.338-1.466A7.953 7.953 0 0010 18a8 8 0 008-8 8 8 0 00-8-8zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13zm3.27-4.838c-.18-.09-.946-.467-1.09-.52s-.25-.08-.356.08c-.106.16-.413.52-.507.624s-.187.12-.346.04c-.16-.08-.677-.248-1.287-.794s-.833-1.012-.93-1.172c-.097-.16-.01-.246.07-.326s.16-.188.24-.25c.08-.06.106-.106.16-.187s.026-.16 0-.24c-.027-.08-.356-.85-.487-1.162s-.255-.27-.355-.274h-.308c-.1 0-.265.04-.4.2s-.526.507-.526 1.232.537 1.43.613 1.534c.076.106 1.044 1.704 2.53 2.34.332.14.59.225.793.287.29.09.557.077.764-.037.23-.126.946-.434 1.08-.85.133-.413.133-.767.093-.85s-.076-.133-.156-.223z"/></svg>
                WhatsApp
              </a>
              <p className="mb-1"><strong className="font-medium text-gray-800 dark:text-gray-100">Localização:</strong> Região Metropolitana de Belo Horizonte, Minas Gerais - Brasil</p>
              <p><strong className="font-medium text-gray-800 dark:text-gray-100">Email:</strong> tradicaodeminsasac@hotmail.com</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`bg-gray-800 dark:bg-black text-gray-300 dark:text-gray-400 py-8 text-center text-xs ${bodyFont} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-3">
            <Image src="/images/logo.jpg" alt="Tradição de Minas Logo" width={50} height={50} className="mx-auto rounded-md mb-2 opacity-80" />
            <p className={`font-semibold text-sm text-white dark:text-gray-200 ${titleFont}`}>Tradição de Minas Alimentos</p>
          </div>
          <p className="mb-2">Siga-nos nas redes sociais!</p>
          <div className="flex justify-center space-x-3 mb-3">
            <a href="#" className="hover:text-red-500 dark:hover:text-red-400 transition duration-300">Facebook</a>
            <a href="#" className="hover:text-red-500 dark:hover:text-red-400 transition duration-300">Instagram</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Tradição de Minas. Todos os direitos reservados. Site desenvolvido por Manus AI.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300 transform hover:scale-110 z-50"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 00-8 8c0 1.72.538 3.324 1.466 4.662L2 18l3.338-1.466A7.953 7.953 0 0010 18a8 8 0 008-8 8 8 0 00-8-8zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13zm3.27-4.838c-.18-.09-.946-.467-1.09-.52s-.25-.08-.356.08c-.106.16-.413.52-.507.624s-.187.12-.346.04c-.16-.08-.677-.248-1.287-.794s-.833-1.012-.93-1.172c-.097-.16-.01-.246.07-.326s.16-.188.24-.25c.08-.06.106-.106.16-.187s.026-.16 0-.24c-.027-.08-.356-.85-.487-1.162s-.255-.27-.355-.274h-.308c-.1 0-.265.04-.4.2s-.526.507-.526 1.232.537 1.43.613 1.534c.076.106 1.044 1.704 2.53 2.34.332.14.59.225.793.287.29.09.557.077.764-.037.23-.126.946-.434 1.08-.85.133-.413.133-.767.093-.85s-.076-.133-.156-.223z"/></svg>
      </a>
    </div>
  );
}

