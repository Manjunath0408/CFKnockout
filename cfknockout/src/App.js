// import { useEffect,useState } from "react";
// import { io } from "socket.io-client";
// import Header  from "./components/base/Header";
// import Page1  from "./components/p1/Page1";
// import './styles/App.css'

// const axios = require("axios")

// const socket = io("http://localhost:4000");

// function App() {
//   // const [roomData, setRoomData] = useState([]);
//   // const [userid, setUserid] = useState("");
//   // const [roomid, setRoomid] = useState("");
//   // useEffect(() => {
//   //   var stored_roomid = sessionStorage.getItem("roomid");
//   //   var stored_userid = sessionStorage.getItem("userid");

//   //    if(stored_roomid && stored_userid){
//   //     var joiningData = {
//   //       userid: stored_userid,
//   //       roomid: stored_roomid,
//   //       refresh: true
//   //     }
//   //      socket.emit("joinRoom", joiningData);
//   //    }
//   // },[])
//   // socket.on("updateUsers", () => {
//   //   axios.get("http://localhost:4000/rooms",{
//   //     params:{
//   //       roomid: sessionStorage.getItem("roomid")
//   //     }
//   //   })
//   //   .then(res => {
//   //     setRoomData(res.data.room.users)
//   //   })
//   //   .catch(err => console.log(err))
//   // })
//   // function handleJoin(){
//   //   sessionStorage.setItem("userid",userid);
//   //   sessionStorage.setItem("roomid",roomid);
//   //   var joiningData = {
//   //     userid: userid,
//   //     roomid: roomid,
//   //     refresh: false
//   //   }
//   //   console.log(userid,joiningData)
//   //   socket.emit("joinRoom",joiningData);
//   // }
//   // function handleCreate(){
//   //   sessionStorage.setItem("userid",userid);
//   //   sessionStorage.setItem("roomid",roomid);
//   //   var joiningData = {
//   //     userid: userid,
//   //     roomid: roomid,
//   //     refresh: false
//   //   }
//   //   socket.emit("joinRoom", joiningData);
//   // }
//   return (
//     <>
//      <div className="head"><Header/></div>
//      <div className="login-comp"><Page1/></div>
//     </>
//   );
// }

// export default App;
 