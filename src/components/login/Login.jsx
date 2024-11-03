import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  function loginForm(obj) {
    const queryParams = new URLSearchParams({
      username: obj.username,
      password: obj.password
    }).toString();

    fetch(`http://localhost:3000/users?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) { 
        navigate("/profile");
      } else {
        console.error("Login failed: Invalid username or password");
      }
    })
    .catch((error) => {
      console.error("Error during login:", error);
    });
  }

  return (
    <div className="h-full w-full bg-gradient-to-r from-black via-indigo-900 to-purple-900 flex justify-center items-center">
      <div className="card h-[278px] w-[300px] ml-32 mr-10 sm:h-[300px] sm:w-[350px] md:h-[400px] md:w-[500px] md:ml-64 lg:h-[450px] lg:w-[550px] sm bg-gray-500 ml-40  flex flex-col justify-center items-center rounded-lg">
        <h1 className='text-center text-black text-4xl my-2 font-serif'>Login Form</h1>
        <form onSubmit={handleSubmit(loginForm)}>
          <div className='my-3 text-center'>
            <label htmlFor="username" className='text-yellow-50 !text-start ml-0'>Enter Username</label><br/>
            <input type="text" {...register('username')} className="border border-gray-300 rounded-lg p-2 w-3/3 focus:ring-blue-500" placeholder="Username"/>
          </div>
          <div className='my-3 text-center'>
            <label htmlFor="password" className='text-yellow-50 !text-start ml-0'>Enter Password</label><br/>
            <input type="password" {...register('password')} className="border border-gray-300 rounded-lg p-2 w-3/3 focus:ring-blue-500" placeholder="Password"/>
          </div>
          <button type='submit' className="block w-[140px] border-2 border-black mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
