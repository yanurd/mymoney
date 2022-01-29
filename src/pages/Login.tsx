import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

//Components
import Header from "../components/Header"

//Validation
import { EmailValidation } from "../constants/RegEx"

//Interfaces
import { LoginForm } from "../interfaces/login"


const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>()
  const onSubmit = (data: LoginForm) => console.log(data)
  return (
    <section className="mx-14 flex flex-col justify-center items-center">
      <Header title="My Money" styles="mb-12"/>

      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col ">
      <h2 className="text-white">Welcome Back</h2>
        <label className="my-3">
          <input
            required
            placeholder="Enter your mail address"
            className="pl-4 p-2 bg-secondary rounded text-white" 
            {...register('email'), 
            {
              required: true,
              message: 'This field is required'
            },
            {
              pattern: EmailValidation,
              message: 'Email format is not correct'
            }}/>
        </label>
        <label className="my-3">
          <input
            type='password'
            placeholder="Password"
            className="pl-4 p-2 bg-secondary rounded text-white" 
            {...register('password'), 
            {
              required: true,
              message: 'This field is required'
            }}/>
        </label>
        <Link to='/password-recovery'
        className="text-right text-white mb-12 hover:underline hover:underline-offset-8">Forgot password?</Link>
        <button 
          type="submit"
          className="py-3 font-bold text-xl text-white bg-main-button rounded cursor-pointer">
            Login
          </button>
      </form>
      <h3 className="mt-2 text-sm text-white">Dont have an account? <span> </span> 
        <Link to='/register' 
          className="font-bold hover:underline hover:underline-offset-8"> 
             Create one
        </Link>
      </h3>
    </section>
  )
}

export default Login