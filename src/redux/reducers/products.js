import * as Types from "../constant/actionType";
const initialState = [];

var findIndex = (courses, id) => {
  var results = -1;
  courses.forEach((course, index) => {
    if (course._id === id) {
      results = index;
    }
  });
  return results;
};

const products = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      var state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      index = findIndex(state, action.id);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PRODUCT:
      state.push(action.product);
      return [...state];
    case Types.UPDATE_PRODUCT:
      console.log(action);
      index = findIndex(state, action.product.id);
      state[index] = action.product;
      return [...state];
    default:
      return [...state];
  }
};

export default products;
