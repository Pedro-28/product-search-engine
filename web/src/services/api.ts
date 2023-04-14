// `https://api.mercadolibre.com/sites/MLB/search?q=${query}` mercadolivre busca
// "https://api.mercadolibre.com/sites/MLB/categories" mercadolivre categorias
// `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`
// { "id" : "MLB1055" , "name" : "Celulares e Telefones" }
// { "id" : "MLB181294" , "name" : "Eletrodomésticos e ar condicionado." }
// { "id" : "MLB1002" , "name" : "Eletrônicos, Áudio e Vídeo" }
 

export async function searchProduct(query: string) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const products = await data.json();
  return products;
}

export async function getByCategory(categoryId: string) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const products = await data.json();
  return products;
}
