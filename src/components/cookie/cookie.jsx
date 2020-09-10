import React, {useEffect, useState} from 'react'
import Style from './cookie.module.scss'
import Cookies from 'js-cookie';


function CookieBanner () {

    const [showBanner, setShowBanner] = useState(false)

    const setAccept = () => {
        if (!Cookies.get("accept")){
            Cookies.set("accept", true, {expires: 7});
            setShowBanner(false)
        }
    }

    const denyCookies = () => {
        if (!Cookies.get("accept")){
            Cookies.set("accept", false, {expires: 8});
            setShowBanner(false)
        }
    }

    useEffect(() => {
        if (!Cookies.get("accept")){
            setShowBanner(true)
        }
    }, [])

    return (
        showBanner && 
        <section className={Style.background}>
            <div className={Style.cookiebanner}> 
                <p>
                This is a cookie banner - click OKAY to accept cookies to proceed to site. If you dont want any cookies, click deny all.
                </p>
            <button onClick={()=>{setAccept()}}>Okay to all</button>
            <button onClick={()=>{denyCookies()}}>Deny all</button>
            </div>
        </section>
    )
}

export default CookieBanner