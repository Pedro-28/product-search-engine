import { IProduct } from "../interfaces/product";

interface ProductProps {
  info: IProduct;
}

export function Product({ info }: ProductProps) {
  const { img, name, category, description, price, url } = info;
  return (
    <div>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{category}</p>
      <p>{description}</p>
      <p>{price}</p>
      <a href={url}>Ir para site</a>
    </div>
  );
}
