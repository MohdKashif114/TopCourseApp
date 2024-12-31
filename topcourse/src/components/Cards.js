import React from "react";
import Card from "./Card.js";
import {useState} from 'react';
import { toast } from "react-toastify";

function Cards({courses,category}){

    
        const alldata=[];
        const getdata=()=>{
            if(category==="All"){

                if(!courses) return [];
                Object.values(courses).forEach( (coursecategory)=>{
                    coursecategory.forEach((course)=>{
                        alldata.push(course);
                       
                    })
        
                })
                return alldata;
            }
            else{
                return courses[category];
            }
        }
    
   

const [likes,setlikes]=useState([]);

function likehandler(id,setlikeornot){
    //if already liked
    if(likes.includes(id)){
        setlikes((prev)=> prev.filter((cid)=> (cid!==id)));
        toast.warning("Like removed");
        setlikeornot(false);
    }
    else{
        setlikes((prev)=> [...prev,id]);
        toast.success("Like added successfully");
        setlikeornot(true);
    }
    
}



    return (
        <div className="flex flex-wrap gap-3 w-2/3 mt-4 m-auto justify-center ">
            {
            getdata().map((course) => {
               return <Card course={course} key={course.id} likehandler={likehandler}></Card>
            })}
        </div>
    )
}

export default Cards;