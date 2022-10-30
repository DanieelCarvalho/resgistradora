import { useState } from "react";
import "./Product.css"



export default function Product({ name, icon, price, num, setNum }) {

  const adjustedPrice = price.toFixed(2).toString().replace(".", ",");
  const [selected, setSelected] = useState(false);  
  
  function handleSelect() {

    const Selected = !selected;
    if (Selected) setNum( num +price)
     
     else  setNum(num - price)
     setSelected(Selected)
    
   
  }
  
  function checkSelected() {
    let classes = "product";
    if (selected) {
      classes = "product selected";
    }
    return classes;
  }

  return (
    <div  className={checkSelected()} onClick={handleSelect}>
      {icon} {name} - R$ {adjustedPrice}
    </div>
  );
}
