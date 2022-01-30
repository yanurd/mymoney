import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

//Components
import Header from "../components/Header"

//Validation
import { EmailValidation } from "../constants/RegEx"

//Interfaces
import { LoginForm } from "../interfaces/login"


const Login = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm<LoginForm>()
  const loginForm = (data: LoginForm) => console.log(data)
  
  return (
    <section className="mx-14 flex flex-col justify-center items-center">
      <Header title="My Money" styles="mb-12"/>

      <form 
        onSubmit={handleSubmit(loginForm)}
        className="mt-8 flex flex-col text-white ">
      <h2 className="text-white font-bold text-lg">Welcome Back</h2>
        <label className="my-3 flex flex-col">
          <span>Email</span>
          <input
            placeholder="Enter your mail address"
            className="pl-4 p-2 bg-secondary rounded " 
            {...register("email", {
              required: true,
              pattern: EmailValidation,
            })}/>
            {
              errors.email
              ? <span className="">Invalid email</span>
              : null
            }
        </label>
        <label className="my-3 flex flex-col">
          <span>Password</span>
          <input
            type='password'
            placeholder="Password"
            className="pl-4 p-2 bg-secondary rounded " 
            {...register("password", {
              required: true,
              minLength: 8
            })}
            />
            {
              errors.password 
                ? <span className="">Password must be longer than 8</span>
                : null
            }
        </label>
        <Link to='/password-recovery'
        className="text-right  mb-12 hover:underline hover:underline-offset-8">Forgot password?</Link>
        <button 
          type="submit"
          className="py-3 font-bold text-xl  bg-main-button rounded cursor-pointer">
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