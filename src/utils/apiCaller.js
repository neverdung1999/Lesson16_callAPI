import axios from "axios";
import * as Config from "./../redux/constant/config";

export default function apiCaller(method = "GET", url, data) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${url}`,
    data: data,
  }).catch((err) => {
    console.log(err);
  });
}
