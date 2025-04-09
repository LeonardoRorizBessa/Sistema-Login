import { Link } from "react-router";

const SignIn = () => {
  return (  
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-preto">
        <div className="flex flex-row justify-center items-center bg-cinza rounded-3xl">
          <div className="relative">
            <img 
              className="w-[450px] h-[450px] rounded-l-3xl"
              src="/src/assets/illustration.png" 
              alt="Illustration image" 
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-2xl font-bold text-branco">Sign In Page</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[450px] h-[450px] p-8">
            <Link 
              to={"/home"} 
              className="text-azul mt-8"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default SignIn;