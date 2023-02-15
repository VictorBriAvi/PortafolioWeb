import React from "react";

import avatar from "../imagenes/home/Avatar-Maker.svg";

import waveCentral from "../imagenes/home/waveCentral.svg";

import "../style/Presentacion.css";
import "../style/Home.css";

const Presentacion = () => {
  return (
    <>
      <div className=" vh-100 contenedor_home  ">
        <div className="contenedor_imagen_avatar ">
          <h2 className="texto_avatar fw-bolder ">
            Desarrollador Frontend y Backend
          </h2>
          <h2 className="texto_avatar ">Creciendo Contastemente</h2>
          <img
            src={avatar}
            className="home_avatar animate__animated animate__fadeInDown "
            alt=""
          />
        </div>
        <img src={waveCentral} className="wave_contenedor " alt="" />
      </div>
      {/*  Estamos agregando la descripcion de mi persona */}
      <div className="vh-50 ">
        <div className="contenedor_home_segundaparte">
          <h3 className="fw-bolder mb-2">
            Hola mi nombre es Victor. Encantado en conocerte
          </h3>
          <p>
            Te doy la bienvenida a mi portafolio web en el podras contemplar el
            crecimiento de mi dia a dia, invitandote a ver aquellas tecnologias
            que uso, mis proyectos y algunos cursos a nivel de certificacion
          </p>
        </div>
      </div>
    </>
  );
};

export default Presentacion;
