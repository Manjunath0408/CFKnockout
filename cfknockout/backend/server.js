const http = require("http")
const express =require("express")
const app = express();

const server = http.createServer(app)

const io = require("socket.io")(server)

server.listen(4000, () => console.log("server running.."))

var rooms = [
    {
        roomid: "something",
        users: ["a","b"],
        data:{
            "some":"nothing"
        }
    },
]

io.on("connection", socket => {
    socket.on("joinRoom", (userid, roomid) => {
        if(rooms.find(x => x.roomid == roomid) != undefined){
            if(!rooms.find(x => x.roomid == roomid).users.includes(userid)){
                for(let i = 0; i < users.length; i++){
                    if(users[i].roomid == roomid){
                        users[i].users.append(userid)
                    }
                }
            }
        }
        else {
            rooms.append({
                roomid,
                users: [userid],
                data:{}
            })
        }
        socket.join(roomid);
    })

})