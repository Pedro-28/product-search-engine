import { useState } from "react";
import { IProduct } from "../interfaces/product";
import { getByCategory, searchProduct } from "../services/api";
import { productMapper } from "../utils/productMapper";
import { Select } from "./Select";

const webList = [
  { id: "Todas", name: "Todas" },
  { id: "MercadoLivre", name: "Mercado Livre" },
  { id: "Buscape", name: "Buscapé" },
];
const categories = [
  { id: "MLB1055", name: "Celular" },
  { id: "MLB181294", name: "Geladeira" },
  { id: "MLB1002", name: "TV" },
];

interface HeaderProps {
  setProducts: (products: IProduct[]) => void;
}

export function Header({ setProducts }: HeaderProps) {
  const [search, setSearch] = useState("");
  const [web, setWeb] = useState("");
  // const [category, setCategory] = useState("");

  const handleSearch = async () => {
    const productsData = await searchProduct(search);
    const products: IProduct[] = productsData.results.map(productMapper);
    setProducts(products);
  };

  const handleCategorySearch = async (id: string) => {
    const categoryData = await getByCategory(id);
    
    const products: IProduct[] = categoryData.results.map(productMapper);
    setProducts(products);
  };

  return (
    <header>
      <Select selectTitle="Web" handleChange={setWeb} listOptions={webList} />
      <Select selectTitle="Categorias" handleChange={handleCategorySearch} listOptions={categories} />
      <input type="text" value={search} onChange={({ target }) => setSearch(target.value)} />
      <button type="button" onClick={handleSearch}>Buscar</button>
    </header>
  );
}
