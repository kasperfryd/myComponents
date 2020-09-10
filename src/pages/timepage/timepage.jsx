import React, { useState, useEffect } from 'react'
import { timeStampToDate, dateToTimestamp, timestampToArray, getClock, getDate } from '../../functions/timestamp/time'
import Style from './time.module.scss'
import '../../components/theme/global.scss'

function TimePage() {

    const [clock, setClock] = useState("")
    const [unixTimestamp, setUnixTimestamp] = useState()
    const [currentDate, setCurrentDate] = useState()
    const [convertedTimestamp, setConvertedTimestamp] = useState()
    const [arrayOfTime, setArrayOfTime] = useState()

    useEffect(() => {
        let time = setInterval(() => {
            setClock(getClock)
        }, 1000);

        return () => clearInterval(time);
    }, [])

    const getTimeStamp = () => {
        setUnixTimestamp(dateToTimestamp(currentDate))
    }

    const getCurrentDate = () => {
        setCurrentDate(getDate)
    }

    const convertStampToDate = () => {
        setConvertedTimestamp(timeStampToDate(unixTimestamp))
    }

    const getArrayOfTime = () => {
        setArrayOfTime(timestampToArray(unixTimestamp))
    }

    useEffect(() => {
        console.log(currentDate)
        console.log(arrayOfTime)
    }, [currentDate, arrayOfTime])

    return (
        <section className={"mainContainer"}>
            <h1>Time and date functions</h1>
            <p>Currently the time is {clock}</p>

            <p>Get a new date object</p>
            <button className={Style.btn} onClick={() => { getCurrentDate() }}>Get date object</button>
            {currentDate && <p>Current date object is {currentDate.toString()}</p>}

            {currentDate &&
                <>
                    <p>Get a unix timestamp of the current time and date</p>
                    <button className={Style.btn} onClick={() => { getTimeStamp() }}>Get timestamp</button>
                    {unixTimestamp && <p>Unix timestamp is: {unixTimestamp}</p>}
                </>
            }

            {unixTimestamp &&
                <>
                    <p>Convert timestamp back to locale en_GB date and time</p>
                    <button className={Style.btn} onClick={() => { convertStampToDate() }}>Convert date to timestamp</button>
                    {convertedTimestamp && <p>Converted timestamp is in date {convertedTimestamp.toString()}</p>}
                </>
            }

            {convertedTimestamp &&
                <>
                    <p>Get an array of all time and date values from a unix timestamp</p>
                    <button className={Style.btn} onClick={() => { getArrayOfTime() }}>Get time array</button>
                </>
            }

            {arrayOfTime && arrayOfTime.map((item, index) => {
                return (
                    <p>{item.name} {item.item}</p>
                )
            })}
        </section>
    )
}

export default TimePage