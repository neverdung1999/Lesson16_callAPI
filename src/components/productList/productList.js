import React, { Component } from "react";
import ProductItem from "../productItem/productItem";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";
import * as Action from "../../redux/action/index";
class productList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchAllProducts();
  };

  onDeleteItem = (id) => {
    this.props.deleteOneProducts(id);
  };

  render() {
    // var products = [];
    var { courses } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to="/products/add" className="btn btn-primary mb-10">
              Thêm sản phẩm
            </Link>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Danh sách sản phẩm</h3>
              </div>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      {/* <th>Mã khóa học</th> */}
                      <th>Tên khóa học</th>
                      <th>Mô tả khóa học</th>
                      <th>Hình ảnh</th>
                      <th>Video Id</th>
                      <th>slug</th>
                      <th>title</th>
                      <th>Tình trạng</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>{this.showProducts(courses)}</tbody>
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
      results = products.map((course, index) => {
        return (
          <ProductItem
            key={index}
            course={course}
            index={index}
            deleteItem={this.onDeleteItem}
          />
        );
      });
    }
    return results;
  };
}

const mapStateToProps = (state) => {
  return { courses: state.Products };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(Action.actFetchProductRequest());
    },
    deleteOneProducts: (id) => {
      dispatch(Action.actDeleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(productList);
