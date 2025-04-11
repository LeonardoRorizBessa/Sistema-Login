import RegisterForm from "../components/RegisterForm";

const SignUp = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-preto">
        <div className="flex flex-row justify-center items-center bg-cinza rounded-3xl">
          <RegisterForm />
          <div className="relative">
            <img 
              className="w-[450px] h-[450px] rounded-r-3xl"
              src="/src/assets/illustration.png" 
              alt="Illustration image" 
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default SignUp;