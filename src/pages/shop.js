import { Products } from "../context/productsContext";
import { useContext } from "react";

const Shop = () => {

    const {shop, setShop} = useContext(Products)


    const deleteShop = (element) =>{

        let shopDelete = shop.filter(item => item.id !== element.id)

        setShop(shopDelete);
    }


    
   
    

    


    const addMore = (element, type) =>{
        if(type == 0){
            let elementAdd = shop.map(item => item.id == element.id ? {...item, quantity: item.quantity > 1 ? item.quantity -1 : item.quantity = 1} : item)
            
           setShop(elementAdd)

        }else{
            let elementAdd = shop.map(item => item.id == element.id ? {...item, quantity: item.quantity +1} : item)
            setShop(elementAdd)

        }
    }



   

        

    

    return ( 
        <section>


 {shop.length >= 1 ?  <table>
                <tr>
                    <td>Name</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Action</td>
                </tr>
            {shop.map(item =>(
               
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td><button onClick={() => addMore(item, 1)}>+</button><button onClick={() => deleteShop(item)}>Delete</button><button onClick={() => addMore(item, 0)}>-</button></td>
                    </tr>
               
            ))}



            </table> : <h2>Nu exista produse adaugate</h2> }
           

        </section>
     );
}
 
export default Shop;