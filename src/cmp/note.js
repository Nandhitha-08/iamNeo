// // // import React from 'react';
// // // import "./style.css"
// // // import {MdDelete} from "react-icons/md"

// // // export default function Note({title, content, onDelete, id,image}) {  
// // //   console.log((image))
// // //   return (
// // //     <div>
// // //           <div className='note' draggable>
// // //         <h1>{title}</h1>
// // //         <p>{content}</p>
// // //         {image===""?"":<img src={image} width="220" height="240"/>}
// // //         <button onClick={() => onDelete(id)}><MdDelete size={25}/></button>
// // //       </div>
// // //       </div>
// // //   )
// // // }
// // import React, {  useEffect, useState } from "react"
// // import "./style.css"
// // import {MdDelete} from "react-icons/md"

// // function Note({value,onDelete}) {
// //   useEffect(()=>{
// //     setvalue(value)
// //   },[value])
  
// //   const [value1,setvalue]=useState([])

// //   const [dragItem,setdragItem]=useState(null)
// //   const [dragOverItem,setdragOverItem]=useState(null)

// //   const handleSort = () => {
// //     //duplicate items
// //     let _value = [...value1];

// //     //remove and save the dragged item content
// //     const draggedItemContent = _value.splice(dragItem, 1)[0];

// //     //switch the position
// //     _value.splice(dragOverItem, 0, draggedItemContent);

// //     //reset the position ref
// //     setdragItem(null)
// //     setdragOverItem(null)

// //     //update the actual array
// //     setvalue(_value);

// //   };

// //   return(
// //     <div>
// //       {value1.map((value1,index)=>{
// //     return(
// //       <div className='note' draggable
// //             onDragStart={(e) =>setdragItem(index)}
// //             onDragEnter={(e) => setdragOverItem(index)}
// //             onDragEnd={handleSort}
// //             onDragOver={(e) => e.preventDefault()}>
// //         <h1>{value1.title}</h1>
// //         <p>{value1.content}</p>
// //         {value1.imgfile===""?"":<img src={value1.imgfile} width="220" height="240"/>}
// //         <button onClick={() => onDelete(index)}><MdDelete size={25}/></button>
// //       </div>
// //     )
// //   })}
// //     </div>
// //   )
// // }

// // export default Note

// // import React, {  useEffect, useState } from "react"
// // import "./style.css"
// // import {MdDelete} from "react-icons/md"
// // import Header from "./header"
// // import Area from "./area"


// // function Note({value,onDelete}) {
// //   useEffect(()=>{
// //     setvalue(value)
// //   },[value])
// //   // useEffect(()=>{
// //   //   alert("suma")
// //   // },[])
  
// //   const [value1,setvalue]=useState([])

// //   const [dragItem,setdragItem]=useState(null)
// //   const [dragOverItem,setdragOverItem]=useState(null)

// //   const handleSort = () => {
// //     //duplicate items
// //     let _value = [...value1];

// //     //remove and save the dragged item content
// //     const draggedItemContent = _value.splice(dragItem, 1)[0];

// //     //switch the position
// //     _value.splice(dragOverItem, 0, draggedItemContent);

// //     //reset the position ref
// //     setdragItem(null)
// //     setdragOverItem(null)

// //     //update the actual array
// //     setvalue(_value);

// //   };
// // //serach
// // const [search,setsearch]=useState("");
// // const [list,setlist]=useState([])

// // // console.log(value1)
// // function handlesearch(e){

// //   setsearch(e.target.value)
// //   setlist(value1.filter(item=>item.title.includes(e.target.value)||item.content.includes(e.target.value)))

// // }
// // const logo = <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo"></img>

// // const disp = () => {
// //   list.map((value1,index)=>{
// //     return(
// //       <div className='note' key={index} draggable
// //             onDragStart={(e) =>setdragItem(index)}
// //             onDragEnter={(e) => setdragOverItem(index)}
// //             onDragEnd={handleSort}
// //             onDragOver={(e) => e.preventDefault()}>
// //         <h1>{value1.title}</h1>
// //         <p>{value1.content}</p>
// //         {value1.imgfile===""?"":<img src={value1.imgfile} alt="5" width="220" height="240"/>}
// //         <button onClick={() => onDelete(index)}><MdDelete size={25}/></button>
// //       </div>
// //     )
// //   })
// // }
// // //////////////////////////////////
// // const [notes, setNotes] = useState([]);
// // function addNote(newNote){
// //   setNotes((prevValue) => {
// //     return [...prevValue, newNote]
// //   })
// // }

// // function deleteNote(id){
// //   setNotes(prevValue => {
// //     return [...prevValue.filter((note,index)=>
// //       index !== id)]
// //   })
// // }


// // return(
// //   <div>

