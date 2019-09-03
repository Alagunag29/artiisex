import React, { Component } from 'react';
import './product.css';
import Data from './data';

class Product extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.addProduct(Data[index]);
  }

  render() {
    return(
      <div className="Product">
        {
          Data.map((data, index) =>
            <div className="Container-product" key={index}>
              <figure>
                <img className="product-image" alt={data.name} src={data.img}/>
              </figure>
              <div className="info">
                <h2 className="name-product">{data.name}</h2>
                <button  onClick={() => this.handleClick(index)} className="button-add-product">+</button>
              </div>
            </div>
          )
        }

        <div className="Container-product">
          <figure>
            <img className="product-image" alt='gratis' src='img/gratis.png'/>
          </figure>
          <div className="info">
            <h2 className="name-product">Sachet Por Consignación</h2>
            <button  className="button-add-product button-gratis">gratis</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
