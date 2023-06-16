import { useState } from 'react';
import ProductList from '../components/ProductList'
import ModalCreateProduct from '../Modals/ModalCreateProduct';
import ModalDeleteProduct from '../Modals/ModalDeleteProduct';

function Products() {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  function showModal() {
    setModalVisible(true);
  }

  return (
    <div>
      
      <div className="flex justify-between">

        <h2 className='text-4xl font-bold'>Productos</h2>

        <button className='bg-gray-900 text-white rounded-md py-2 px-5' onClick={showModal}>Crear Producto</button>

      </div>

      <ProductList/>

      <ModalCreateProduct visible={modalVisible} setVisible={setModalVisible} />
      <ModalDeleteProduct visible={modalDelete} setVisible={setModalDelete} />

    </div>
  )
}

export default Products