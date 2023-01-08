import * as actionTypes from './shopping.types'


const INITIAL_STATE = {
    products: [
          //Data for Coffee
        {
            id: 1,
            name: "Latte",
            image:require( '../../public/CoffeeApp_Latte.png'),
            price: 5.00,
            Sugar:"Sugar+",
            Milk:"Milk+",
            Design:"Design",
            Snacks:"Snacks",
            small:"Small",
            Medium:"Medium",
            Large:"Large",
           
            
             
          },
          {
            id: 2,
            name: "Ice Coffee",
            image:require( '../../public/CoffeeApp_IceCoffee.png'),
            price: 5.00,
            Sugar:"Sugar+",
            Milk:"Milk+",
            Design:"Design",
            Snacks:"Snacks",
            small:"Small",
            Medium:"Medium",
            Large:"Large",
          
          },
            {
              id: 3,
              name: "Espresso",
              image:require( '../../public/CoffeeApp_Espresso.png'),
              price:5.00,
              Sugar:"Sugar+",
              Milk:"Milk+",
              Design:"Design",
              Snacks:"Snacks",
              small:"Small",
              Medium:"Medium",
              Large:"Large",
           
            },
            {
              id: 4,
              name: "Cream Coffee Latte",
              image:require( '../../public/tetiana-shyshkina-4Lqjr8gu_bg-unsplash.jpg'),
              price: "5.00",
              Sugar:"Sugar+",
              Milk:"Milk+",
              Design:"Design",
              Snacks:"Snacks",
              small:"Small",
              Medium:"Medium",
              Large:"Large",
            
            },
              {
                id: 5,
                name: "Cappuccino",
                image:require( '../../public/billy-kwok-vfiA7rRtjWo-unsplash.jpg'),
                price: "5.00",
                Sugar:"Sugar+",
                Milk:"Milk+",
                Design:"Design",
                Snacks:"Snacks",
                small:"Small",
                Medium:"Medium",
                Large:"Large",
             },
              {
                id: 6,
                name: "Matcha Latter",
                image:require( '../../public/1673037252430.jpg'),
                price: "5.00",
                Sugar:"Sugar+",
                Milk:"Milk+",
                Design:"Design",
                Snacks:"Snacks",
                small:"Small",
                Medium:"Medium",
                Large:"Large",
              
              },
                {
                  id: 7,
                  name: "Light Ice Coffee ",
                  image:require( '../../public/nathan-dumlao-vZOZJH_xkUk-unsplash.jpg'),
                  price: "5.00",
                  Sugar:"Sugar+",
                  Milk:"Milk+",
                  Design:"Design",
                  Snacks:"Snacks",
                  small:"Small",
                  Medium:"Medium",
                  Large:"Large",
                
                },
                {
                  id: 8,
                  name: "Chocolate Cookie Frappe",
                  image:require( '../../public/victor-rutka-4FujjkcI40g-unsplash.jpg'),
                  price: "5.00",
                  Sugar:"Sugar+",
                  Milk:"Milk+",
                  Design:"Design",
                  Snacks:"Snacks",
                  small:"Small",
                  Medium:"Medium",
                  Large:"Large",
                
                },
    ],
    
    //Data for Snacks
    snacks: [
      {
      id: 1,
      name: "Latte",
      image:require( '../../public/snack_Banachips.jpg'),
      price: 5.00,
      },
    {
      id: 2,
      name: "Ice Coffee",
      image:require( '../../public/snacks_Donuts.jpg'),
      price: 5.00,
    
    },
      {
        id: 3,
        name: "Espresso",
        image:require( '../../public/snack_Chips.jpg'),
        price:5.00,
      
      
      },
      {
        id: 4,
        name: "Latte",
        image:require( '../../public/snacks_ChocolateDonuts.jpg'),
        price: "5.00",
      
      
      },
        {
          id: 5,
          name: "Latte",
          image:require( '../../public/snacks_Orange.jpg'),
          price: "5.00",
        
        },
        {
          id: 6,
          name: "Latte",
          image:require( '../../public/snacks_pancakes.jpg'),
          price: "5.00",
        
        
        },
          {
            id: 7,
            name: "Latte",
            image:require( '../../public/snacks_Sandwiches.jpg'),
            price: "5.00",
          
          
          },
          {
            id: 8,
            name: "Latte",
            image:require( '../../public/snacks_strawberryMuesli.jpg'),
            price: "5.00",
  
  
          },
],
    cart: [],
    currentItem: [],
}

  //Reducers for Coffee
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.ADD_TO_CART:
            
                //Get the items data from the products array
                const item = state.products.find((prod)=> prod.id === action.payload.id);
                //check if item is in cart already
                const inCart = state.cart.find ((item) =>
                 item.id ===action.payload.id ? true: false
                );
                return {
                    ...state,
                    cart: inCart 
                    ? state.cart.map((item)=> 
                        item.id === action.payload.id 
                            ? {...item, qty: item.qty + 1} 
                            :item
                        ) 
                    : [...state.cart, {...item, qty:1}], 
                    
                };
            
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.products.filter((item) => 
                item.id == action.payload.id),
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.products.map((item) =>
                 item.id !==action.payload.id 
                    ? {...item, qty: +action.payload.qty}
                    : item   
               ), 
            }



            
          //Reducers for Coffee
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        
            case actionTypes.ADD_TO_CARTSNACKS:
          
            //Get the items data from the products array
            const item1 = state.snacks.find((prod)=> prod.id === action.payload.id);
            //check if item is in cart already
            const inCart1 = state.cart.find ((item1) =>
             item.id ===action.payload.id ? true: false
            );
            return {
                ...state,
                cart: inCart 
                ? state.cart.map((item)=> 
                    item.id === action.payload.id 
                        ? {...item, qty: item.qty + 1} 
                        :item
                    ) 
                : [...state.cart, {...item, qty:1}], 
                
            };
        
    case actionTypes.REMOVE_FROM_CARTSNACKS:
        return {
            ...state,
            cart: state.snacks.filter((item) => 
            item.id == action.payload.id),
        };
    case actionTypes.ADJUST_QTYSNACKS:
        return {
            ...state,
            cart: state.snacks.map((item) =>
             item.id !==action.payload.id 
                ? {...item, qty: +action.payload.qty}
                : item   
            ), 
        }
    case actionTypes.LOAD_CURRENT_ITEMSNACKS:
        return {
            ...state,
            currentItem: action.payload,
        }
        default:
            return state;
    }


}

export default shopReducer; 