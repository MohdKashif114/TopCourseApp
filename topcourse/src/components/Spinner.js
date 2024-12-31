import React from 'react'
import './spinner.css'

function Spinner() {
  return (
    <div className='pt-60 bg-white'>
        <div class="spinner" >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <h3 className='mt-9'>Loading...</h3>
       
    </div>
  )
}

export default Spinner