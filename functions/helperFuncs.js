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

const generateQuery = (body) =>
{
    console.log(body)
    const { dateRqst, idRqst, timeRqst, plotRqst } = body;
    const [startDateRqst, endDateRqst] = dateRqst;
    const [startTimeRqst, endTimeRqst] = timeRqst;
    const [startIdRqst, endIdRqst] = idRqst;
    let parameters = [startDateRqst, endDateRqst, startTimeRqst, endTimeRqst, startIdRqst, endIdRqst]
    let xAxis = "time"
    let id = ''
    if (extractTime(startTimeRqst,'min') == '00' && extractTime(endTimeRqst,'min')=='59')
    {
      xAxis = "EXTRACT(hour FROM time)"
      if (startTimeRqst == '00:00:00' && endTimeRqst == '23:59:59')
      {
        xAxis = "date"
        if (extractDate(startDateRqst,'day') == '01' && extractDate(endDateRqst,'day')=='28')
        {
          xAxis = "EXTRACT(month FROM date)"
          if (extractDate(startDateRqst,'month') == "01" && extractDate(endDateRqst,'month')=='12')
          {
            xAxis = "EXTRACT(year FROM date)"
          }
        }
      }
    }
    if (startIdRqst != endIdRqst) {id = ", id"}
    let query = "(SELECT AVG(" + plotRqst + ") AS mean, " + xAxis + " AS xAxis FROM dashdata WHERE date BETWEEN $1 AND $2 AND time BETWEEN $3 AND $4 AND id BETWEEN $5 AND $6 GROUP BY " + xAxis + id + " ORDER BY " + xAxis + ")"
    if (startIdRqst != endIdRqst)
    {
      query = "SELECT MIN(mean), AVG(mean) as mean, MAX(mean), xAxis FROM " + query + " nested GROUP BY xAxis"
    }
    return {query,parameters}
}

module.exports.generateQuery = generateQuery