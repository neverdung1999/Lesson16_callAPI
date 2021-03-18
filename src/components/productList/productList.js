import React, { Component } from "react";
import ProductItem from "../productItem/productItem";
import { connect } from "react-redux";

class productList extends Component {
  render() {
    var { products } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-primary mb-10">
              Thêm sản phẩm
            </button>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Danh sách sản phẩm</h3>
              </div>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Giá sản phẩm</th>
                      <th>Trạng thái</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>{this.showProducts(products)}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showProducts = (products) => {
    var results = null;
    if (products.length > 0) {
      results = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
      });
    }
    return results;
  };
}

const mapStateToProps = (state) => {
  return { products: state.Products };
};

export default connect(mapStateToProps, null)(productList);
