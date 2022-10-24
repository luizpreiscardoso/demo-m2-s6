function editItem(product) {
  const url = document.getElementById("url-input");
  const title = document.getElementById("title-input");
  const price = document.getElementById("price-input");
  const finishButton = document.getElementById("finish-button");
  const modal = document.querySelector(".modal-bg");
  url.value = product.img;
  title.value = product.title;
  price.value = product.price;

  finishButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      const data = {
        id: product.id,
        url: url.value,
        title: title.value,
        price: price.value,
      };
      console.log(data);

      //=====================================//
      // CÓDIGO DO EDIT ITEM AQUI //

      //========================================//

      modal.classList.toggle("show_modal");
    },
    { once: true }
  );
}
