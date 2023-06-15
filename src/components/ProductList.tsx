import { useEffect, useState } from 'react';
import { Product } from '../entities/Product';
import { fetchListProducts } from '../Services/ProductServices';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {

    fetchListProducts()
    .then(res => {
      setProducts(res)
    })
    .catch(err => console.log(err))
    
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product, key) => (
        <div key={key} className="bg-white shadow-md rounded-md p-6">
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
