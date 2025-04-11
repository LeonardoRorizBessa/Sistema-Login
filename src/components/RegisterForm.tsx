import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { ImSpinner2 } from "react-icons/im"
import Input from "./Input"


const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()
  
  const password = watch("password")

  function cadastrar(data: any) {
    console.log(data)
    setIsSubmitted(true)

    setTimeout(() => {
      navigate('/signin')
    }, 2000)
  }

  return ( 
    <>
      <div className="flex flex-col justify-start items-center w-[450px] h-[450px] p-12">
        <div>
          <h1 className="font-bold text-2xl text-branco">Faça seu cadastro!</h1>
        </div>
        <form className="flex flex-col justify-between w-full h-full" onSubmit={handleSubmit(cadastrar)}>
          <div className="flex flex-col justify-center items-center gap-2 h-full">
            <Input
              type="text"
              placeholder="Nome"
              errors={errors.name}
              register={register("name", { required: true })}
            />
            <Input
              type="email"
              placeholder="E-mail"
              errors={errors.email}
              register={register("email", { required: true })}
            />
            <Input
              type="password"
              placeholder="Senha"
              errors={errors.password}
              register={register("password", { required: true })}
            />
            <Input
              type="password"
              placeholder="Confirme sua senha"
              errors={errors.confirmPassword}
              register={register("confirmPassword", {
                required: true,
                validate: value => value === password
              })}
            />
          </div>
          <div className="w-full">
            {isSubmitted ? (
              <div className="flex justify-center items-center rounded-xl w-full p-2 font-bold text-lg transition duration-400 ease-in-out border-2 bg-transparent text-azul border-azul">
                <ImSpinner2 className="animate-spin text-xl" />
              </div>
            ) : (
              <button
                className="flex justify-center items-center rounded-xl w-full p-2 font-bold text-lg cursor-pointer transition duration-400 ease-in-out border-2 bg-transparent text-azul border-azul hover:bg-azul hover:text-cinza"
                type="submit"
              >
                Cadastrar
              </button>
            )}
          </div>
        </form>
      </div>
    </>
   );
}
 
export default RegisterForm;