import React, { Component } from "react";
import ProductList from "../../components/productList/productList";

class productListPage extends Component {
  render() {
    var { history } = this.props;
    return (
      <div>
        <ProductList history={history} />
      </div>
    );
  }
}

export default productListPage;
