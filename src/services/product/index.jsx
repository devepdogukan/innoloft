import { PRODUCT_ID } from "~/constants/product";
import instance from "~/request";

class ProductService {
  async update(data) {
    const response = await instance.put(`/product/${PRODUCT_ID}/`, data);
    return response;
  }

  async trl() {
    const response = await instance.get(`/trl/`);
    return response;
  }
}

export default new ProductService();
