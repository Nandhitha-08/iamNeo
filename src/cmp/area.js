// import React, { useEffect, useState } from 'react'
// import "./style.css"
// import { IoIosAdd } from 'react-icons/io';
// import { FaPen } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// export default function Area({submitButton, onAdd}) {

//     const [isExpanded, setExpanded] = useState(false)
//     const [imgfile, uploading] = useState("")
//     useEffect(()=>{
//         setNote(preValue => {
//             return {
//                 ...preValue,
//                 imgfile: imgfile,
//             }
//         })
//     },[imgfile])

//     function imgfilehandler(e){
//         if(e.target.files.length !== 0){
//         uploading(URL.createObjectURL(e.target.files[0]))
//     }
// }

//     const [note, setNote] = useState({
//         title: "",
//         content: "",
//         imgfile:""
//     })

//     function handleChange(e){
//         const{name, value} = e.target
//         setNote(preValue => {
//             return {
//                 ...preValue,
//                 [name]: value,
//             }
//         })
//     }

//     function submitButton(i){
        
//         onAdd(note)
//         setNote({
//             title: "",
//             content: "",
//             imgfile:""
//         })
//         i.preventDefault()
//     }

//     function handedExpanded(){
//         setExpanded(true)
//     }
// //.....
// // console.log(image)
//   return (
//     <div>
//         <form>
//             {isExpanded && (<input value={note.title} type='text' placeholder='Title' name="title" onChange={handleChange}/>)}
//             <p>
//                 <textarea onClick={handedExpanded} value={note.content} name="content" placeholder='Take a note...' onChange={handleChange} rows={isExpanded ? 2: 1}></textarea>
//             </p>
//             <button className='button1' onClick={submitButton}><IoIosAdd size={35}/></button>
//             <input className='button2' type='file' onChange={imgfilehandler} />
//             <Link to="/draw" className='button3'><FaPen size={35}/></Link>
//         </form>
//     </div>
//   );
// }
// import React, { useState, useRef } from 'react'
// import "./style.css"
// import { IoIosAdd } from 'react-icons/io';

// export default function Area({submitButton, onAdd}) {
//     const [isExpanded, setExpanded] = useState(false)
    
//     const [note, setNote] = useState({
//         title: "",
//         content: "",
//     })

//     function handleChange(e){
//         const{name, value} = e.target
//         setNote(preValue => {
//             return {
//                 ...preValue,
//                 [name]: value,
//             }
//         })
//     }

//     function submitButton(i){
//         onAdd(note)
//         setNote({
//             title: "",
//             content: "",
//         })
//         i.preventDefault()
//     }

//     function handedExpanded(){
//         setExpanded(true)
//     }
// //.....


//   return (
//     <div>
//         {/* <form>
//             {isExpanded && (<input value={note.title} type='text' placeholder='Title' name="title" onChange={handleChange}/>)}
//             <p>
//                 <textarea onClick={handedExpanded} value={note.content} name="content" placeholder='Take a note...' onChange={handleChange} rows={isExpanded ? 2: 1}></textarea>
//             </p>
//             <button onClick={submitButton}><IoIosAdd size={35}/></button>
//         </form> */}
        
//          <form>
//             {isExpanded && (<input value={note.title} type='text' placeholder='Title' name="title" onChange={handleChange}/>)}
//             <p>
//                 <textarea onClick={handedExpanded} value={note.content} name="content" placeholder='Take a note...' onChange={handleChange} rows={isExpanded ? 2: 1}></textarea>
//             </p>
//             <button onClick={submitButton}><IoIosAdd size={35}/></button>
//         </form>
        
        
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react'
import "./style.css"
import { IoIosAdd } from 'react-icons/io';

export default function Area({submitButton, onAdd}) {


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
    imgfile:"",
    id:0
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
//.....
// console.log(image)
  return (
    <div>
        <form>
            {isExpanded && (<input value={note.title} type='text' placeholder='Title' name="title" onChange={handleChange}/>)}
            <p>
                <textarea onClick={handedExpanded} value={note.content} name="content" placeholder='Take a note...' onChange={handleChange} rows={isExpanded ? 2: 1}></textarea>
            </p>
            <button className='button1' onClick={submitButton}><IoIosAdd size={35}/></button>
            <input className='button2' type='file' onChange={imgfilehandler} />
        </form>
    </div>
  );
}