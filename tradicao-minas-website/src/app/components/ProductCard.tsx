import Image from 'next/image';

interface Product {
  name: string;
  description: string;
  volume: string;
  imageUrl: string;
  altText: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="relative w-full h-64">
        <Image src={product.imageUrl} alt={product.altText} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h4 className="text-2xl font-semibold text-orange-700 mb-2">{product.name}</h4>
        <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
        <p className="text-gray-800 font-medium"><strong>Volume:</strong> {product.volume}</p>
      </div>
    </div>
  );
}

