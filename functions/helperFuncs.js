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

const processQuery = () => {
    // CONDITIONALS

    let paramters = [...date,...time,...vehicleId]
    // console.log('ending to process data request');
    // res.json(JSON.parse(dataRqst)).status(200);
    // } catch (error) {
    //   console.log(error.message);
    // }
  
    // let parameters = [dataRqst.dateRqst[0], dataRqst.dateRqst[1], dataRqst.timeRqst[0], dataRqst.timeRqst[1], dataRqst.idRqst[0], dataRqst.idRqst[1]]
    // let xAxis = "time"
    // let id = ''
    // if (dataRqst.timeRqst[0][3] == '0' && dataRqst.timeRqst[0][4] == '0' && dataRqst.timeRqst[1][3] == '5' && dataRqst.timeRqst[1][4] == '9') {xAxis = "extract(hour from time)"
    // if (dataRqst.timeRqst[0] == '00:00:00' && dataRqst.timeRqst[1] == '23:59:59') {xAxis = "date"
    // if (dataRqst.dateRqst[0][0] == 0 && dataRqst.dateRqst[0][1] == 1 && dataRqst.dateRqst[1][0] == 2 && dataRqst.dateRqst[1][1] == 8) {xAxis = "extract(month from date)"
    // if (dataRqst.dateRqst[0][3] == 0 && dataRqst.dateRqst[0][4] == 1 && dataRqst.dateRqst[1][3] == 1 && dataRqst.dateRqst[1][4] == 2) {xAxis = "extract(year from date)"}}}}
    // if (dataRqst.idRqst[0] != dataRqst.idRqst[1]) {id = ", id"}
    // let query = "(select avg(" + dataRqst.plotRqst + ") as mean, " + xAxis + " as xAxis from data3 where date between $1 and $2 and time between $3 and $4 and id between $5 and $6 group by " + xAxis + id + " order by " + xAxis + ")"
    // if (dataRqst.idRqst[0] != dataRqst.idRqst[1]) {query = "select min(mean), avg(mean) as mean, max(mean), xAxis from " + query + " nested group by xAxis"}
    // client.query(query, parameters, (err, res) => {
    //   if (err) return "data not found"
    //   console.log(res.rows)
    //   client.end()
    //   res.json(res.rows)
    // })
    // }
    //   catch {
    //   return "invalid input"
    // }
    
}

module.exports.extractDate = extractDate
module.exports.extractTime = extractTime
module.exports.processQuery = processQuery