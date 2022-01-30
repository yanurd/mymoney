import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import Header from "../components/Header"
import { PasswordRecoveryForm } from "../interfaces/passwordRecovery"
import { EmailValidation } from "../constants/RegEx"

const PasswordRecovery = () => {
  const {register, handleSubmit} = useForm<PasswordRecoveryForm>()
  const onSubmit = (data: PasswordRecoveryForm) => console.log(data)
  const navigate = useNavigate()
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
              pattern: '/^[A-Za-z]+$/i',
              message: 'Email format is not correct'
            }}/>
        </label>
        
        <button 
          type="submit"
          className="py-3 font-bold text-xl text-white bg-main-button rounded cursor-pointer">
            Login
          </button>
      </form>
      <button 
            className="mt-2 text-sm text-white"
            onClick={() => navigate(-1)}>Go back</button>
      <h3 className="mt-2 text-sm text-white">
          In case we find an e-mail, you’ll receive instructions on how to recover your access to MyMoney
          </h3>
    </section>
  )
}

export default PasswordRecovery