import React from 'react'
//import {Fa} from 'react-icons/fa'
function Login() {
    
  return (
    <div className="grid place-items-center h-screen text-center">
      
  
      <div className="bg-white border-2 border-slate-800 rounded-2xl shadow-2xl flex flex-col w-96 lg:w-2/3 md:w-3/4 max-w-4xl">
        
        <div className="h-2/5 mt-10">
          <p>Logo</p>
        </div>

        <div className="h-3/5 py-2 flex flex-col lg:flex-row md:flex-row">


          <div className="  w-5/6 px-10 py-5 mx-auto bg-white text-black">
       
            <h4 className="text-lg py-5"> Login With Email </h4>
            
            
              <div className="flex center bg-slate p-2 mb-4 rounded border-2 border-black ">

                <input  className="text-black border-2" type="email" placeholder="myEmail@gmail.com" ></input>
              
                </div>
              <div className="flex center bg-slate p-2 mb-4 rounded border-2 border-black">

                <input className="text-black" type="email" placeholder="" ></input>
              
                </div>
         
            <button className="mt-4 border-2 border-slate-300 px-12 py-2 hover:bg-slate-200 hover:text-black">Sign in</button>
          </div>

          


        </div>
      </div>
    </div>      
  )
}

export default Login