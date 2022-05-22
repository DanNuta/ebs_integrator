import React from "react";
import { Products } from "../context/productsContext";
import { useContext } from "react";


const useFetch = (url) => {
    const [isPending, setIsPending] = React.useState(false);
    const [error, setError] = React.useState(null);


    const {setDataPr} = useContext(Products);



    React.useEffect(() =>{

        const backdata = async () =>{
            setIsPending(true)
            try{
                const res = await fetch(url);
                const dataRez = await res.json();
               
    
                setDataPr(dataRez)
                setIsPending(false)
    
            }
            catch(e){
                setError(e.message)
                setIsPending(false)
            }
        }
    
        backdata();
        
    }, [url])

    


    return { isPending, error}

    
}
 
export default useFetch;