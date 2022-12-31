import fetch from"node-fetch";
const API = 'https://api.escuelajs.co/api/v1';


 
async function getData(urlAPI) {
    const response = await fetch(urlAPI)
    const data =  await response.json()
    return data;
}



async function* iterateGet(){
   const products = await getData(`${API}/products`);
   const product = await getData(`${API}/products/${products[0]?.id}`);
   const category = await getData(`${API}/categories/${product?.category?.id}`);

   yield console.log(products);
   yield console.log(product.title);
   yield console.log(category.name);

}

const g = iterateGet()

g.next().value;
g.next().value;
g.next().value;