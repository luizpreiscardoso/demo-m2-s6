function handdleModal() {
  const buttonAdd = document.getElementById("addProduct");
  const modal = document.querySelector(".modal-bg");
  const buttonClose = document.querySelector(".close_modal");

  buttonAdd.addEventListener("click", () => {
    modal.classList.toggle("show_modal");
    addItem();
    //função de adicionar
  });
  buttonClose.addEventListener("click", () => {
    modal.classList.toggle("show_modal");
  });
}
handdleModal();
