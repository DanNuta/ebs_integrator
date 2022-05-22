import { createContext } from "react";
import React from "react";

export const Products = createContext()


const ProductsContent = (props) => {

    const [data, setDataPr] = React.useState([]);
    const [card, setCard] = React.useState([]);
    const [shop, setShop] = React.useState([]);
    const [filter, setFilter] = React.useState([]);
    const [nume, setNume] = React.useState("");



  return ( 
        <Products.Provider value={{setDataPr, data, card, setCard, shop, setShop, filter, setFilter, setNume, nume}}>
            {props.children}
        </Products.Provider>
     );
}
 
export default ProductsContent;