// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import icon from "../logo/icon.png"
// import "./home.css"

// export default function Menu() {
//   const [newItem, setNewItem] = useState("");
//   const [items, setItems] = useState([]);
//   function addItem() {
//     if(!newItem){
//       return
//     }
//    const item = {
//     id: Math.floor(Math.random()*1000),
//     value: newItem
//    };
//    setItems(oldList => [...oldList, item]);
//    setNewItem("");
//   }
//   return (
//     <div>
//     <head>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
//     <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
//     </head>
//     <body>
//       <header>
//         <nav class="hd">
//           <i class="bx bx-menu"></i>
//           <img src={icon}></img>
//           <span class="title">Keep</span>
//         </nav>
//       </header>
//         <nav class="nav">
//             <ul>
//                 {/* <li>
//                     <a href='#' class="logo">
//                         <img src={icon} alt=""/>
//                     </a>
//                 </li> */}
//                 <li>
//                     <Link to="/notes">
//                         <i class="bx bx-bulb"></i>
//                         <span class="nav-item">Notes</span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/remember">
//                         <i class="bx bx-bell"></i>
//                         <span class="nav-item">Remainder</span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/edit">
//                         <i class="bx bx-pencil"></i>
//                         <span class="nav-item">Edit label</span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/archive">
//                         <i class="bx bx-archive"></i>
//                         <span class="nav-item">Archive</span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/trash">
//                         <i class="bx bx-trash"></i>
//                         <span class="nav-item">Trash</span>
//                     </Link>
//                 </li>
//             </ul>
//         </nav>
//         <div class="todo">
//         <input class="input" type="text" placeholder='Take a note...' value={newItem} onChange={e => setNewItem(e.target.value)}/>
//         <button onClick={() => addItem()}>+</button>
//         <ul class="list">
//           {items.map(item => {
//             return(
//               <li key={item.id}>{item.value}</li>
//             )
//           })}
//         </ul>
//         </div>
//     </body>
// </div>
//   )
// }
import React from 'react'

export default function Menu() {
  return (
    <div>M</div>
  )
}
