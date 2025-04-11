import LoginForm from "../components/LoginForm"

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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
 
export default SignIn;