import Image from 'next/image';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';

const products = [
  {
    name: 'Carolina Reaper 100ML',
    description: 'A pimenta mais forte do mundo! Ideal para os amantes de sabores intensos e picantes. Use com moderação.',
    volume: '100ml',
    imageUrl: '/images/carolina_reaper_100ml.png',
    altText: 'Molho de Pimenta Carolina Reaper Tradição de Minas',
  },
  {
    name: 'Molho Completo 150ml',
    description: 'Um tempero versátil para todos os tipos de pratos. Realça o sabor de carnes, aves, peixes e saladas.',
    volume: '150ml',
    imageUrl: '/images/molho_completo_150ml.jpg',
    altText: 'Molho Completo Tradição de Minas',
  },
  {
    name: 'Molho de Pimenta Extra Forte 150ml',
    description: 'Para quem gosta de um toque especial e picante nas refeições. Feito com pimentas selecionadas.',
    volume: '150ml',
    imageUrl: '/images/molho_pimenta_extra_forte.jpg',
    altText: 'Molho de Pimenta Extra Forte Tradição de Minas',
  },
];

export default function HomePage() {
  const whatsappNumber = "553186131037"; // WhatsApp number provided by user
  const whatsappMessage = "Olá! Gostaria de mais informações sobre os produtos da Tradição de Minas.";

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-orange-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <Image src="/images/logo.jpg" alt="Tradição de Minas Logo" width={80} height={80} className="mr-4 rounded-md shadow-sm" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Tradição de Minas</h1>
              <p className="text-xs sm:text-sm text-amber-200">Alimentos com Sabor Autêntico</p>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-3 sm:space-x-4 text-sm sm:text-base">
              <li><a href="#home" className="hover:text-amber-300 transition duration-300">Início</a></li>
              <li><a href="#produtos" className="hover:text-amber-300 transition duration-300">Produtos</a></li>
              <li><a href="#sobre" className="hover:text-amber-300 transition duration-300">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-amber-300 transition duration-300">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>      {/* Hero Section */}
      <section id="home" className="py-16 sm:py-24 bg-gradient-to-br from-orange-600 to-amber-500 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <Image src="/images/logo.jpg" alt="Tradição de Minas Logo Hero" width={150} height={150} className="rounded-full shadow-2xl border-4 border-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">O Verdadeiro Sabor de Minas na sua Mesa</h2>
          <p className="text-lg sm:text-xl text-amber-100 mb-10 max-w-2xl mx-auto">Descubra nossos molhos e temperos artesanais, feitos com tradição e paixão, direto da região metropolitana de Belo Horizonte.</p>
          <a href="#produtos" className="bg-white hover:bg-amber-100 text-orange-700 font-bold py-3 px-10 rounded-lg text-lg sm:text-xl transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Conheça Nossos Produtos
          </a>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Sobre Nós Section */}
        <section id="sobre" className="my-12 sm:my-16 p-6 sm:p-10 bg-white rounded-xl shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-orange-700 mb-8 text-center">Sobre a Tradição de Minas</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <Image src="/images/logo.jpg" alt="Tradição de Minas Empresa" width={300} height={300} className="rounded-lg shadow-lg object-contain" />
            </div>
            <div className="md:w-2/3 text-md sm:text-lg text-gray-700 space-y-4 text-justify">
              <p>Localizada na acolhedora região metropolitana de Belo Horizonte, em Minas Gerais, a <strong>Tradição de Minas Alimentos</strong> nasceu do desejo de compartilhar o verdadeiro sabor da culinária mineira. Nossa paixão é levar à sua mesa produtos de altíssima qualidade, elaborados com ingredientes selecionados e o carinho das receitas que atravessam gerações.</p>
              <p>Valorizamos a autenticidade, o frescor e a tradição em cada item que produzimos, buscando sempre proporcionar uma experiência gastronômica única e memorável. Nossos molhos e temperos são cuidadosamente preparados para trazer o gostinho de Minas para o seu dia a dia.</p>
              <p>Convidamos você a experimentar a riqueza dos sabores mineiros e a fazer parte da nossa história!</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produtos" className="my-12 sm:my-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-orange-700 mb-12 text-center">Nossos Produtos Estrela</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="my-12 sm:my-16 p-6 sm:p-10 bg-orange-100 rounded-xl shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-orange-700 mb-8 text-center">Entre em Contato</h3>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold text-orange-600 mb-4">Fale Conosco</h4>
              <ContactForm />
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center md:text-left">
              <h4 className="text-2xl font-semibold text-orange-600 mb-6">Outras Formas de Contato</h4>
              <p className="text-gray-700 mb-4 text-lg">Prefere falar pelo WhatsApp? Clique no botão abaixo!</p>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105 mb-6"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                WhatsApp
              </a>
              <p className="text-gray-700 mb-2"><strong className="text-orange-600">Localização:</strong> Região Metropolitana de Belo Horizonte, Minas Gerais - Brasil</p>
              <p className="text-gray-700"><strong className="text-orange-600">Email:</strong> tradicaodeminsasac@hotmail.com</p>
              {/* Add more contact details if available */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-800 text-amber-200 py-10 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Image src="/images/logo.jpg" alt="Tradição de Minas Logo" width={70} height={70} className="mx-auto rounded-md mb-3 shadow-sm" />
            <p className="font-semibold text-lg">Tradição de Minas Alimentos</p>
            <p className="text-sm">Região Metropolitana de Belo Horizonte, Minas Gerais - Brasil</p>
          </div>
          <div className="mb-4">
            <p className="text-sm">Siga-nos nas redes sociais!</p>
            {/* Placeholder for social media icons/links */}
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:text-white transition duration-300">Facebook</a>
              <a href="#" className="hover:text-white transition duration-300">Instagram</a>
            </div>
          </div>
          <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Tradição de Minas. Todos os direitos reservados. Site desenvolvido por Manus AI.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button - Optional */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110 z-50"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.001 2.003C5.586 2.003 2 5.59 2 10.004c0 1.604.465 3.109 1.28 4.43l-1.213 4.388 4.515-1.18c1.276.732 2.726 1.148 4.245 1.148 4.418 0 8.004-3.586 8.004-8.002S14.418 2.003 10.001 2.003zm0 14.562c-1.32 0-2.57-.324-3.66-.914l-.26-.153-2.714.71.724-2.624-.17-.276A6.523 6.523 0 013.442 10.004c0-3.617 2.936-6.558 6.56-6.558 3.617 0 6.558 2.94 6.558 6.558 0 3.618-2.94 6.559-6.558 6.559zm3.27-4.838c-.18-.09-.946-.467-1.09-.52s-.25-.08-.356.08c-.106.16-.413.52-.507.624s-.187.12-.346.04c-.16-.08-.677-.248-1.287-.794s-.833-1.012-.93-1.172c-.097-.16-.01-.246.07-.326s.16-.188.24-.25c.08-.06.106-.106.16-.187s.026-.16 0-.24c-.027-.08-.356-.85-.487-1.162s-.255-.27-.355-.274h-.308c-.1 0-.265.04-.4.2s-.526.507-.526 1.232.537 1.43.613 1.534c.076.106 1.044 1.704 2.53 2.34.332.14.59.225.793.287.29.09.557.077.764-.037.23-.126.946-.434 1.08-.85.133-.413.133-.767.093-.85s-.076-.133-.156-.223z" />
        </svg>
      </a>
    </div>
  );
}

