import { useState } from "react";

import Product from "../Product";
import Total from "../Total"

export default function Register() {
  const products = [
    { name: "Bolo de aniversário", icon: "🎂", price: 20.9 },
    { name: "Balão", icon: "🎈", price: 5.6 },
    { name: "Confete", icon: "🎉", price: 2.9 },
    { name: "Suco de caixinha", icon: "🧃", price: 1.9 },
    { name: "Doces diversos", icon: "🍬", price: 12.3 }
  ];
  const [num, setNum] = useState(0)

  return (

    <>
      <Total num={num} />

      <div>

        {products.map((product) => {
          const { name, icon, price } = product;
          return (
            <Product
              name={name}
              icon={icon}
              price={price}
              num={num}
              setNum={setNum}

            />
          )
        })}
      </div>
    </>
  )
}  