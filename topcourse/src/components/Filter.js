import React from 'react'

function Filter({filterdata,setcategory,category}) {


    function filterhandler(title){
        setcategory(title);
    }

  return (
    <div className='p-5  bg-black flex justify-center gap-10  text-white  px-auto space'>
        {filterdata.map((data) => {
            
            return (<button key={data.id} className={`p-1 border rounded hover:bg-slate-800 ${data.title===category? "bg-slate-800" : "bg-black"}`} onClick={()=>filterhandler(data.title)} >{data.title}</button>);
        })}
    </div>
  )
}

export default Filter