import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  amount: number;
  price: number;
  description: string;
  image: string;
  // Add more properties as needed
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    
    setProducts([
      {
        name: 'product 1',
        id: 1,
        price: 2034,
        description: '3057990871',
        amount: 73,
        image: 'https://i.imgur.com/2SWQQOR.jpg'
      },
      {
        name: 'product 2',
        id: 2,
        price: 2034,
        description: '3057990871',
        amount: 73,
        image: 'https://i.imgur.com/2yqBrku.jpg'
      },
      {
        name: 'product 3',
        id: 3,
        price: 2034,
        description: '3057990871',
        amount: 73,
        image: 'https://i.imgur.com/OIXgVNX.jpg'
      },
    ]);
    
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-md p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover mb-4 rounded"
          />
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">Amount: {product.amount}</p>
          <p className="text-gray-600 mb-2">Price: ${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
          {/* Add more information to display */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
