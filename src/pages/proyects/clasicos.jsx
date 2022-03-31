import React from "react"
import { Link } from "react-router-dom"

const Clasicos = () =>
{
    return(
        <div className="notfound">
            <h2>Pagina no encontrada</h2>
            <p> Esa pagina no puede encontrarse</p>
            <img src="https://http.cat/404" alt="Hidden Cat"/>
            <p> <Link to="/">Volver al home </Link></p>
        </div>
    );
};

export default Clasicos;