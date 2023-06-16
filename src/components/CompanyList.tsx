import { useEffect, useState } from 'react';
import { Company } from '../entities/Company';
import { trigger } from '../Helpers/Events';
import { fetchListCompanies } from '../Services/CompanyServices';
import jwt_decode from "jwt-decode";

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  const getToken = localStorage.getItem('token') || '';
  const decoded: any = jwt_decode(getToken);

  useEffect(() => {

    fetchListCompanies()
    .then(res => {
      setCompanies(res)
    })
    .catch(err => console.log(err))

  }, []);

  function edit(company: Company) {
    trigger('editModalCompany', { company });
  }

  function remove(nit: number) {
    trigger('deleteModalCompany', { nit });
  }

  return (
    <div className="p-6 ">
      {companies.map((company) => (
        <div
          key={company.nit}
          className="flex justify-between items-center bg-white shadow-md rounded-md p-6 mb-6"
        >
          <div className="">
            <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
            <p className="text-gray-600 mb-1">Address: {company.address}</p>
            <p className="text-gray-600 mb-4">Phone: {company.phone}</p>
          </div>
          <div className="flex flex-col">
            { 
              decoded.userType === 'admin' &&
              <>
                <button onClick={() => edit(company)} className="text-gray-600 mb-1">Editar</button>
                <button onClick={() => remove(company.nit)} className="text-gray-600 mb-4">Borrar</button>
              </>
             }
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
