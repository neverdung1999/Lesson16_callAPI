import React, { Component } from "react";
import { Link, Route, NavLink } from "react-router-dom";

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Sản phẩm",
    to: "/products",
    exact: false,
  },
];

const MenuLink = ({ label, to, exact }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

class menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink activeClassName="navbar-brand" to="/">
                Call API
              </NavLink>
            </div>
            <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
          </div>
        </nav>
      </div>
    );
  }

  showMenus = (menus) => {
    var results = null;

    if (menus.length > 0) {
      results = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            exact={menu.exact}
            to={menu.to}
          />
        );
      });
    }

    return results;
  };
}

export default menu;
