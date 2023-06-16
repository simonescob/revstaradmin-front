import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CompanyType } from '../entities/Company';
import { on } from '../Helpers/Events';
import { createCompany, updateCompany } from '../Services/CompanyServices';

interface CreateCompanyProps {
  visible: boolean;
  setVisible: any;
}

const ModalCreateCompany: React.FC<CreateCompanyProps> = ( props ) => {

  const [mode, setMode] = useState<'create'|'update'>('create')

  const { visible, setVisible } = props;

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<CompanyType>();

  const onSubmit: SubmitHandler<CompanyType> = (data) => {
    // Perform submission logic here
    console.log(data);
    // Reset form

    if(mode === 'create'){
      createCompany(data);
    }

    if(mode === 'update'){
      updateCompany(data);
    }

    reset();
    // Close modal
    closeModal();

    window.location.reload();
  };

  const closeModal = () => {
    setVisible(false);
  }

  useEffect(() => {
    if(visible === false){
      reset();
      setMode('create');
    }
  }, [visible])

  useEffect(() => {
    
    on('editModalCompany', (detail: any) => {
      
      const data = detail.detail.company;

      // console.log('editing', detail);
      reset();

      setVisible(true);

      if(data){
        setMode('update');
        setValue('nit', data.nit);
        setValue('phone', data.phone);
        setValue('address', data.address);
        setValue('name', data.name);
      }

    })
    
  }, [])

  return (
    <>

      { visible &&

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800/70">
          <div className="bg-white w-96 rounded p-6">
            <h2 className="text-2xl font-bold mb-4">Crear Empresa</h2>
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
                {errors.name && <span className="text-red-500">Nombre es requerido</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                  Dirección
                </label>
                <input
                  type="text"
                  id="address"
                  {...register('address', { required: true })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.address && <span className="text-red-500">DIrección es requerido</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  type="number"
                  id="phone"
                  {...register('phone', { required: true, min: 0 })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.phone && <span className="text-red-500">Teléfono es requerido</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="nit">
                  NIT
                </label>
                <input
                  type="number"
                  id="nit"
                  {...register('nit', { required: true, min: 0 })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.phone && <span className="text-red-500">Nit es requerido</span>}
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
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

      }

    </>
  );
};

export default ModalCreateCompany;
