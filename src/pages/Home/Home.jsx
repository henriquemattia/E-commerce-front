import React from "react";
import Carrossel from "../../components/Carrossel/Carrossel";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/NavBar/NavBar";
import Posts from "../../components/Posts/Posts";
import Quadros from "../../components/Quadros/Qadros";

import Modelo from "../../components/Modal/Modal";




function Home (){
    return (
        <>
        <Modelo />
        <Topbar />
        <Carrossel />
        <Quadros />
        <Posts />
        <Footer />
        </>
    )
}

export default Home