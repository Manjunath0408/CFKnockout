// import { useEffect,useState } from "react";
// import { io } from "socket.io-client";

// const axios = require("axios")
// const socket = io("http://localhost:4000");
import React, { useState, useEffect} from 'react';
import { page1 } from "./components/p1/page1";

function App() {
    return (
        <div>
            <page1 />
            {/* <div>Hello World</div> */}
        </div>
    );
//   const [roomData, setRoomData] = useState([]);
//   const [userid, setUserid] = useState("");
//   const [roomid, setRoomid] = useState("");
//   useEffect(() => {
//     var stored_roomid = sessionStorage.getItem("roomid");
//     var stored_userid = sessionStorage.getItem("userid");

//      if(stored_roomid && stored_userid){
//       var joiningData = {
//         userid: stored_userid,
//         roomid: stored_roomid,
//         refresh: true
//       }
//        socket.emit("joinRoom", joiningData);
//      }
//   },[])
//   socket.on("updateUsers", () => {
//     axios.get("http://localhost:4000/rooms",{
//       params:{
//         roomid: sessionStorage.getItem("roomid")
//       }
//     })
//     .then(res => {
//       setRoomData(res.data.room.users)
//     })
//     .catch(err => console.log(err))
//   })
//   function handleJoin(){
//     sessionStorage.setItem("userid",userid);
//     sessionStorage.setItem("roomid",roomid);
//     var joiningData = {
//       userid: userid,
//       roomid: roomid,
//       refresh: false
//     }
//     console.log(userid,joiningData)
//     socket.emit("joinRoom",joiningData);
//   }
//   function handleCreate(){
//     sessionStorage.setItem("userid",userid);
//     sessionStorage.setItem("roomid",roomid);
//     var joiningData = {
//       userid: userid,
//       roomid: roomid,
//       refresh: false
//     }
//     socket.emit("joinRoom", joiningData);
//   }
//   return (
//     <>
//      <input value={userid} onChange={(e) => setUserid(e.target.value)} placeholder="userid"/>
//      <input value={roomid} onChange={(e) => setRoomid(e.target.value)} placeholder="roomid"/>
//      <button onClick={handleCreate}>Create</button>
//      <button onClick={handleJoin}>JoinRoom</button>
//      {
//        roomData?roomData.map((user) => 
//         <div>{user}</div>
//        ):<div>nothing</div>
//      }
//     </>
//   );
}

export default App;
 