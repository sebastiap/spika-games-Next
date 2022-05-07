import React from "react"
import { Link } from "react-router-dom"

const NotFound = () =>
{
    return(
        <div className="notfound notfoundextra">
            <h1>Pagina no encontrada</h1>
            <p> Esa pagina no puede encontrarse</p>
            <img src="https://http.cat/404" alt="Hidden Cat"/>
            <p> <Link to="/spika-games/">Volver al home </Link></p>
        </div>
    );
};

export default NotFound;