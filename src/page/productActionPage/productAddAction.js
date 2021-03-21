import React, { Component } from "react";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";
import "./productAddAction.css";

class productAddAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtDes: "",
      txtVideo: "",
      txtSlug: "",
      txtTitle: "",
      chkbStatus: true,
    };
  }

  componentDidMount = () => {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      callApi("GET", `course/${id}/edit`, null).then((response) => {
        var data = response.data.courses;
        this.setState({
          id: data._id,
          txtName: data.name,
          txtDes: data.description,
          txtVideo: data.videoId,
          txtSlug: data.slug,
          txtTitle: data.title,
          chkbStatus: data.status,
        });
      });
    }
  };

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    var { history } = this.props;
    var {
      id,
      txtName,
      txtDes,
      txtVideo,
      txtSlug,
      txtTitle,
      chkbStatus,
    } = this.state;
    if (id) {
      //update data
      callApi("PUT", `course/${id}/update`, {
        name: txtName,
        description: txtDes,
        videoId: txtVideo,
        slug: txtSlug,
        title: txtTitle,
        status: chkbStatus,
      }).then((res) => history.push("/products"));
    } else {
      // add data
      callApi("POST", "course/store", {
        name: txtName,
        description: txtDes,
        videoId: txtVideo,
        slug: txtSlug,
        title: txtTitle,
        status: chkbStatus,
      }).then((response) => history.push("/products")); // có thể sử dụng push(" truyền params ") hoặc goBack để quay lại trang trước đó
    }
  };

  render() {
    var {
      txtName,
      txtDes,
      txtVideo,
      txtSlug,
      txtTitle,
      chkbStatus,
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <legend>Thêm sản phẩm</legend>

            <div className="form-group">
              <label>Tên khóa học</label>
              <input
                type="text"
                className="form-control"
                id=""
                name="txtName"
                value={txtName}
                onChange={this.onChange}
                placeholder="Input field"
                required
              />
            </div>

            <div className="form-group">
              <label>Mô tả</label>
              <input
                type="text"
                className="form-control"
                id=""
                name="txtDes"
                value={txtDes}
                onChange={this.onChange}
                placeholder="Input field"
                required
              />
            </div>

            <div className="form-group">
              <label>Video ID</label>
              <input
                type="text"
                className="form-control"
                id=""
                name="txtVideo"
                value={txtVideo}
                onChange={this.onChange}
                placeholder="Input field"
                required
              />
            </div>

            <div className="form-group">
              <label>Slug</label>
              <input
                type="text"
                className="form-control"
                id=""
                name="txtSlug"
                value={txtSlug}
                onChange={this.onChange}
                placeholder="Input field"
                required
              />
            </div>

            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                id=""
                name="txtTitle"
                value={txtTitle}
                onChange={this.onChange}
                placeholder="Input field"
                required
              />
            </div>

            <label>Trạng thái</label>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  name="chkbStatus"
                  value={chkbStatus}
                  onChange={this.onChange}
                  checked={chkbStatus}
                />{" "}
                Tình trạng
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Đồng ý
            </button>
            <Link
              type="button"
              to="/products"
              className="btn btn-default ml-10"
            >
              Quay lại
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default productAddAction;
