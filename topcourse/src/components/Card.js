import React from 'react';
// import {FcLike} from "react-icons/fc";
import { FaHeart } from "react-icons/fa";
import {useState} from 'react';

function Card({course,likehandler}) {

const [likeornot,setlikeornot]=useState(false);

function likehandlerhere(){
    likehandler(course.id,setlikeornot);
}


  return (
    <div className='flex flex-col w-[250px] rounded-md bg-slate-800'>
        <div className='w-[250px] relative rounded-t-md'>
            <img  src={course.image.url} className='rounded-t-md'></img>
        <div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center align-middle absolute -bottom-2 right-1'>
            <button onClick={likehandlerhere}>
                {
                    likeornot===true?<FaHeart className='text-red-600'/>:
                    <FaHeart className='text-red-400 '/>
                    
                }
                
            </button>
        </div>
        </div>
        <div className='mt-3'>
            <p className='text-white font-bold p-1'>{course.title}</p>
            <p className='text-white p-3'>{
                
                course.description.length >100?(course.description.substr(0,100)+"..."):course.description
            }
                </p>
                
        </div>
        
    </div>
    
    
  )
}

export default Card;