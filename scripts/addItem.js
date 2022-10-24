function addItem() {
  const url = document.getElementById("url-input");
  const title = document.getElementById("title-input");
  const price = document.getElementById("price-input");
  const finishButton = document.getElementById("finish-button");
  const modal = document.querySelector(".modal-bg");
  url.value = "";
  title.value = "";
  price.value = "";

  finishButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      const data = {
        url: url.value,
        title: title.value,
        price: price.value,
      };
      console.log(data);
      modal.classList.toggle("show_modal");

      //=====================================//
      // CÓDIGO DO CREATE ITEM AQUI //

      //========================================//
    },
    { once: true }
  );
}
