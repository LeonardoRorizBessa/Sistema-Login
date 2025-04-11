import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { ImSpinner2 } from "react-icons/im"
import Input from "./Input"

const users = [
  {
    id: 1,
    name: "Leonardo",
    email: "leonardo@gmail.com",
    password: "senha123"
  }
]

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: {errors} } = useForm()
  const navigate = useNavigate()

  function login(data: any) {
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      console.log("Usuário logado: ", user);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      setIsSubmitted(false);
      console.log("Email ou senha inválidos");
    }
  }

  return ( 
    <>
      <div className="flex flex-col justify-start items-center w-[450px] h-[450px] p-12">
        <div>
          <h1 className="font-bold text-2xl text-branco">Faça seu login!</h1>
        </div>
        <form className="flex flex-col justify-between w-full h-full" onSubmit={handleSubmit(login)}>
          <div className="flex flex-col justify-center items-center gap-2 h-full">
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
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </>
   );
}
 
export default LoginForm;