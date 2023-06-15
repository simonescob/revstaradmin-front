
const Topbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 py-4 px-6">
      <h1 className="text-white text-2xl font-semibold">RevStarAdmin</h1>
      <div className="space-x-4">
        <button className="text-white hover:text-gray-300">Registrar Empresa</button>
        <button className="text-white hover:text-gray-300">Administrar Productos</button>
      </div>
    </div>
  );
};

export default Topbar;
