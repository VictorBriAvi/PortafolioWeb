import React from "react";
import "../style/Home.css";

import avatar from "../imagenes/home/Avatar-Maker.svg";

import waveCentral from "../imagenes/home/waveCentral.svg";
import LenguajesProgramacion from "./LenguajesProgramacion";
import Proyectos from "./Proyectos";
import Cursos from "./Cursos";

/* Aca estamos llamando a la imagenes que estan en la pagina home */

import Contacto from "./Contacto";

const Home = () => {
  return (
    <>
      <div className=" vh-100 contenedor_home  ">
        <div className="contenedor_imagen_avatar">
          <h2 className="texto_avatar">Desarrollador Fronted y Backend</h2>
          <h2 className="texto_avatar ">Creciendo Contastemente</h2>
          <img
            src={avatar}
            className="home_avatar animate__animated animate__fadeInDown "
            alt=""
          />
        </div>
        <img src={waveCentral} className="wave_contenedor " alt="" />
      </div>
      {/* Estamos agregando la descripcion de mi persona */}
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

      {/* Aca estamos agregando todo la parte de lenguajes de programacion */}
      <div className="">
        <LenguajesProgramacion />
      </div>
      {/* Aca se agregan todos los proyectos  */}
      <div className="">
        <Proyectos />
      </div>

      {/* Aca agregamos todos los cursos */}
      <div className="contenedor_cursos ">
        <Cursos />
      </div>

      {/* Aca estamos agregando el contato */}
      <div>
        <Contacto />
      </div>
    </>
  );
};

export default Home;
