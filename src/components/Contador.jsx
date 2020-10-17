import React from 'react';

export default class Contador extends React.Component {

   constructor() {
      super()

      this.state = {
         valor: 0,
      }
   }
   /* Incrementar  */
   incrementar = () => {
      if (this.state.valor >= 10) return alert('El valor no puede valer mas que 10')
      this.setState({ valor: this.state.valor + 1 })
   }
   /* Decrementar  */
   decrementar = () => {
      if (this.state.valor <= 0) return alert('El valor no puede valer menos que 0')
      this.setState({ valor: this.state.valor - 1 })
   }
   /* Validación */
   deQueColorEs = (parametro) => {
      if (parametro < 5) return 'numero-bajo'
      else if (parametro < 8) return 'numero-correcto'
      else return 'numero-alto'

   }

   render() {
      return (
         <div className="Contador">
            <h2 className="title">Contador</h2>
            <h3>Mi Valor es: <span className={this.deQueColorEs(this.state.valor)}>{this.state.valor}</span></h3>
            <button className="cambiadorDeNumeros" onClick={this.incrementar}>Incrementar</button>
            <button className="cambiadorDeNumeros" onClick={this.decrementar}>Decrementar</button>
            <p className="descripcionEjercicio">
               Ejercicio: Realizar un contador que tenga 2 límites. No puede incrementar más de 10 y no puede incrementar menos de 0. Así mismo tiene que tener una esacala de colores Amarillo es bajo, Verde es intermedio y Rojo es alto.
            </p>
         </div>
      )
   }
}