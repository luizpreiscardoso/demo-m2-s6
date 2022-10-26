import { editProduct } from "./editItem.js";
import { productRemove } from "./requests.js";
import { observer } from "./observer.js";
import { productRequest } from "./requests.js";

localStorage.setItem(
  "@lojaKenzie:token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY3MzU3MDUsImV4cCI6MTY5ODI3MTcwNSwic3ViIjoiNDk3ZmZiZTctNWZlZC00ZmE3LTk2MzAtMWNkYTI4N2Q2ZmRmIn0.0FNsMDVNASucqaNL5v_d0BbWsphm4IpQOf7ddpodE_U"
);

export async function listAtualization() {
  const result = await productRequest();
  const products =
    JSON.parse(localStorage.getItem("@lojaKenzie:products")) || [];

  localStorage.setItem("@lojaKenzie:products", JSON.stringify([...result]));
  await renderProducts();
}
await listAtualization();

export async function renderProducts() {
  const result = localStorage.getItem("@lojaKenzie:products");

  const products = JSON.parse(result);
  console.log(products);

  const productsDisplay = document.querySelector(".products_list");
  productsDisplay.innerHTML = "";

  products.forEach((element) => {
    createCard(element);
  });

  const divObs = document.createElement("div");
  divObs.id = "observer";
  productsDisplay.appendChild(divObs);
  observer.observe(divObs);
}

function createCard(product) {
  const productsDisplay = document.querySelector(".products_list");

  const li = document.createElement("li");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = product.pdt_image;
  imgContainer.classList.add("product_img_div");
  imgContainer.appendChild(img);

  const productDetais = document.createElement("div");
  productDetais.classList.add("product_detais");
  productDetais.innerHTML = `
  <div>
      <h2>${product.pdt_name}</h2>

      <p>R$${product.pdt_price}</p>
    </div>
  `;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("product_buttons");
  const editButton = document.createElement("button");
  editButton.classList.add("button_edit");
  editButton.innerText = "Editar";
  const removeButton = document.createElement("button");
  removeButton.classList.add("button_remove");
  removeButton.innerText = "Remover";

  editButton.addEventListener("click", async () => {
    const modal = document.querySelector(".modal-bg");
    modal.classList.toggle("show_modal");
    await editProduct(product);
  });

  removeButton.addEventListener("click", async () => {
    await productRemove(product.pdt_id);

    renderProducts();
  });

  buttonsContainer.append(editButton, removeButton);

  productDetais.appendChild(buttonsContainer);

  li.append(imgContainer, productDetais);

  li.classList.add("product");

  //productsDisplay.insertAdjacentHTML("afterbegin", li);

  productsDisplay.appendChild(li);
}
