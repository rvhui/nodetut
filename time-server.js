const net = require("net")
const moment = require("moment")

const server = net.createServer(function(connection){
    connection.end(moment().format('YYYY-MM-DD HH:mm')+"\n")
})

server.listen(+process.argv[2])