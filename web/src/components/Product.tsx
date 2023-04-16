import { IProduct } from "../interfaces/product";

interface ProductProps {
  info: IProduct;
}

export function Product({ info }: ProductProps) {
  const {
    description,
    category,
    price,
    imageLink,
    website,
    websiteLink,
  } = info;

  return (
    <div className="bg-white w-72 rounded-md overflow-hidden shadow-lg hover:scale-[1.005] hover:shadow-2xl">
      <img className="bg-white w-full h-72 object-contain border-b border-gray-300" src={imageLink} alt={description} decoding="async" />
      <div className="w-full p-4 flex flex-col gap-3">
        <h2 className="">{description}</h2>
        <p className="text-xl font-semibold">R$ {price}</p>
        <p>{category}</p>
        <button className="bg-[#0000003b] w-full h-10 rounded hover:bg-[#00000062]">
          <a className="font-semibold" href={websiteLink} target={"_blank"}>Ir para site</a>
        </button>
      </div>
    </div>
  );
}
