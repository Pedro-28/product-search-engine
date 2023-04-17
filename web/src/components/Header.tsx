import { useState } from "react";
import { IProduct } from "../interfaces/product";
import {
  getProductsfromMercadoLivre,
  getProductsfromBuscape,
  getProductsByMercadoLivreCategory,
  getProductsByBuscapeCategory,
} from "../services/api";
import { Select } from "./Select";

const webList = ["Todas", "Mercado Livre", "Buscape"];
const categories = ["Celular", "Geladeira", "TV"];

interface HeaderProps {
  setProducts: (products: IProduct[]) => void;
}

export function Header({ setProducts }: HeaderProps) {
  const [search, setSearch] = useState("");
  const [web, setWeb] = useState("Mercado Livre");

  const handleSearch = async () => {
    let products: IProduct[] = [];

    if (web === "Mercado Livre" || web === "Todas") {
      const { data } = await getProductsfromMercadoLivre(search);
      products = [...data.products];
    }

    if (web === "Buscape" || web === "Todas") {
      const { data } = await getProductsfromBuscape(search);
      products = [...products, ...data.products];
    }

    setProducts(products);
  };

  const handleCategorySearch = async (category: string) => {
    let products: IProduct[] = [];

    if (web === "Mercado Livre" || web === "Todas") {
      const { data } = await getProductsByMercadoLivreCategory(category);
      products = [...data.products];
    }

    if (web === "Buscape" || web === "Todas") {
      const { data } = await getProductsByBuscapeCategory(category);
      products = [...products, ...data.products];
    }

    setProducts(products);
  };

  return (
    <header className="bg-[#0000009c] w-full h-16 flex justify-center">
      <div className="w-full h-full max-w-5xl flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Web scraper</h1>
        <div className="flex gap-10">
          <div>
            <Select classes="rounded-l-sm w-28 h-8" selectTitle="Web" handleChange={setWeb} listOptions={webList} />
            <Select classes="rounded-r-sm w-28 h-8" selectTitle="Categorias" handleChange={handleCategorySearch} listOptions={categories} />
          </div>
          <div>
            <input className="w-72 h-8 rounded-l-sm" type="text" value={search} onChange={({ target }) => setSearch(target.value)} />
            <button className="bg-white border-l h-8 px-2 rounded-r-sm" type="button" onClick={handleSearch}>Buscar</button>
          </div>
        </div>
      </div>
    </header>
  );
}
