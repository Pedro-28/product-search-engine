import { useState } from "react";
import { IProduct } from "../interfaces/product";
import { searchProduct } from "../services/api";
import { productMapper } from "../utils/productMapper";
import { Select } from "./Select";

const webList = ["Todas", "MercadoLivre", "Buscapé"];
const categories = ["Geladeira", "TV", "Celular"];

interface HeaderProps {
  setProducts: (products: IProduct[]) => void;
}

export function Header({ setProducts }: HeaderProps) {
  const [search, setSearch] = useState("");
  const [web, setWeb] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = async () => {
    const productsData = await searchProduct(search);
    const products: IProduct[] = productsData.results.map(productMapper);
    setProducts(products);
  };

  return (
    <header>
      <Select handleChange={setWeb} listOptions={webList} />
      <Select handleChange={setCategory} listOptions={categories} />
      <input type="text" value={search} onChange={({ target }) => setSearch(target.value)} />
      <button type="button" onClick={handleSearch}>Buscar</button>
    </header>
  );
}
