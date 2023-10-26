import React from "react";
import './Service.css'
import Menu from "../Menu/index";


function Service(){
    return(
        <div>
            <div className="menu">
                    <Menu />
            </div>    
            <div className="center-content">
                <div className="content">
                    <h1 className="content-tittle">Pedidos</h1>
                    <div className="content-layout">
                        Pendiente a disfrutar
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Service;