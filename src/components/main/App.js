import React from 'react';
import FilteredProductTable from '../filteredProductTable/FilteredProductTable'
/**
 * @class App
 * main class responsible of render all another components
 * @extends {React.Component}
 * @author Martin Angeloni
 */
class App extends React.Component {

  render() {
    const productsStock = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ]
    return (
      <div className="App">
        <FilteredProductTable
          products={productsStock}
        />
      </div>
    );
  }
}

export default App;
