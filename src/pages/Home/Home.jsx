import React from "react";
import Carrossel from "../../components/Carrossel/Carrossel";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/NavBar/NavBar";
import Posts from "../../components/Posts/Posts";
import Quadros from "../../components/Quadros/Qadros";





function Home (){
    return (
        <>
        <Topbar />
        <Carrossel />
        <Quadros />
        <Posts />
        <Footer />
        </>
    )
}

export default Home