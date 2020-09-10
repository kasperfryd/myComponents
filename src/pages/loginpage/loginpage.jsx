import React from 'react'
import Login from '../../components/login/login'
import '../../components/theme/global.scss'


function LoginPage(){

    return (
        <section className={"mainContainer"}>
            <h1>Login component</h1>
            <Login></Login>
        </section>
    )
}

export default LoginPage