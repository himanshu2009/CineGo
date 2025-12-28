import React, { useEffect } from "react" 


import {useLocation, Routes ,Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import MyBookings from "./pages/MyBookings"
import Favorite from "./pages/Favorite"
import MovieDetails from "./pages/MovieDetails"
import SeatLayout from "./pages/SeatLayout"
import {Toaster} from "react-hot-toast"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
function App() {
 


  const isAdminRoute=useLocation().pathname.startsWith('/admin');


  return (
    <>
    <Toaster/>

    {/*  navbar is only for non admin routes */}
      {!isAdminRoute &&<NavBar/>}
     

      {/* <Footer/> */}

    <Routes>
 
  
      <Route path="/" element={<Home/>}/>
       {/* list of movies card  */}
      <Route path="/movies" element={<Movies/>}/>
      {/* detail of specific movie card */}
      <Route path="/movies/:id" element={<MovieDetails/>}/>
      {/*select seat  */}
      <Route path="/movies/:id/:date" element={<SeatLayout/>}/>
      {/*see your all bookings */}
      <Route path="/mybookings" element={<MyBookings/>}/>
      <Route path="/favorite" element={<Favorite/>}/>
   

      </Routes>
      
    </>
  )
}

export default App
