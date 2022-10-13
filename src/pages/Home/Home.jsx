import React from "react";

//  Components
import Carrossel from "../../components/Carrossel/Carrossel";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/NavBar/NavBar";
import Posts from "../../components/Posts/Posts";
import Quadros from "../../components/Quadros/Qadros";
import Modelo from "../../components/Modal/Modal";



function Vizualized (){

    if (!localStorage.getItem("modal")) {
        return(
            <Modelo 
            value={true}
            />
        )
    } else {
        return null
    }
}


function Home (){

    return (
        <>
        <Vizualized />
        <Topbar />
        <Carrossel />
        <Quadros />
        <Posts />
        <Footer />
        </>
    )
}

export default Home