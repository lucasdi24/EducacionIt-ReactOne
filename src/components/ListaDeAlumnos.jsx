import React from 'react';

export default class ListaDeAlumnos extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         alumnos: props.alumnoData
      }
   }

   filtrarPorLetra = () => {
      let variableAFiltrar = prompt()
      if (variableAFiltrar !== '' && variableAFiltrar.length == 1) {
         const result = this.state.alumnos.filter(e => e.first_name.includes(variableAFiltrar))
         this.setState({ alumnos: result })
      } else if (variableAFiltrar !== '' && variableAFiltrar.length > 1){
         alert('No puedes introducir mas de 1 caracteres')
      } 
      else{
         alert('No se filtro ya que no se ha ingresado ninguna letra')
      }

   }

   resetAlumnos = () => {
      this.setState({ alumnos: this.props.alumnoData })
   }

   render() {
      return (
         <div>
            <h1>Lista De Alumnos</h1>

            <button className="botonAlumnos" onClick={this.filtrarPorLetra}> Filtro por Letra</button>

            <button className="botonAlumnos" onClick={this.resetAlumnos}> Resetear información</button>

            <p>Cantidad de alumnos: {this.state.alumnos.length}</p>

            <ul>
               {this.state.alumnos.map(e => <Alumno key={e.id} alumnoData={e} />)}
            </ul>

         </div>
      )
   }
}

const Alumno = (props) => {
   return (
      <li>
         <p>ID: {props.alumnoData.id}</p>
         <p>Nombre: {props.alumnoData.first_name}</p>
         <p>Apellido: {props.alumnoData.last_name}</p>
      </li>
   )
}