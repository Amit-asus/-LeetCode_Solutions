import { Children, createContext, useContext, useEffect, useReducer} from "react";
import { ShoppingCartReducer } from "./reducers";

const ShoppingCart = createContext();

const Context = ({children})=> {
    const [state, dispatch] = useReducer(ShoppingCartReducer , {
      products  : [] ,
    });

    const fetchProducts = async () => {
      const res = await fetch("/products.json") ;
      // console.log("res", res)  ;
      const data = await res.json() ;
      console.log("data" , data);
        if (data && data.products) {
          dispatch({ type: "FETCH_PRODUCTS", payload: data.products });
        }
    }

    useEffect(()=> {
      fetchProducts()  ;
    },[])

    
    return (
      <ShoppingCart.Provider value={{state,dispatch}}>{children}</ShoppingCart.Provider>
    ); 
} 


export const ShoppingCartState = ()=> {
  return useContext(ShoppingCart);
}

export default Context