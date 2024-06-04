import { _supabase } from "./clientSupabase_34.js";

let products_34 = [];

const productContainer = document.querySelector(".products-container");
const companyBtns = document.querySelectorAll(".company-btn");
const clearBtn = document.querySelector('.clear-btn')
const fetchBtn = document.querySelector('.fetch-btn')

console.log("products_34", products_34);

const getProductsSupabase_34 = async () => {
  try {
    let { data, error } = await _supabase
      .from("cart_products_34")
      .select("*, cart_name_34(*)");
    // console.log("products data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { title, price, localImg } = product;
      return `
    <div class="single-product">
    <img
      src=${localImg}
      class="single-product-img img"
      alt=${title}
    />
    <footer>
      <h3 class="name">${title}</h3>
      <span class="price">$${price}</span>
    </footer>
  </div>
    `;
    })
    .join("");
  productContainer.innerHTML = productsContent;
};

companyBtns.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const companyName = e.currentTarget.dataset.id;
    console.log("companyName", companyName);
    const products = await getProductsSupabase_34();
    if (companyName === "all") {
      products_34 = products;
    } else {
      products_34 = products.filter(
        (product) => product.cart_name_34.name === companyName
      );
    }
    console.log(`${companyName} products`, products_34);
    displayProducts(products_34);
  });
});

clearBtn.addEventListener('click', () => {
  products_34 = [];
  displayProducts(products_34)
})

fetchBtn.addEventListener('click', async () => {
  products_34 = await getProductsSupabase_34()
  displayProducts(products_34)
})

document.addEventListener("DOMContentLoaded", async () => {
  products_34 = await getProductsSupabase_34();
  displayProducts(products_34);
});
