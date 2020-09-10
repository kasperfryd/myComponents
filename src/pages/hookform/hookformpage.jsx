import React from 'react'
import TestForm from '../../components/testform/testform'
import '../../components/theme/global.scss'


function HookBasketPage(){
    return (
        <section className={"mainContainer"}>
            <h1>Add to API basket example</h1>
            <TestForm></TestForm>
        </section>
    )
}

export default HookBasketPage