import {Products} from "../context/productsContext";
import { useContext } from "react";

const Home = () => {

    const {data, setDataPr, setCard, card, setShop, filter, setFilter, shop, setNume, nume} = useContext(Products)



    const addProducts = (item) =>{

        for(let i = 0; i < card.length; i++){   
            if(card[i].id == item.id){
                return
            } 
        }
        setCard(prevCard => [...prevCard, item])
   }








   const shopEl = (item) =>{

   for(let i = 0; i < shop.length; i++){   
    if(shop[i].id == item.id){
        let shopItems = shop.map(element => element.id == item.id ? {...element, quantity: element.quantity +1} : element)
        setShop(shopItems)
        return
    } 
   }

     setShop(prev => [...prev, {...item, quantity: 1}])
    
   }






   const fiterCategory = (category) =>{
       let categorySort = data.filter(item => item.category.name === category)
       setFilter(categorySort)
   }


   const sortPrice = (sort) =>{

    if(sort == "asc"){
       let filterSort = filter.sort((a,b) =>{
            if(a.price < b.price) return -1
            if(a.price > b.price) return 1
            return 0
        })

        setFilter(filterSort)

        setNume("Dan")


    }else{
       
       let filterSort =  filter.sort((a,b) =>{
            if(a.price > b.price) return -1
            if(a.price < b.price) return 1
            return 0
        })


        setFilter(filterSort);

        setNume("Io")

       
    }

   }



   

  

    return ( 
        
        <>

            <table>
                    <tbody>
                    <td>Category
                        <td onClick={() => fiterCategory("Vegetables and legumes/beans")} style={{"border": "1px solid black"}}>Vegetables and legumes/beans</td>
                        <td onClick={() => fiterCategory("Grain (cereal) foods")} style={{"border": "1px solid black"}}>Grain (cereal) foods</td>
                        <td onClick={() => fiterCategory("Milk, yoghurt cheese and/or alternatives")} style={{"border": "1px solid black"}}>Milk, yoghurt cheese and/or alternatives</td>
                    </td>
                    <td>Name</td>
                    <td>Price
                        <td onClick={() => sortPrice("asc") } style={{"border": "1px solid black"}}>Asc</td>
                        <td onClick={() => sortPrice("desc") } style={{"border": "1px solid black"}}>Desc</td>
                    </td>
                    <td>Actions</td>
                    </tbody>

                {filter ? filter.map(item =>(
                
                    <tr  key={item.id}>
                        <td>{item.category.name}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><button onClick={() => shopEl(item)}>Add products to shop</button></td>
                        <td><button onClick={() => addProducts(item)}>Add in card</button></td>
                    </tr>
                
                )) : <p>Loading...</p>}



                </table>

                
        
        </>
     );
}
 
export default Home;