// //     <input type="text" placeholder="search" onChange={handlesearch} />
// //     {/* <Area onAdd={addNote}/> */}
// //     {/* <Note value={notes} onDelete={deleteNote}/> */}
// //     {search===""?
// //     value1.map((value1,index)=>{
// //   return(
// //     <div className='note' key={index} draggable
// //           onDragStart={(e) =>setdragItem(index)}
// //           onDragEnter={(e) => setdragOverItem(index)}
// //           onDragEnd={handleSort}
// //           onDragOver={(e) => e.preventDefault()}>
// //       <h1>{value1.title}</h1>
// //       <p>{value1.content}</p>
// //       {value1.imgfile===""?"":<img src={value1.imgfile} alt="5" width="220" height="240"/>}
// //       <button onClick={() => onDelete(index)}><MdDelete size={25}/></button>
// //     </div>
// //   )
// // }):

// // list.map((value1,index)=>{
// //   return(
// //     <div className='note' key={index} draggable
// //           onDragStart={(e) =>setdragItem(index)}
// //           onDragEnter={(e) => setdragOverItem(index)}
// //           onDragEnd={handleSort}
// //           onDragOver={(e) => e.preventDefault()}>
// //       <h1>{value1.title}</h1>
// //       <p>{value1.content}</p>
// //       {value1.imgfile===""?"":<img src={value1.imgfile} alt="5" width="220" height="240"/>}
// //       <button onClick={() => onDelete(index)}><MdDelete size={25}/></button>
// //     </div>
// //   )
// // })

// // }
// // </div>
// // )
// // }

// // export default Note



// import React, {  useEffect, useState } from "react"
// import "./style.css"
// import {MdDelete} from "react-icons/md"
// import Header from "./header"
// import Area from "./area"
// import { IoIosAdd } from 'react-icons/io';
// import { FaPen } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// function Note({value,onDelete, onAdd}) {
//   useEffect(()=>{
//     setvalue(value)
//   },[value])
//   // useEffect(()=>{
//   //   alert("suma")
//   // },[])
  
//   const [value1,setvalue]=useState([])

//   const [dragItem,setdragItem]=useState(null)
//   const [dragOverItem,setdragOverItem]=useState(null)

//   const handleSort = () => {
//     //duplicate items
//     let _value = [...value1];

//     //remove and save the dragged item content
//     const draggedItemContent = _value.splice(dragItem, 1)[0];

//     //switch the position
//     _value.splice(dragOverItem, 0, draggedItemContent);

//     //reset the position ref
//     setdragItem(null)
//     setdragOverItem(null)

//     //update the actual array
//     setvalue(_value);

//   };
// //serach
// const [search,setsearch]=useState("");
// const [list,setlist]=useState([])

// // console.log(value1)
// function handlesearch(e){

//   setsearch(e.target.value)
//   setlist(value1.filter(item=>item.title.includes(e.target.value)||item.content.includes(e.target.value)))

// }
// //deletefilter
// function deleteNote(id){
//   setlist(list => {
//     return [...list.filter((value1)=>
//       value1.id !== id)]
//   })
//   onDelete(id)
// }
// //////
// const logo = <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo"></img>

// //////////////////////////////////
// const [notes, setNotes] = useState([]);
// function addNote(newNote){
//   setNotes((prevValue) => {
//     return [...prevValue, newNote]
//   })
// }

// function deleteNote(id){
//   setNotes(prevValue => {
//     return [...prevValue.filter((note,index)=>
//       index !== id)]
//   })
// }

// ///////////////


// return(
//   <div>
    // <div className='header'>
    //         {logo}
    //         <h3>Keep</h3>
    // <input className="search" type="text" placeholder="search" onChange={handlesearch} />

    // </div>


    //    <form>
    //         {isExpanded && (<input value={note.title} type='text' placeholder='Title' name="title" onChange={handleChange}/>)}
    //         <p>
    //             <textarea onClick={handedExpanded} value={note.content} name="content" placeholder='Take a note...' onChange={handleChange} rows={isExpanded ? 2: 1}></textarea>
    //         </p>
    //         <button className='button1' onClick={submitButton}><IoIosAdd size={35}/></button>
    //         <input className='button2' type='file' onChange={imgfilehandler} />
    //         <Link to="/draw" className='button3'><FaPen size={35}/></Link>
    //     </form>



//     {/* <Area onAdd={addNote}/> */}
//     {/* <Note value={notes} onDelete={deleteNote}/> */}
//     <div className="center">
//     {search===""?
//     value1.map((value1,index)=>{
//   return(
//     <div className='note' key={index} draggable
//           onDragStart={(e) =>setdragItem(index)}
//           onDragEnter={(e) => setdragOverItem(index)}
//           onDragEnd={handleSort}
//           onDragOver={(e) => e.preventDefault()}>
//       <h1>{value1.title}</h1>
//       <p>{value1.content}</p>
//       {value1.imgfile===""?"":<img src={value1.imgfile} alt="5" width="220" height="240"/>}
//       <button onClick={() => onDelete(index)}><MdDelete size={25}/></button>
//     </div>
//   )
// }):

