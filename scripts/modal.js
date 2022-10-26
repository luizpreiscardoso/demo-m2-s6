import { addItem } from "./addItem.js";
function handdleModal() {
  const buttonAdd = document.getElementById("addProduct");
  const modal = document.querySelector(".modal-bg");
  const buttonClose = document.querySelector(".close_modal");
  const url = document.getElementById("url-input");
  const title = document.getElementById("title-input");
  const price = document.getElementById("price-input");

  buttonAdd.addEventListener("click", async () => {
    modal.classList.toggle("show_modal");
    url.value = "";
    title.value = "";
    price.value = "";
    await addItem();
    //função de adicionar
  });
  buttonClose.addEventListener("click", () => {
    modal.classList.toggle("show_modal");
  });
}
handdleModal();
