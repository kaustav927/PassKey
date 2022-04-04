import React from "react";
import PasswordStrengthBar from 'react-password-strength-bar';
import generator from 'generate-password';
import { useState } from "react";
import {VscCopy} from 'react-icons/vsc';
//import modalStyle from "./Modal.module.css";
const EditModal = (props) => {
  const [password, setPassword] = useState(''); 
  const [rePassword, setRePassword] = useState('');
  const [generated,setGenerated]=useState('');
  const onGenerate=() => {
    const newPassword = generator.generate({
      length: 12,
      numbers: true,
      symbols: true,
      uppercase: true,
      excludeSimilarCharacters: true,
    });
    setPassword(newPassword);
    setGenerated(newPassword);
  }

  return (
    <div className="ml-[20%] flex flex-col flex-center bg-slate-20 rounded border-2 h-90 w-3/4 ">

      <h1 className="flex justify-center mt-2 text-2xl">Edit Password</h1>
      <div className="mx-auto flex justify-center w-3/4 -mb-4">
        <button onClick={onGenerate} className="bg-green-500 py-1 px-2 mr-4 text-white">Generate Password</button>
        <div className="bg-gray-200 shadow-inner rounded h-10 p-2 flex-1 w-3/4">
          <h5 className="mb-2">
            {generated} 
          </h5>
        </div>
     
        <button onClick={() => {navigator.clipboard.writeText(generated)}} className="ml-4">
        <VscCopy className="text-xl"/>
        </button>
        
      </div>
      
      <div className="flex">

        <div className="p-8 ml-16 justify-center items-center w-1/2">
          <form className="flex flex-col">
            <h1 className="text-left text-sm mb-3 mt-[0.5rem]">Title</h1>
            <input
              className="bg-gray-200 shadow-inner rounded p-2 flex-1"          
              type="text"
              aria-label="title"
              placeholder="Enter Account Title"
            />
            <h1 className="text-left text-sm mb-2 mt-3">User Name / Email</h1>
            <input
              className="bg-gray-200 shadow-inner rounded p-2 flex-1"          
              type="email"
              aria-label="email"
              placeholder="Enter Account Username of Email"
            />




            <h1 className="text-left text-sm mt-3">Password</h1>
            <div className="flex">
              <input
                value={password}
                className="bg-gray-200 shadow-inner rounded p-2 flex-1"
                type="password"
                aria-label="pword"
                placeholder="Enter Account Password"
                onInput={e=>setPassword(e.target.value)}
              />
              <span className="w-12">show</span>
            </div>
            <PasswordStrengthBar className="w-5/6" password={password} />
            <h1 className="text-left text-sm mb-2 ">Re-Enter Password</h1>
            <div className="flex">
             
              <input
                value={rePassword}
                className="bg-gray-200 shadow-inner rounded p-2 flex-1"
                type="password"
                aria-label="pword"
                placeholder="Re-Enter Account Password"
                onInput={e=>setRePassword(e.target.value)}
                ref={register({
                  validate: (value) => value === watch('password') || "Passwords don't match."
                })}
              />
              <span className='w-12'>show</span>
            </div>
            







            <h1 className="text-left text-sm mb-2 mt-3">URL</h1>
            <input
              className="bg-gray-200 shadow-inner rounded p-2 flex-1"
              type="url"
              aria-label="url"
              placeholder="Website URL"
            />
          </form>
        </div>
        
        <div className="p-8 justify-center items-center w-1/2">
          <h1 className="text-sm">Description</h1>
          <form className="">
            <textarea
              placeholder="Enter your password description"
              className="bg-gray-200 shadow-inner rounded p-2 my-3 flex-1 w-3/4 h-52"
              type="text"
              />
          </form>
          <button
            onClick={props.onEditClose}
            className="bg-black mr-4 px-5 py-2 rounded-full text-white"
          >
            <p>Cancel</p>
          </button>
          <button
            onClick={props.onEditSave}
            className="bg-black px-5 py-2 rounded-full text-white"
          >
            <p>Save</p>
          </button>
        </div>
      </div>
    </div>

    );
};

export default EditModal;

