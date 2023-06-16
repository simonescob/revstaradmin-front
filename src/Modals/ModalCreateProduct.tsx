import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Product } from '../entities/Product';
import { on } from '../Helpers/Events';
import { createProduct, updateProduct } from '../Services/ProductServices';

interface CreateProductProps {
  visible: boolean;
  setVisible: any;
}

const ModalCreateProduct: React.FC<CreateProductProps> = (props) => {

  const [mode, setMode] = useState<'create'|'update'>('create')

  const { visible, setVisible } = props;

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<Product>();

  const onSubmit = (data: Product) => {
    // Perform submission logic here
    console.log(data);
    // Reset form

    if(mode === 'create'){
      createProduct(data);
    }

    if(mode === 'update'){
      updateProduct(data);
    }

    reset();
    closeModal();
    window.location.reload();
    
  };

  const closeModal = () => {
    setVisible(false)
  }

  useEffect(() => {
    if(visible === false){
      reset();
      setMode('create');
    }
  }, [visible])

  useEffect(() => {
    
    on('editModalProduct', (detail: any) => {
      
      const data = detail.detail.product;

      console.log('editing', data);
      
      reset();

      setVisible(true);

      // closeModal();

      if(data){
        setMode('update');
        setValue('amount', data.amount);
        setValue('name', data.name);
        setValue('description', data.description);
        setValue('price', data.price);
        setValue('id', data.id);
      }

    })
    
  }, [])

  return (
    <>

      { visible &&
      
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800/70">
          <div className="bg-white w-96 rounded p-6">
            <h2 className="text-2xl font-bold mb-4">Crear Producto</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Nombre
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
                  Cantidad
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
                  Precio
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
                  Descripción
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
                  { mode === 'create' ? 'Crear' : 'Editar' }
                </button>
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      
      }

    </>
  );
};

export default ModalCreateProduct;
