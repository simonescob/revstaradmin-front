import { useForm } from 'react-hook-form';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log('Email:', data.email);
    console.log('Password:', data.password);
  };

  return (
    <div className="flex justify-center items-center lg:h-[85vh]">
      <div className="w-64 p-6 bg-gray-200 rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: true })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
