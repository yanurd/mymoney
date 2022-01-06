import { useForm } from "react-hook-form"

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
      <Header title="My Money" />

      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col ">
      <h2 className="text-white">Welcome Back</h2>
        <label className="my-3">
          <input
            required
            placeholder="Enter your mail address"
            className="pl-4 p-2 bg-secondary rounded" 
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
            className="pl-4 p-2 bg-secondary rounded" 
            {...register('password'), 
            {
              required: true,
              message: 'This field is required'
            }}/>
        </label>
        <a 
          href="#"
          className="text-right text-white mb-12">Forgot password?</a>
        <button 
          type="submit"
          className="py-3 font-bold text-xl text-white bg-main-button rounded cursor-pointer">
            Login
          </button>
      </form>
      <h3 className="mt-2 text-sm text-white">Dont have an account? <a href="#">Create One</a></h3>
    </section>
  )
}

export default Login