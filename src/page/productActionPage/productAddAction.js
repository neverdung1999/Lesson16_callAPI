import React, { Component } from "react";

class productAddAction extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <legend>Form title</legend>

            <div className="form-group">
              <label>Tên sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Input field"
              />
            </div>

            <div className="form-group">
              <label>Giá sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Input field"
              />
            </div>

            <label>Trạng thái</label>
            <div className="checkbox">
              <label>
                <input type="checkbox" name="remember" /> Tình trạng
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Đồng ý
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default productAddAction;
