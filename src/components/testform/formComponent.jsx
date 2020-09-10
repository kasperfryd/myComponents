import React from 'react'
import { useForm } from "react-hook-form"
import Style from './testform.module.scss'

function FormComponent(props) {

    const onSubmit = values => props.toCart(values);

    const { register, handleSubmit } = useForm();

    return (
        <form className={Style.form} key={props.i} onSubmit={handleSubmit(onSubmit)}>
                <p><b>{props.title}</b></p>
                <input type="hidden" name="product_id" defaultValue={props.id} ref={register} />
                <input type="hidden" name="product_name" defaultValue={props.title} ref={register} />
                <input type="hidden" name="price" defaultValue={props.price} ref={register} />
                <input name="quantity" defaultValue={0} ref={register} />
                <input className={Style.formbtn} type="submit" value="Læg i kurv" />
        </form>
    )
}

export default FormComponent