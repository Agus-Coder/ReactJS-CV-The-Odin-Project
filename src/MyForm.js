import React, { useState } from "react";
import Section from "./Section";
import Input from "./Input";
import imagen from "./profile.jpg";

const MyForm = (props) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [profesion, setProfesion] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [estudios, setEstudios] = useState("");
  const [cursos, setCursos] = useState("");

  return (
    <div className="container">
      <div className="leftInfContainer">
        <div className="Picture">
          <img src={imagen} alt="foto no definida" id="imagen" />{" "}
        </div>
        <div className="Info">
          <Section
            encabezado={`${nombre} ${apellido}`}
            datosBreves={`${profesion}`}
            clase="nombreYApellido"
          />
          <Section
            nombreSeccion="Titulo"
            datosBreves={`${estudios}`}
            clase="tituloYProfesion"
          />
          <Section
            nombreSeccion="Edad"
            datosBreves={`${edad} años`}
            clase="edad"
          />
          <Section
            nombreSeccion="Contacto"
            datosBreves={`Comunicate conmigo en:`}
            clase="contacto"
          />
        </div>
        <div className="Experience">
          <Section
            nombreSeccion="Experiencia1"
            datosBreves={`en esta experiencia:`}
            clase="experiencia1"
          />
        </div>
        <div className="Studies">
          <Section
            nombreSeccion="estudios 1"
            datosBreves={`en esta formacion:`}
            clase="estudios1"
          />
        </div>
      </div>
      <div className="rightInfContainer">
        <form>
          <h3>Informacion Personal</h3>
          <Input
            campo="Nombre:"
            nameParaInput="nombre"
            valor={nombre}
            funcion={(event) => {
              setNombre(event.target.value);
            }}
          />
          <Input
            campo="Apellido:"
            nameParaInput="apellido"
            valor={apellido}
            funcion={(event) => {
              setApellido(event.target.value);
            }}
          />
          <Input
            campo="Edad:"
            nameParaInput="edad"
            valor={edad}
            funcion={(event) => {
              setEdad(event.target.value);
            }}
          />
          <h3>Informacion Laboral</h3>
          <Input
            campo="Profesion:"
            nameParaInput="profesion"
            valor={profesion}
            funcion={(event) => {
              setProfesion(event.target.value);
            }}
          />
          <h4>Experiencias anteriores</h4>
          <Input
            campo="Experiencia:"
            nameParaInput="experiencia"
            valor={experiencia}
            funcion={(event) => {
              setExperiencia(event.target.value);
            }}
          />
          <h3>Formacion Academica</h3>
          <Input
            campo="Estudios:"
            nameParaInput="estudios"
            valor={estudios}
            funcion={(event) => {
              setEstudios(event.target.value);
            }}
          />
          <Input
            campo="Cursos:"
            nameParaInput="cursos"
            valor={cursos}
            funcion={(event) => {
              setCursos(event.target.value);
            }}
          />

          <button type="clear">Clear</button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
