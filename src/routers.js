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
    main: ({ history }) => <ProductPage history={history} />,
  },
  {
    path: "/products/add",
    exact: false,
    main: ({ history }) => <ProductAdd history={history} />,
  },
  {
    path: "/products/edit/:id",
    exact: false,
    main: ({ match, history }) => (
      <ProductAdd match={match} history={history} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default Routes;
