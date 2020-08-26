function TimeStampToDate(timestamp) {
    let converted = new Date(timestammp).getTime();
    return converted/1000;
}

function DateToTimestamp(date){
    let converted = new Date(date).getTime() /1000
    return converted
}

function TimestampToHumanDate(timestamp){
        const milliseconds = timestamp * 1000
        const date = new Date(milliseconds)
        const dateArray = [
            {year: date.getFullYear()},
            {month: date.getMonth()+1},
            {date: date.getDate()},
            {hours: date.getHours()},
            {minutes: date.getMinutes()},
            {seconds: date.getSeconds()},
        ]
    return dateArray
}

export default {TimeStampToDate, DateToTimestamp, TimestampToHumanDate}