import { Link } from "react-router";

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
            <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-2xl font-bold text-branco">Welcome Page</h1>
              <Link 
                to={"/signup"} 
                className="text-branco mt-4"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Welcome;