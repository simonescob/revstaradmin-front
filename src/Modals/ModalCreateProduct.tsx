import { useForm } from 'react-hook-form';
import { trigger } from '../Helpers/Events';
import { createProduct } from '../Services/ProductServices';

interface ProductFormInputs {
  name: string;
  amount: number;
  price: number;
  description: string;
  image?: string,
}

const ModalCreateProduct: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductFormInputs>();

  const onSubmit = (data: ProductFormInputs) => {
    // Perform submission logic here
    console.log(data);
    // Reset form

    createProduct(data);

    reset();
    closeModal();
    
  };

  const closeModal = () => {
    trigger('closeModalProduct');
  }

  return (
    <>

      {/* Modal */}
      
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800/70">
          <div className="bg-white w-96 rounded p-6">
            <h2 className="text-2xl font-bold mb-4">Create Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: true })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  {...register('amount', { required: true, min: 1 })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.amount && <span className="text-red-500">Amount must be at least 1</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  {...register('price', { required: true, min: 0 })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.price && <span className="text-red-500">Price must be a positive number</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  {...register('description', { required: true })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.description && <span className="text-red-500">Description is required</span>}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Create
                </button>
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      
    </>
  );
};

export default ModalCreateProduct;
