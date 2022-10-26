import { productUpdate } from "./requests.js";
import { renderProducts } from "./adminDash.js";

export function editProduct(product) {
  const url = document.getElementById("url-input");
  const title = document.getElementById("title-input");
  const price = document.getElementById("price-input");
  const finishButton = document.getElementById("finish-button");
  const modal = document.querySelector(".modal-bg");
  url.value = product.pdt_image;
  title.value = product.pdt_name;
  price.value = product.pdt_price;

  finishButton.addEventListener(
    "click",
    async (e) => {
      e.preventDefault();
      const data = {
        pdt_image: url.value,
        pdt_name: title.value,
        pdt_price: Number(price.value),
      };

      //=====================================//
      // CÓDIGO DO EDIT ITEM AQUI //

      const res = await productUpdate(product.pdt_id, data);

      //========================================//

      modal.classList.toggle("show_modal");
      renderProducts();
    },
    { once: true }
  );
}
