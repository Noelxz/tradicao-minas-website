import Image from 'next/image';

interface Product {
  name: string;
  description: string;
  volume: string;
  price: string; // Added price to the interface
  imageUrl: string;
  altText: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col h-full">
      <div className="relative w-full h-64">
        <Image src={product.imageUrl} alt={product.altText} layout="fill" objectFit="contain" className="p-4"/>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-semibold text-orange-700 mb-2">{product.name}</h4>
        <p className="text-gray-600 text-sm mb-3 flex-grow">{product.description}</p>
        <div className="mt-auto">
          <p className="text-gray-800 font-medium text-sm"><strong>Volume:</strong> {product.volume}</p>
          <p className="text-red-600 font-bold text-lg mt-2">Preço: {product.price}</p>
        </div>
      </div>
    </div>
  );
}

