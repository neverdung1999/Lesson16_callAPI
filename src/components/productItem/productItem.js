import React, { Component } from "react";
import "./productItem.css";
import { Link } from "react-router-dom";
class productItem extends Component {
  render() {
    var { course, index } = this.props;
    var statusName = course.status ? "Còn hàng" : "Hết hàng";
    var statusClass = course.status ? "success" : "danger";

    return (
      <tr>
        <td>{index + 1}</td>
        {/* <td>{course._id}</td> */}
        <td>{course.name}</td>
        <td>{course.description}</td>
        <td>
          <img
            className="card-img-top img-set"
            src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
            alt={course.name}
          ></img>
        </td>
        <td>
          <iframe
            className="img-set"
            src={`https://www.youtube.com/embed/${course.videoId}`}
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </td>
        <td>{course.slug}</td>
        <td>{course.title}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link
            to={`products/edit/${course._id}`}
            type="button"
            className="btn btn-primary"
          >
            Sửa
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.deleteItem(course._id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }

  deleteItem = (id) => {
    // if (confirm("Bạn có chắc chắn muốn xóa ?")) {
    //   //eslint-disable-line
    //   var { deleteItem } = this.props;
    //   deleteItem(id);
    // }

    var { deleteItem } = this.props;
    deleteItem(id);
  };
}

export default productItem;
