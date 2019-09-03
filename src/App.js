import React from 'react';

import './App.css';
import Product from './product';
import Form from './form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products : [],
      coste: 0,
      costeF: 0,
    }
    this.addProduct = this.addProduct.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }


  addProduct(element){
    this.setState({
      products : [...this.state.products, element],
      coste: this.state.coste + element.price,
      costeF: this.state.costeF + element.priceF,
    });
  }

  handleClickRemove(element) {
    let select = this.state.products.filter((post, index) => {
                    return index !== element;
                });
    this.setState({
      products: select,
      coste: this.state.coste - this.state.products[element].price,
      costeF: this.state.costeF - this.state.products[element].priceF,
    });
  }

  render() {
  return (
      <div className="App">

        <Product addProduct={this.addProduct}/>
        <Form products={this.state.products} handleClickRemove={this.handleClickRemove} coste={this.state.coste} costeF={this.state.costeF}/>
      </div>
    );
  }
}

export default App;
