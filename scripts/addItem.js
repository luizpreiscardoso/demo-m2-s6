import { productAdd } from "./requests.js";
import { renderProducts } from "./adminDash.js";

export function addItem() {
  const url = document.getElementById("url-input");
  const title = document.getElementById("title-input");
  const price = document.getElementById("price-input");
  const finishButton = document.getElementById("finish-button");
  const modal = document.querySelector(".modal-bg");

  finishButton.addEventListener(
    "click",
    async (e) => {
      e.preventDefault();
      const data = {
        pdt_image: url.value,
        pdt_name: title.value,
        pdt_price: Number(price.value),
      };

      modal.classList.toggle("show_modal");

      //=====================================//
      // CÓDIGO DO CREATE ITEM AQUI //

      await productAdd(data);
      renderProducts();

      //========================================//
    },
    { once: true }
  );
}
