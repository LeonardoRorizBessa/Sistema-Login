import { Link } from "react-router";

const Home = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-preto">
        <h1 className="text-2xl font-bold text-branco">Logado com sucesso!</h1>
        <Link
          to={"/"}
          className="text-azul mt-8"
        >
          Voltar
        </Link>
      </div>
    </>
   );
}
 
export default Home;