import React from "react";

export default class Section extends React.Component {

  render() {
    return (
      <div className={this.props.clase + ' secciones'}>
        <h2>{this.props.encabezado}</h2>
        <h3>{this.props.nombreSeccion}</h3>
        <p>{this.props.datosBreves}</p>
      </div>
    );
  }
}
