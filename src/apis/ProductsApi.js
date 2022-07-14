import axiosClient from "./AxiosClient";

const productApi = {
  getAll() {
    const url = '/products';
    return axiosClient.get(url);
  },
  getProductByFilter(param) {
    const url = `/products/${param}`;
    return axiosClient.get();
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/products/${data.id}`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.remove(url);
  },

};

export default productApi;