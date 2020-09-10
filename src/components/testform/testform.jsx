import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from "../../context/ContextProvider"
import FormComponent from './formComponent';

function BasketForm() {

    const {loginData, doFetch} = useContext(AppContext);

    // states til at gemme ID og data fra api
    const [products, setProducts] = useState([]);

    async function toCart(values) {
        
        let formData = new FormData();
        formData.append('quantity', values.quantity)
        formData.append('product_id', values.product_id)
        formData.append('product_name', values.product_name)
        formData.append('price', values.price)
        
        let options = {
            method: "POST",
            body: formData,
            headers: {
                'Authorization': `Bearer ${loginData.access_token}`
            }
        }
        try {
            const url = `https://api.mediehuset.net/snippets/cart`
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.log(error)
        }
    }

    // UseEffect med et tomt dependency array (kører kun en gang når component mounter)
    useEffect(() => {
        async function fetchProducts(){
            const url = `https://api.mediehuset.net/bakeonline/products`
            let data = await doFetch(url)
            setProducts(data)
        }
        fetchProducts()
    }, [])

    // Returner HTML
    return (
        <>
            {products.products && products.products.map((item, i) => {
                return (
                    <FormComponent key={i} toCart={toCart} id={item.id} title={item.title} price={item.price}/>
                )
            })}
        </>
    )
}

export default BasketForm