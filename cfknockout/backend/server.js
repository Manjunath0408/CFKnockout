const http = require("http")
const express =require("express")
const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json())

const server = http.createServer(app)

const io = require("socket.io")(server ,{
    cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
});

  
var rooms = [
    {
        roomid: "something",
        users: ["a","b"],
        data:{
            some:"nothing"
        }
    },
]
let cnt = 0;
app.get("/rooms", (req,res) => {
    const {roomid} = req.query;
    console.log(cnt)
    cnt++;
    res.json({room: rooms.find(room => room.roomid === roomid)})
});




io.on("connection", socket => {
    {/*Socket joining room */}
    socket.on("joinRoom", joinData => {
        var roomid = joinData.roomid;
        var userid = joinData.userid;
        if(rooms.find(x => x.roomid === roomid) != undefined){
            if(!rooms.find(x => x.roomid === roomid).users.includes(userid)){
                for(let i = 0; i < rooms.length; i++){
                    if(rooms[i].roomid == roomid){
                        rooms[i].users.push(userid)
                    }
                }
            }
        }
        else {
            rooms.push({
                roomid,
                users: [userid],
                data:{}
            })
        }
        console.log(rooms);
        socket.join(roomid);
        if(!joinData.refresh)
            io.in(roomid).emit("updateUsers")
    })
    {/*Socket Leaving */}
    socket.on("leaveRoom", (userid, roomid) => {
        for(let i = 0; i < rooms.length; i++){
            if(rooms[i].roomid === roomid){
                var index = rooms[i].users.indexOf(userid);
                rooms[i].users.splice(index,1);
            }
        }
        socket.leave(roomid);
    })

})

server.listen(4000, () => console.log("server running.."))