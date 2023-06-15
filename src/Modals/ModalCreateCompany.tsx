import { useForm } from 'react-hook-form';
import { trigger } from '../Helpers/Events';

interface CompanyFormInputs {
  name: string;
  address: string;
  phone: string;
}

const ModalCreateCompany: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CompanyFormInputs>();

  const onSubmit = (data: CompanyFormInputs) => {
    // Perform submission logic here
    console.log(data);
    // Reset form
    reset();
    // Close modal
    // toggleModal();
  };

  const closeModal = () => {
    trigger('closeModalCompany');
  }

  return (
    <>

      {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800/70">
          <div className="bg-white w-96 rounded p-6">
            <h2 className="text-2xl font-bold mb-4">Create Company</h2>
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
                <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  {...register('address', { required: true })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.address && <span className="text-red-500">Address is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  {...register('phone', { required: true })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.phone && <span className="text-red-500">Phone is required</span>}
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

export default ModalCreateCompany;
