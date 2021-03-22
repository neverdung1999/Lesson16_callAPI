import { combineReducers } from "redux";
import Products from "./products";
import ItemEditing from "./itemEditing";

const appReducers = combineReducers({
  Products,
  ItemEditing,
});

export default appReducers;
