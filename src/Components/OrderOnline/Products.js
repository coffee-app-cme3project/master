import Latte from "../../public/CoffeeApp_Latte.png"
import Espresso from '../../public/CoffeeApp_Espresso.png'
import IceCoffee from '../../public/CoffeeApp_Espresso.png'




const products= [
    {
      id: 1,
      name: "Latte",
      image: {Latte},
      category:"coffee",
      featured: true
       
    },
    {
        id: 2,
        name: "Espresso",
        image: {Espresso},
        category:"coffee",
        featured: true
         
      },
      {
        id: 3,
        name: "Ice Coffee",
        image: {IceCoffee},
        category:"coffee",
        featured: true
         
      },
  ];
  
  export default products;
  