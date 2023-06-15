import { useState } from 'react';
import ProductList from '../components/ProductList'
import { on, trigger } from '../Helpers/Events';
import ModalCreateProduct from '../Modals/ModalCreateProduct';

function Products() {

  const [modalVisible, setModalVisible] = useState(false);

  function showModal() {
    trigger('showModalProduct');
  }
  
  on('showModalProduct', () => {
    setModalVisible(true);
  })

  on('closeModalProduct', () => {
    setModalVisible(false);
  })

  return (
    <div>
      
      <div className="flex justify-between">

        <h2 className='text-4xl font-bold'>Productos</h2>

        <button className='bg-gray-900 text-white rounded-md py-2 px-5' onClick={showModal}>Registrar empresa</button>

      </div>

      <ProductList/>

      { modalVisible && <ModalCreateProduct/> }

    </div>
  )
}

export default Products