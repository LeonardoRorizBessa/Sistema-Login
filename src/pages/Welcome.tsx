import { Link } from "react-router"

const Welcome = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-preto">
        <div className="flex flex-row justify-center items-center bg-cinza rounded-3xl">
          <div className="relative">
            <img 
              className="w-[450px] h-[450px] rounded-3xl"
              src="/src/assets/illustration.png" 
              alt="Illustration image" 
            />
            <div className="flex flex-col justify-between items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full py-16 px-12">
              <h1 className="text-3xl font-bold text-branco">Seja bem vindo!</h1>
              <div className="flex flex-col w-full gap-4">
                <Link
                  className="flex justify-center items-center rounded-xl w-full p-2 font-bold text-lg cursor-pointer transition duration-400 ease-in-out border-2 bg-transparent text-branco border-branco hover:bg-branco hover:text-cinza"
                  to={"/signin"}
                >
                  Entrar
                </Link>
                <Link
                  className="flex justify-center items-center rounded-xl w-full p-2 font-bold text-lg cursor-pointer transition duration-400 ease-in-out border-2 bg-transparent text-branco border-branco hover:bg-branco hover:text-cinza"
                  to={"/signup"}
                >
                  Cadastrar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Welcome;