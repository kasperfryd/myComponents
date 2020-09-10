import React from 'react'
import Accordion from '../../components/accordion/accordion'
import '../../components/theme/global.scss'

function AccordionPage(){
    return (
    <section className={"mainContainer"}>
    <h1>Accordion component</h1>
        <Accordion child="Hello world - Im accordion one" title="Accordion Content One" width="50%"></Accordion>
        <Accordion child="Hello world - Im accordion two" title="Accordion Content Two" width="50%"></Accordion>
        <Accordion child="Hello again - still here?" title="Accordion Content... I lost count" width="50%"></Accordion>
    </section>
    )
}
export default AccordionPage