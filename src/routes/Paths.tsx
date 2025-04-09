import { BrowserRouter, Route, Routes } from "react-router";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Paths = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Welcome />} 
          />
          <Route 
            path="/signin"
            element={<SignIn />}
          />
          <Route 
            path="/signup"
            element={<SignUp />}
          />
          <Route 
            path="/home"
            element={<Home />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </>
   );
}
 
export default Paths;