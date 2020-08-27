import React, {useState, useEffect} from 'react'
import {timeStampToDate, dateToTimestamp, timestampToArray, getClock, getDate} from '../../functions/timestamp/time'
function TimePage(){

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

    return(
        <section>
            <h1>Time and date functions</h1>
           <p>Currently the time is {clock}</p>

            <p>Get a new date object</p>
            <button onClick={() => {getCurrentDate()}}>Get date object</button>
            {currentDate && <p>Current date object is {currentDate.toString()}</p>}
            <br></br>

            {currentDate && 
            <>
                <p>Get a unix timestamp of the current time and date</p>
                <button onClick={()=>{getTimeStamp()}}>Get timestamp</button>
                {unixTimestamp && <p>Unix timestamp is: {unixTimestamp}</p>}
                <br></br>
            </>
            }

            {unixTimestamp &&
            <> 
            <p>Convert timestamp back to locale en_GB date and time</p>
            <button onClick={()=>{convertStampToDate()}}>Convert date to timestamp</button>
            {convertedTimestamp && <p>Converted timestamp is in date {convertedTimestamp.toString()}</p>}
            <br></br>
            </>
            }

            {convertedTimestamp && 
            <>
            <p>Get an array of all time and date values from a unix timestamp</p>
            <button onClick={()=>{getArrayOfTime()}}>Get time array</button>
            <br></br>
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