// list.map((value1,index)=>{
//   return(
//     <div className='note' key={index} draggable
//           onDragStart={(e) =>setdragItem(index)}
//           onDragEnter={(e) => setdragOverItem(index)}
//           onDragEnd={handleSort}
//           onDragOver={(e) => e.preventDefault()}>
//       <h1>{value1.title}</h1>
//       <p>{value1.content}</p>
//       {value1.imgfile===""?"":<img src={value1.imgfile} alt="5" width="220" height="240"/>}
//       <button onClick={() => deleteNote(value1.id)}><MdDelete size={25}/></button>
//     </div>
//   )
// })

// }
// </div>
// </div>
// )
// }

// export default Note




import React, {  useEffect, useState } from "react"
import "./style.css"
import {MdDelete} from "react-icons/md"
import Header from "./header"
import Area from "./area"
import { IoIosAdd } from 'react-icons/io';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Note({value,onDelete,onAdd}) {
const logo = <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo"></img>

  useEffect(()=>{
    setvalue(value)
  },[value])

  const [value1,setvalue]=useState([])

  const [dragItem,setdragItem]=useState(null)
  const [dragOverItem,setdragOverItem]=useState(null)

  const handleSort = () => {
    //duplicate items
    let _value = [...value1];

    //remove and save the dragged item content
    const draggedItemContent = _value.splice(dragItem, 1)[0];

    //switch the position
    _value.splice(dragOverItem, 0, draggedItemContent);

    //reset the position ref
    setdragItem(null)
    setdragOverItem(null)

//update the actual array
setvalue(_value);

};


//serach
const [search,setsearch]=useState("");
const [list,setlist]=useState([])

// console.log(value1)
function handlesearch(e){

  setsearch(e.target.value)
  setlist(value1.filter(item=>item.title.includes(e.target.value)||item.content.includes(e.target.value)))

}

//deletefilter
function deleteNote(id){
  setlist(list => {
    return [...list.filter((value1)=>
      value1.id !== id)]
  })
  onDelete(id)
}

const [isExpanded, setExpanded] = useState(false)
    const [imgfile, uploading] = useState("")
    useEffect(()=>{
        setNote(preValue => {
            return {
                ...preValue,
                imgfile: imgfile,
            }
        })
    },[imgfile])

    function imgfilehandler(e){
        if(e.target.files.length !== 0){
        uploading(URL.createObjectURL(e.target.files[0]))
    }
}

    const [note, setNote] = useState({
        title: "",
        content: "",
        imgfile:""
    })

    function handleChange(e){
        const{name, value} = e.target
        setNote(preValue => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    function submitButton(i){

        onAdd(note)
        setNote({
            title: "",
            content: "",
            imgfile:""
        })
        i.preventDefault()
    }

    function handedExpanded(){
        setExpanded(true)
    }
return(
  <div>

<div className='header'>
            {logo}
            <h3>Keep</h3>
    <input className="search" type="text" placeholder="search" onChange={handlesearch} />

    </div>


       <form>
            {isExpanded && (<input value={note.title} type='text' placeholder='Title' name="title" onChange={handleChange}/>)}
            <p>
                <textarea onClick={handedExpanded} value={note.content} name="content" placeholder='Take a note...' onChange={handleChange} rows={isExpanded ? 2: 1}></textarea>
            </p>
            <button className='button1' onClick={submitButton}><IoIosAdd size={35}/></button>
            <input className='button2' type='file' onChange={imgfilehandler} />
            <Link to="/draw" className='button3'><FaPen size={35}/></Link>
        </form>


<div className="center">
    {/* <input type="text" placeholder="search" onChange={handlesearch} /> */}
    {search===""?
    value1.map((value1,index)=>{
  return(
    <div className='note' key={index} draggable
          onDragStart={(e) =>setdragItem(index)}
          onDragEnter={(e) => setdragOverItem(index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}>
      <h1>{value1.title}</h1>
      <p>{value1.content}</p>
      {value1.imgfile===""?"":<img src={value1.imgfile} alt="5" width="220" height="240"/>}
      <button onClick={() => onDelete(value1.id)}><MdDelete size={25}/></button>
    </div>
  )
}):
list.map((value1,index)=>{
  return(
    <div className='note' key={index} draggable
          onDragStart={(e) =>setdragItem(index)}
          onDragEnter={(e) => setdragOverItem(index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}>
      <h1>{value1.title}</h1>
      <p>{value1.content}</p>
      {value1.imgfile===""?"":<img src={value1.imgfile} alt="5" width="220" height="240"/>}
      <button onClick={() => deleteNote(value1.id)}><MdDelete size={25}/></button>
    </div>
  )
})
}
</div>
</div>
)
}

export default Note

