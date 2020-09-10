import React, {useState} from 'react'
import Compare from '../../functions/compare/compare'
import Style from './sort.module.scss'
import '../../components/theme/global.scss'


function Sort() {

    const [result, setResult] = useState([])

    let TestArray = [
        {item_id: 3, name: "Alis-Backpack", price: 299},
        {item_id: 2, name: "Nike-Backpack", price: 399},
        {item_id: 1, name: "Adidas-Backpack", price: 199},
        {item_id: 6, name: "Alis-Sweater", price: 599},
        {item_id: 8, name: "Nike-Sweatshirt", price: 449},
        {item_id: 4, name: "Alis-Shoes", price: 349},
        {item_id: 7, name: "Enjoi-Backpack", price: 199},
        {item_id: 5, name: "Adidas-Pants", price: 99},
        {item_id: 9, name: "Nike-Pants", price: 239},
        {item_id: 11, name: "Carhart-Backpack", price: 749},
        {item_id: 10, name: "Carhart-Pants", price: 249},
        {item_id: 12, name: "Carhart-Shirt", price: 399},
    ]

    
    const sortID = () => {        
        setResult(TestArray.sort(Compare('item_id','asc')))
    }

    const sortName = () => {
        setResult(TestArray.sort(Compare('name','asc')))
    }

    const sortPrice = () => {
        setResult(TestArray.sort(Compare('price','asc')))
    }

    return (

    <section className={"mainContainer"}>
       <h1>Sort function example</h1>
       <button className={Style.sortbtn} onClick={()=>sortID()}>Sort ID</button>
       <button className={Style.sortbtn} onClick={()=>sortName()}>Sort Name</button>
       <button className={Style.sortbtn} onClick={()=>sortPrice()}>Sort Price</button>

       {result && result.map((item, index) => {
           return (
               <div>
                <p style={{display:"inline-block"}}>{item.item_id}</p>
                <p style={{display:"inline-block"}}> - {item.name}</p>
                <p style={{display:"inline-block"}}> - {item.price}</p>
            </div>
            )
        })}
    </section>
    )
}

export default Sort