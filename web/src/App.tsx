import "./styles/global.css";
import { useState } from "react"
import { Header } from "./components/Header"
import { Product } from "./components/Product"
import { IProduct } from "./interfaces/product";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <div className="w-full">
      <Header setProducts={setProducts} />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl my-10 flex justify-center flex-wrap gap-5">
          {products.map((product) => (
            <Product key={product.id} info={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
