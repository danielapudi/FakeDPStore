import React from 'react';
import '../App.css';

const Usuario = () => {
    const usuario = {
        nombre: "Daniela",
        apellido: "Puerto"
    };

    const iniciales = `${usuario.nombre.charAt(0)}${usuario.apellido.charAt(0)}`;

    return (
        <div className="usuario">
            <div className="iniciales">{iniciales}</div>
        </div>
    );
}

export default Usuario;
