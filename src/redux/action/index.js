import * as Types from "../constant/actionType";
import callApi from "../../utils/apiCaller";

// Show all item
export const actFetchProductRequest = () => {
  return (dispatch) => {
    callApi("GET", "course", null).then((response) =>
      dispatch(actFetchProduct(response.data.courses))
    );
  };
};

export const actFetchProduct = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};

//delete item
export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    callApi("DELETE", `course/${id}`, null).then((response) => {
      dispatch(actDeleteProduct(id));
    });
  };
};

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id,
  };
};

//add item
export const actAddProductRequest = (product) => {
  return (dispatch) => {
    callApi("POST", "course/store", product).then((response) => {
      // console.log(response);
      dispatch(actAddProduct(response.data.courses));
    });
  };
};

export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product,
  };
};

//update item with
export const actGetOneProduct = (id) => {
  return (dispatch) => {
    callApi("GET", `course/${id}/edit`, null).then((response) => {
      dispatch(actGetProduct(response.data.courses));
    });
  };
};

export const actGetProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    product,
  };
};

//
export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    console.log(product);
    callApi("PUT", `course/${product.id}/update`, product).then((response) => {
      console.log(product);
      dispatch(actUpdateProduct(product));
    });
  };
};

export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product,
  };
};
