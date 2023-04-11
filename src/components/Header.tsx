import { Select } from "./Select";

const web = ["Todas", "MercadoLivre", "Buscapé"];
const categories = ["Geladeira", "TV", "Celular"];

export function Header() {
  return (
    <header>
      <Select handleChange={() => { }} listOptions={web} />
      <Select handleChange={() => { }} listOptions={categories} />
      <input type="text" />
      <button>Buscar</button>
    </header>
  );
}
