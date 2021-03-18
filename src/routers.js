import React from "react";
import HomePage from "./page/homePage/homePage";
import NotFound from "./page/notFound/notFound";
import ProductPage from "./page/productListPage/productListPage";
import ProductAdd from "./page/productActionPage/productAddAction";

const Routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/products",
    exact: true,
    main: () => <ProductPage />,
  },
  {
    path: "/products/add",
    exact: false,
    main: () => <ProductAdd />,
  },
  {
    path: "/products/edit/:id",
    exact: false,
    main: ({ match }) => <ProductAdd match={match} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default Routes;
