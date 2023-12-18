import { useEffect, useState } from "react";

function Useeffect() {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log("Quantity changed. Fetching new Inventory from DB.");
    fetchNewInventory();
    
   
    return () => { console.log("flushed previous operation. ")}

  }, [quantity]);

  function fetchNewInventory(){
    console.log("Fetching from DB....");
  }

  function handleIncrease() {
    setQuantity(quantity + 1);
  }
  return (
    <div>
    
      <button  style ={{width:"190px" , height:"50px" , marginTop:"100px"}} 
           onClick={handleIncrease}>Use Effect Button</button>
    </div>
  );
}

export default Useeffect;