import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../Services/AuthServices';

interface LoginForm {
  email: string;
  password: string;
}

interface Alerts {
  msg: string;
  type: 'init' | 'error' | 'success';
}

const Login: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const [alert, setAlert] = useState<Alerts>({
    msg: '',
    type: 'init'
  });

  const navigate = useNavigate();

  const onSubmit = (data: LoginForm) => {

    postLogin(data.email, data.password)
    .then((res: any) => {
      localStorage.setItem('token', res.token);
      navigate('/companies');
    })
    .catch(err => {
      console.log(err)

      setAlert({
        msg: 'Usuario y/o contraseña invalidos',
        type: 'error'
      })

      setTimeout(() => {
        setAlert({
          msg: '',
          type: 'init'
        })
      }, 4000);
    })

  };

  return (
    <div className="flex justify-center items-center lg:h-[75vh]">
      <div className="w-[300px] p-6 bg-gray-200 rounded-md">
        <h1 className="text-2xl font-semibold mb-1">Acceso de usuario</h1>
        { alert.type === 'error' && <p className='text-red-600'>{alert.msg}</p> }
        <form className='mt-3' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Correo:
            </label>
            <input
              type="text"
              id="email"
              {...register('email', { required: true })}
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            {errors.email && <span className="text-red-500">Correo es requerido</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: true })}
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            {errors.password && <span className="text-red-500">Contraseña es requerido</span>}
          </div>
          <button type="submit" className="w-full py-2 bg-gray-700 text-white rounded-md">
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
