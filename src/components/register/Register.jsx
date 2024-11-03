import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate();
const {register,handleSubmit,formState:{errors}}=useForm();
function submitForm(obj){
  console.log(obj)
  const newuser=obj
  
  fetch('http://localhost:3000/users',{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(newuser)
  })
  .then((res) => {
    if (res.ok) { 
      navigate("/login");
    }
  })
  .catch((error) => {
      console.error("Error during registration:", error);
  });
}
  return (
<div className="h-full w-full bg-gradient-to-r from-black via-indigo-900 to-purple-900 flex justify-center items-center">
    
    <div className="card !h-[578px] w-[300px] sm:h-[300px] sm:w-[350px] md:h-[400px] md:w-[500px] md:ml-64 lg:h-[450px] lg:w-[550px] bg-gray-500 ml-40  flex flex-col justify-center items-center rounded-lg">
      <h1 className='text-center text-black text-4xl my-2 font-serif'>Registration Form</h1>
        <form action="" onSubmit={handleSubmit(submitForm)}>
          <div className='my-3 text-center'>
            <label htmlFor="username" className='text-yellow-50 !text-start ml-0'>Enter Username</label><br/>
            <input id='username' type="text" {...register('username')} className="border border-gray-300 rounded-lg p-2 w-3/3   focus:ring-blue-500" placeholder="First Name"/>
          </div>
          <div className='my-3 text-center'>
            <label htmlFor="password" className='text-yellow-50 !text-start ml-0'>Enter Password</label><br/>
            <input id='password' type="password" {...register('password')} className="border border-gray-300 rounded-lg p-2 w-3/3  focus:ring-blue-500" placeholder="First Name"/>
          </div>
          <div className='my-3 text-center'>
            <label htmlFor="email" className='text-yellow-50 !text-start ml-0'>Email</label><br/>
            <input type="email" id='email' {...register('email')} className="border border-gray-300 rounded-lg p-2 w-3/3   focus:ring-blue-500" placeholder="First Name"/>
          </div>
          <div className='my-3 text-center'>
            <label htmlFor="gender" className='text-yellow-50 !text-start ml-0'>gender</label><br/>
            <input type="text" id='gender' {...register('gender')} className="border border-gray-300 rounded-lg p-2 w-3/3   focus:ring-blue-500" placeholder="First Name"/>
          </div>
          <div className='my-3 text-center'>
            <label htmlFor="dob" className='text-yellow-50 !text-start ml-0'>Enter DateOfBirth</label><br/>
            <input type="date" id='dob' {...register('dob')} className="border border-gray-300 rounded-lg p-2 w-3/3   focus:ring-blue-500" placeholder="First Name"/>
          </div>
          <button type='submit' className="block mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
          Register
            </button>
        </form>
    </div>
</div>
  )
}

export default Register