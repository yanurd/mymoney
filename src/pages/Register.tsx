import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import { EmailValidation } from "../constants/RegEx"
import { RegisterForm } from "../interfaces/register"

const Register = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<RegisterForm>()
  const onSubmit = (data: RegisterForm) => console.log(data)
  return (
    <section className="flex flex-col justify-start items-start">
      <Header title='Register'/>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-8 flex flex-col">
          <label className="flex flex-col my-3 text-white" htmlFor="firstName">
            <span className="mb-1">First Name</span>
            <input
              type='text'
              placeholder="Insert your first name"
              className="pl-4 p-2 bg-secondary rounded text-white"
              {...register('firstName',
              {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                minLength: {
                  value: 3,
                  message: 'Min length is 3',
                },
              })
              }
            />
            {
              errors.firstName && errors.firstName?.message
              ? <span className="font-semibold">{errors.firstName.message}</span>
              : null
            }
          </label>
          <label className="flex flex-col my-3 text-white" htmlFor="lastName">
            <span className="mb-1">Last Name</span>
            <input
              type='text'
              placeholder="Insert your last name"
              className="pl-4 p-2 bg-secondary rounded font-white"
              {...register('lastName',
              {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                minLength: {
                  value: 3,
                  message: 'Min length is 3',
                },
              })
              }
            />
            {
              errors.lastName && errors.lastName?.message
              ? <span className="font-semibold">{errors.lastName.message}</span>
              : null
            }
          </label>

        <label className="flex flex-col my-3 text-white" htmlFor="email">
          <span className="mb-1">Email</span>
          <input
            required
            placeholder="Enter your mail address"
            className="pl-4 p-2 bg-secondary rounded font-white" 
            {...register('email', 
            {
              required: {
                value: true,
                message: 'This field is required',
              },
              pattern: {
                value: EmailValidation,
                message: 'Email format is not correct'
              }
            })}/>
            {
              errors.email && errors.email?.message
              ? <span className="font-semibold">{errors.email.message}</span>
              : null
            }
        </label>
        <label className="flex flex-col my-3 text-white" htmlFor="password">
          <span className="mb-1">Password</span>
          <input
            type='password'
            placeholder="Password"
            className="pl-4 p-2 bg-secondary rounded font-white" 
            {...register('password', 
            {
              required: {
                value: true,
                message: 'This field is required',
              },
              minLength: {
                value: 8,
                message: 'Min length is 8',
              },
            })}/>
            {
              errors.password && errors.password?.message
              ? <span className="font-semibold">{errors.password.message}</span>
              : null
            }
        </label>
        <label className="flex flex-col my-3 text-white" htmlFor="repeatPassword">
          <span className="mb-1">Repeat Password</span>
          <input
            type='password'
            placeholder="Type again your password"
            className="pl-4 p-2 bg-secondary rounded" 
            {...register('repeatPassword', 
            {
              required: {
                value: true,
                message: 'This field is required',
              },
              minLength: {
                value: 8,
                message: 'Min length is 8',
              },
            })}/>
            {
              errors.repeatPassword && errors.repeatPassword?.message
              ? <span className="font-semibold">{errors.repeatPassword.message}</span>
              : null
            }
        </label>
        <input 
          type='submit' 
          value='Register'
          className="py-3 mt-16 font-bold text-xl text-white 
          bg-main-button rounded cursor-pointer"/>
      </form>
      <p className="mt-2 text-white">
        Already registered? 
        <Link 
          to='/' 
          className="font-bold hover:underline hover:underline-offset-8 transition-all duration-300">
          <span> Sign in!</span>
        </Link>
      </p>
    </section>
  )
}

export default Register