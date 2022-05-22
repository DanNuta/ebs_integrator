import {Link} from "react-router-dom";
import { Products } from "../context/productsContext";
import { useContext } from "react";
import React from "react";

// photo
import shop from "../assets/card_shop.png";
import wishlist from "../assets/wishList.png";

// style
import "./Navbar.scss";



const Navbar = () => {

    const [toggle, setToggle] = React.useState(false);
    const {card, setCard} = useContext(Products);


    const deleteCard = (element) =>{
        let newArray = card.filter(item => item.id !== element.id)

        setCard(newArray)

    }


    return ( 

        <>
        
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>

            <ul>
                <li className="card_element" onClick={() => setToggle(!toggle)}>Card<span>{card.length}</span></li>
                <li><Link to="/shop"><img src={shop} alt="" /></Link></li>
            </ul>
        </nav>


        {toggle && <div className={toggle ? "card_item active" : "card_item"}>
            {card.map(item =>(
                <div>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                    <button onClick={() =>deleteCard(item)}>Delete</button>
                </div>
            ))}
                   </div>
        }


        </>
     );
}
 
export default Navbar;