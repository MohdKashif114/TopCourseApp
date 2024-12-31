
import './App.css';
import Navbar  from './components/Navbar.js';
import Filter  from './components/Filter.js';
import Cards  from './components/Cards.js';
import Spinner  from './components/Spinner.js';
import { apiUrl,filterData } from './data.js';
import { useEffect,useState } from 'react';
import {toast} from "react-toastify";

function App() {

const [Courses,setCourses]=useState(null);
const [loading,setLoading]=useState(true);
const [category,setcategory]=useState("All");
  
useEffect(()=>{
  setLoading(true);
  const fetchData = async()=>{
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
      console.log(output.data);
      setLoading(false);
    }
    catch(error){
      toast.error("Unable to fetch data !!");
    }
  }
  fetchData();
},[]);



  return (
    <div className={`App h-screen ${loading?"bg-white":"bg-black"} `}>
     <Navbar></Navbar>
      
      
      <div className='bg-black'>

      <Filter filterdata = {filterData} Courses={Courses} setcategory={setcategory} category={category}></Filter> 

       
      <div className=''>{
        loading ? (<Spinner/>) : (<Cards  courses={Courses} category={category}  />)
      }</div>

      
      </div>
    </div>
    
  );
}

export default App;
