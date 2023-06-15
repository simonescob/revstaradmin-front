import { useState } from 'react';
import CompanyList from '../components/CompanyList'
import ModalCreateCompany from '../Modals/ModalCreateCompany'
import ModalDeleteCompany from '../Modals/ModalDeleteCompany';

function Companies() {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  function showModal() {
    setModalVisible(true);
  }

  return (
    <div>
      
      <div className="flex justify-between">

        <h2 className='text-4xl font-bold'>Empresas</h2>

        <button className='bg-gray-900 text-white rounded-md py-2 px-5' onClick={showModal}>Crear Empresa</button>

      </div>

      <CompanyList/>

      <ModalCreateCompany visible={modalVisible} setVisible={setModalVisible} />
      <ModalDeleteCompany visible={modalDelete} setVisible={setModalDelete} />

    </div>
  )
}

export default Companies