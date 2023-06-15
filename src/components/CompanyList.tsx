import { useEffect, useState } from 'react';
import { Company } from '../entities/Company';
import { fetchListCompanies } from '../Services/CompanyServices';

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {

    fetchListCompanies()
    .then(res => {
      setCompanies(res)
    })
    .catch(err => console.log(err))

  }, []);

  return (
    <div className="p-6 ">
      {companies.map((company) => (
        <div
          key={company.id}
          className="bg-white shadow-md rounded-md p-6 mb-6"
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
