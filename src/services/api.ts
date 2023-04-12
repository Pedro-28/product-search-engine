// `https://api.mercadolibre.com/sites/MLB/search?q=${query}` mercadolivre busca
// "https://api.mercadolibre.com/sites/MLA/categories" mercadolivre categorias
// `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`
// { "id" : "MLA1051" , "name" : "Celulares e Telefones" }
// { "id" : "MLA5726" , "name" : "Eletrodomésticos e ar condicionado." }
// { "id" : "MLA1000" , "name" : "Eletrônicos, Áudio e Vídeo" }
 

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
