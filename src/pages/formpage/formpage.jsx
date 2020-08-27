import React from 'react'
import Form from '../../components/form/form'


/**
 * For validation to work, names on fields must be 
 *
 * For name : name
 * For email : email
 * For password : password
 * 
 * All other validation checks will say "Required" as all fields by default are required
 * 
 * Valid types are: input, radio, select, comment
 * 
 * Label can be whatever you choose
 */

const formfields = [
    {name: "name", label:"Name",type:"input"},
    {name: "email", label:"Email",type:"input"},
    {name: "password", label:"Password", type:"input"},
    {name: "comment", label:"Comment", type:"input"},
    {name: "consent", label:"Accept", type:"radio"},
    {name: "select", label:"Select an option", type:"select", selectOptions:[
        {name: "Option One", value:1},
        {name: "Option Two", value:2},
        {name: "Option Three", value:3},
        {name: "Option Four", value:4},
        {name: "Option Five", value:5},
]}]

function FormPage(){
    return (
        <>
        <h1>Form with react-hook-form</h1>
        <Form formfields={formfields}/>
        </>
    )
}

export default FormPage