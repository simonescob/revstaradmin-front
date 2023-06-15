import { useState } from 'react';
import CompanyList from '../components/CompanyList'
import { on, trigger } from '../Helpers/Events'
import ModalCreateCompany from '../Modals/ModalCreateCompany'

function Companies() {

  const [modalVisible, setModalVisible] = useState(false);

  function showModal() {
    trigger('showModalCompany');
  }
  
  on('showModalCompany', () => {
    setModalVisible(true);
  })

  on('closeModalCompany', () => {
    setModalVisible(false);
  })

  return (
    <div>
      
      <div className="flex justify-between">

        <h2 className='text-4xl font-bold'>Empresas</h2>

        <button className='bg-gray-900 text-white rounded-md py-2 px-5' onClick={showModal}>Crear Empresa</button>

      </div>

      <CompanyList/>

      { modalVisible && <ModalCreateCompany/> }

    </div>
  )
}

export default Companies