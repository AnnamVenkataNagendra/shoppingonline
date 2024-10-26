import {  createContext, useContext ,useState} from "react";


const CartContextComponent= createContext();

export const CartProvider=({item})=>{

    const [ cartitem,setcartitem ]=useState([]);

    const addtoCart=(collect)=>{
          
        setcartitem([...cartitem,collect])
    }

    const removeFromcrt=(item)=>{
       setcartitem(cartitem.filter((apple)=>apple!=item))
    }


    return (
           <CartContextComponent.Provider value={{cartitem,addtoCart,removeFromcrt}}>
                     {item.children}
              </CartContextComponent.Provider>
    )
}

export const  useCart = ()=>{
    return useContext(CartContextComponent);
}
