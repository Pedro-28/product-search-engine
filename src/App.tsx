import { useState } from "react"
import { Header } from "./components/Header"
import { Product } from "./components/Product"
import { IProduct } from "./interfaces/product";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <div>
      <Header setProducts={setProducts} />
      <div>
        {products.map((product) => (
          <Product info={product} />
        ))}
      </div>
    </div>
  )
}

export default App
