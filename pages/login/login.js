import React from 'react'
import {FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'

function Login(props) {
  
  return (
    <div className="grid place-items-center h-screen text-center bg-gradient-to-t from-slate-200 " >
      
  
      <div className="bg-white/70 border-2 rounded shadow-2xl flex flex-col w-96 lg:w-2/3 md:w-3/4 max-w-4xl">
        
  
        <div className="h-3/5 py-2 flex flex-col lg:flex-row md:flex-row">


          <div className="  w-5/6 px-20 py-12 mx-auto text-white">
       
            <h4 className="text-black text-3xl mb-3 ">Sign in to Account</h4>
            
            <div className="flex flex-col items-center mb-3">
                <div className=" bg-gray-200 flex items-center w-64 p-2 mt-3 mb-4 shadow-inner rounded ">
                 <FaRegEnvelope className='text-gray-400 m-2 bg-gray-200'/>
                  <input className="text-black flex-1 text-sm outline-none bg-gray-200" type="email" name="email" placeholder="Email"></input>
                </div>

                <div className=" bg-gray-200 flex items-center w-64 p-2 mt-3 mb-4 shadow-inner rounded ">
                 <MdLockOutline className='text-gray-400 m-2 bg-gray-200'/>
                  <input className="text-black flex-1 text-sm outline-none bg-gray-200" type="password" name="password" placeholder="•••••••••"></input>
                </div>
            </div>
              
         
            <button
              type="button"
              onClick={props.onLogin}
              className="mt-4 border-2 rounded text-black border-slate-200 px-12 py-2 hover:bg-slate-400">
              Sign in
            </button>
          </div>

          


        </div>
      </div>
    </div>      
  )
}

export default Login