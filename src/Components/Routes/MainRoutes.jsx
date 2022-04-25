import react from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";

const Mainroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
       {/* keep all the routes here  */}
        {/* /books/* route need to be protected */}
        <Route path="/" element={<Home/>}/>
         <Route path="about" element={<About />} />

        
        <Route path="books" element={
          <RequiredAuth>
            <Books/>
          </RequiredAuth>
        } />
        <Route path="books/:id" element={<SingleBook />} />
        <Route path="books/:id/edit" element={<EditBookData/>}/>

        

        <Route path="login" element={<Login/>}/>
        <Route path="logout" element={<Logout />} />
         
        
      </Routes>
    </>
  );
};
export default Mainroutes;
