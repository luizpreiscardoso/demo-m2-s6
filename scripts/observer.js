import { listAtualization } from "./adminDash.js";
import { productRequest } from "./requests.js";
import { renderProducts } from "./adminDash.js";

export const observer = new IntersectionObserver(async (entries) => {
  if (entries.some((entry) => entry.isIntersecting)) {
    console.log("Apareci");
    const result = await productRequest();
    const products =
      JSON.parse(localStorage.getItem("@lojaKenzie:products")) || [];

    localStorage.setItem(
      "@lojaKenzie:products",
      JSON.stringify([...products, ...result])
    );
    await renderProducts();
  }
});
