function renderProducts(list) {
  list.forEach((element) => {
    createCard(element);
  });
}

renderProducts(products);

function createCard(product) {
  const productsDisplay = document.querySelector(".products_list");

  const li = document.createElement("li");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = product.img;
  imgContainer.classList.add("product_img_div");
  imgContainer.appendChild(img);

  const productDetais = document.createElement("div");
  productDetais.classList.add("product_detais");
  productDetais.innerHTML = `
    <div>
        <h2>${product.title}</h2>
  
        <p>R$${product.price}</p>
      </div>
    `;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("product_buttons");
  const addButton = document.createElement("button");
  addButton.classList.add("button_add");
  addButton.innerText = "Comprar";

  addButton.addEventListener("click", () => {});

  buttonsContainer.append(addButton);

  productDetais.appendChild(buttonsContainer);

  li.append(imgContainer, productDetais);

  li.classList.add("product");

  productsDisplay.appendChild(li);
}
