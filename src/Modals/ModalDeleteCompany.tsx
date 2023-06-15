import { useEffect, useState } from 'react';
import { on } from '../Helpers/Events';
import { deleteCompany } from '../Services/CompanyServices';

interface CreateCompanyProps {
  visible: boolean;
  setVisible: any;
}

const ModalDeleteCompany: React.FC<CreateCompanyProps> = ( props ) => {

  const { visible, setVisible } = props;

  const [nit, setNit] = useState(0)

  const closeModal = () => {
    setVisible(false);
  }

  function clickDelete() {
    deleteCompany(nit)
  }

  useEffect(() => {
    if(visible === false){
    }
  }, [visible])

  useEffect(() => {
    
    on('deleteModalCompany', (detail: any) => {
      
      const data = detail.detail.nit;

      console.log('deleting', data);
      
      setVisible(true);
      
      if(data !== null || data !== undefined){
        console.log('data si está', data);
        setNit(data);
      }

    })
    
  }, [])

  return (
    <>

      { visible &&

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800/70">
          <div className="bg-white w-96 rounded p-6">
            <h2 className="text-2xl font-bold mb-4">Borrar empresa</h2>
            <h2 className="text-lg font-bold mb-4">¿Estas seguro que deseas borrar esta empresa?</h2>
            <div className="flex justify-end">
              <button
                onClick={clickDelete}
                className="bg-red-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Borrar
              </button>
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

      }

    </>
  );
};

export default ModalDeleteCompany;
