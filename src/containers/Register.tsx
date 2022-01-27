import { useForm } from "react-hook-form"
import Header from "../components/Header"
import { EmailValidation } from "../constants/RegEx"
import { RegisterForm } from "../interfaces/register"

const Register = () => {

  const {register, handleSubmit} = useForm<RegisterForm>()
  const onSubmit = (data: RegisterForm) => console.log(data)
  return (
    <section className="flex flex-col justify-start items-start">
      <Header title='Register' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-8 flex flex-col">
          <label className="flex flex-col my-3 text-white" htmlFor="firstName">
            <span className="mb-1">First Name</span>
            <input
              name="firstName"
              type='text'
              placeholder="Insert your first name"
              className="pl-4 p-2 bg-secondary rounded"
              {...register('firstName'),
              {
                required: true,
                message: 'This field is required'
              }
              }
            />
          </label>
          <label className="flex flex-col my-3 text-white" htmlFor="lastName">
            <span className="mb-1">Last Name</span>
            <input
              name="lastName"
              type='text'
              placeholder="Insert your last name"
              className="pl-4 p-2 bg-secondary rounded"
              {...register('lastName'),
              {
                required: true,
                message: 'This field is required'
              }
              }
            />
          </label>

        <label className="flex flex-col my-3 text-white" htmlFor="email">
          <span className="mb-1">Email</span>
          <input
            name="email"
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
        <label className="flex flex-col my-3 text-white" htmlFor="password">
          <span className="mb-1">Password</span>
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
        <label className="flex flex-col my-3 text-white" htmlFor="repeatPassword">
          <span className="mb-1">Repeat Password</span>
          <input
            type='password'
            placeholder="Type again your password"
            className="pl-4 p-2 bg-secondary rounded" 
            {...register('repeatPassword'), 
            {
              required: true,
              message: 'This field is required'
            }}/>
        </label>
        <input 
          type='submit' 
          value='Register'
          className="py-3 mt-16 font-bold text-xl text-white 
          bg-main-button rounded cursor-pointer"/>
      </form>
      <p className="mt-2 text-white">
        Already registered? 
        <a 
          href="#" 
          className="font-bold hover:underline hover:underline-offset-8 transition-all duration-300">
            Sign in!
        </a>
      </p>
    </section>
  )
}

export default Register