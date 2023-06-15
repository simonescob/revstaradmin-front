import { useEffect, useState } from 'react';

interface Company {
  id: number;
  name: string;
  address: string;
  phone: string;
  // Add more properties as needed
}

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {

    setCompanies([
      {
        name: 'nada 1',
        id: 1,
        address: 'wharever',
        phone: '3057990871'
      },
      {
        name: 'nada 2',
        id: 2,
        address: 'wharever',
        phone: '3057990871'
      },
      {
        name: 'nada 3',
        id: 3,
        address: 'wharever',
        phone: '3057990871'
      },
      {
        name: 'nada 4',
        id: 4,
        address: 'wharever',
        phone: '3057990871'
      },
    ]);

  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Company List</h1>
      {companies.map((company) => (
        <div
          key={company.id}
          className="bg-white shadow-md rounded-md p-6 mb-4"
        >
          <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
          <p className="text-gray-600 mb-1">Address: {company.address}</p>
          <p className="text-gray-600 mb-4">Phone: {company.phone}</p>
          {/* Add more information to display */}
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
