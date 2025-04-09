import { Link } from "react-router"

const NotFound = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-preto">
        <h1 className="text-2xl font-bold text-branco">NotFound Page</h1>
        <Link 
          to={"/"}
          className="text-azul mt-8"
        >
          Votlar
        </Link>
      </div>
    </>
   );
}
 
export default NotFound;