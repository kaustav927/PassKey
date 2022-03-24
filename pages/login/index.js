import React from 'react'
import DataHandler from './DataHandler'
//import {Fa} from 'react-icons/fa'
function Login() {
    
  return (
    <div className="grid place-items-center h-screen text-center">
      
  
      <div className="bg-white border-2 border-slate-800 rounded-2xl shadow-2xl flex flex-col w-96 lg:w-2/3 md:w-3/4 max-w-4xl">
        
        <div className="h-2/5 p-5">
          <p>Logo</p>
        </div>

        <div className="h-3/5 py-2 flex flex-col lg:flex-row md:flex-row">


          <div className="  w-5/6 px-20 py-12 mx-auto bg-slate-400 text-white">
       
            <h4> Description</h4>
            
            
              <div className="flex center bg-white p-2 mb-4 ">

                <input type="email" ></input>
              </div>
              <div className="flex center bg-white p-2 ">

                <input type="email" ></input>
              </div>
         
            <button className="mt-4 border-2 border-slate-300 px-12 py-2 hover:bg-slate-200 hover:text-black">Sign in</button>
            <button onClick= "DataHandler('VB94o2tMLgmy3TPi9ewy', 'add')" >Test</button>
          </div>

          


        </div>
      </div>
    </div>      
  )
}

export default Login