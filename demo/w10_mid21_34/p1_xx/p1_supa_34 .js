// import { products_xx, all_products_xx } from './p1_data_xx.js';

import { _supabase } from "./clientSupabase_34.js";

console.log('_supabase', _supabase);

let products_34 = [];

const getProductsSupabase_34 = async () =>{
 try{ 
  
let { data, error } = await _supabase.from('product_34')
.select('*')
console.log('product data', data);
 return data;
 } catch(error){
  console.log(error);
 }
}



const productContainer = document.querySelector('.products-container');

console.log('products_34', products_34);

const DisplayProducts = (products) => {};

document.addEventListener('DOMContentLoaded',async () => {
  products_34 = await getProductsSupabase_34();
  DisplayProducts(products_34);
});
