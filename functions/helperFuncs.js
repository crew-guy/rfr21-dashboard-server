const extractTime = (timeString, reqmt) => {
    const [hour,minute,second] = timeString.split(':')
    let returnedVal = ''
    switch(reqmt){
        case 'hour':
            returnedVal = hour
            break;
        case 'minute':
            returnedVal = minute;
            break;
        case 'second':
            returnedVal = second;
            break;
    }
    return returnedVal
}

const extractDate = (dateString, reqmt) => {
    const [day, month, year] = dateString.split('/')
    let returnedVal = ''
    switch(reqmt){
        case 'day':
            returnedVal = day
            break;
        case 'month':
            returnedVal = month;
            break;
        case 'year':
            returnedVal = year;
            break;
    }    
    return returnedVal
}

module.exports.extractDate = extractDate
module.exports.extractTime = extractTime