import React, { Component } from "react";
import ProductItem from "../productItem/productItem";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";
class productList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount = () => {
    callApi("GET", "course", null).then((response) => {
      this.setState({
        courses: response.data.courses,
      });
    });
  };

  onDeleteItem = (id) => {
    var { courses } = this.state;
    callApi("DELETE", `course/${id}`, null).then((response) => {
      if (response.status === 200) {
        var index = this.findIndex(courses, id);
        // console.log(index);;
        if (index !== -1) {
          courses.splice(index, 1);
          this.setState({
            courses: courses,
          });
        }
      }
    });
  };

  findIndex = (courses, id) => {
    var results = -1;
    courses.forEach((course, index) => {
      if (course._id === id) {
        results = index;
      }
    });
    return results;
  };;

  render() {
    // var products = [];
    var { courses } = this.state;
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
  return { products: state.Products };
};

export default connect(mapStateToProps, null)(productList);
