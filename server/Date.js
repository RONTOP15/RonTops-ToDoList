const d = new Date()

const hour = d.getHours()
const min = d.getMinutes()

const day = d.getDate()
const month =d.getMonth()
const year = d.getFullYear()

const fullDateTime = {Time:`${hour}:${min}`, Date:`${day}/${month + 1}/${year} `} 

module.exports =  fullDateTime;