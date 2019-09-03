import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceDay:0,
      priceMoth:0,
      priceUnith:0,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.coste !== this.props.coste ) {
      let tiempo = 1;
      let size = this.props.products.length;
      let coste = 0;
      let costeF = 0;
      let price = 0;

      if(size === 0) {
        size = 1;
      }else if(size === 1) {
        tiempo = 225;
      }else if(size >= 2 && size <=4 ) {
        tiempo = 258;
      }else if(size >= 5) {
        tiempo = 294;
      }

      coste = this.props.coste/tiempo;
      costeF = this.props.costeF;

      price = ((coste) + ((coste-(costeF/1800))*0.19)) ;

    //  price = (coste) + ((coste-(costeF/1800))*0.19) ;

      this.setState({
        priceDay: price,
        priceMoth: price * 30,
        priceUnith: price/size,
      });
    }
  }

  render() {
    const products = this.props.products;
    const { priceDay, priceUnith, sachet } = this.state;

    return(
      <div className="Form">
        <div className="form-header">
          { products.map((item, index) =>
          <div className="form-container-header" key={index}>
            <div className="form-header-info">
              <img className="form-imagen" alt={item.name} src={item.img}/>
              <p className="form-name">{item.name}</p>
            </div>
            <div>
              <button onClick={() => this.props.handleClickRemove(index)} className="form-button-delete">-</button>
            </div>
          </div>
          )
          }
        </div>
        <div className="form-footer">

          <div className="form-container-money">
            <p>Mes</p>
            <p>$ {(this.state.priceMoth).toFixed(3) }</p>
          </div>
          <div className="form-container-money">
            <p>Diario</p>
            <p>$  {(priceDay).toFixed(3) }</p>
          </div>
          <div className="form-container-money">
            <p>Cada Producto</p>
            <p>$  {(priceUnith).toFixed(3) }</p>
          </div>
          <div className="form-container-info-menbresia">
            <h3 className="title-menbresia">Membresía Mobiliaria</h3>
            <ul>
              <li>Renovación anual.</li>
              <li>Cuadro de posiciones por cada mueble.</li>
              <li>Asumimos daños causados al muebles.</li>
              <li>Envío gratis.</li>
              <li>Pósters con ganchos para vender sachet en cada habitación.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
