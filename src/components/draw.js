import React from 'react'
import "./home.css"
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

export default function Draw() {

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, seetIsDrawing] = useState(false)
  
    useEffect(() => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth*2;
      canvas.height = window.innerHeight*2;
      canvas.style.width =  `${window.innerWidth}px`;
      canvas.style.height =  `${window.innerHeight}px`;
  
      const context = canvas.getContext("2d")
      context.scale(2,2)
      context.lineCap = "round"
      context.strokeStyle = "black"
      context.lineWidth = 5
      contextRef.current = context;
    },[])
    const startDrawing = ({nativeEvent}) =>{
      const {offsetX, offsetY} = nativeEvent;
      contextRef.current.beginPath()
      contextRef.current.moveTo(offsetX, offsetY)
      seetIsDrawing(true)
  
    }
    const finishDrawing = () =>{
      contextRef.current.closePath()
      seetIsDrawing(false)
    }
    const draw = ({nativeEvent}) =>{
      if(!isDrawing){
        return
      }
      const {offsetX, offsetY} = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY)
      contextRef.current.stroke()
    }
    return (
      <div>
       <Link to="/" className='pk'> <button className='back'><BiArrowBack/></button></Link>
      <canvas 
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
      />
      </div>
    )
}
