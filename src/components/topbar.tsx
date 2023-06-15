import { Link } from 'react-router-dom';

const Topbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 py-4 px-6">
      
      <h1 className="text-white text-2xl font-semibold">
        <Link className="text-white hover:text-gray-300" to="/">
          RevStarAdmin
        </Link>
      </h1>

      <div className="space-x-4">
        
        <Link className="text-white hover:text-gray-300" to="/login">
          Login
        </Link>

        <Link className="text-white hover:text-gray-300" to="/companies">
          Empresas
        </Link>

        <Link className="text-white hover:text-gray-300" to="/products">
          Inventario
        </Link>

      </div>
    </div>
  );
};

export default Topbar;
