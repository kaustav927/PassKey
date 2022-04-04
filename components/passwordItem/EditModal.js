import React from "react";

const EditModal = (props) => {
  return (

    


    <div className="ml-[20%] flex flex-col flex-center bg-slate-20 rounded border-2 h-90 w-3/4 ">

      <h1 className="flex justify-center mt-2 text-2xl">Edit Password</h1>

      <div className="flex">

        <div className="p-8 ml-16 justify-center items-center w-1/2">
          <form className="flex flex-col">
            <h1 className="text-left text-xl mb-3 mt-[0.5rem]">Title</h1>
            <input
              className="bg-gray-200 shadow-inner rounded p-2 flex-1"          
              type="email"
              aria-label="email address"
              placeholder="Enter Account Title"
            />
            <h1 className="text-left text-xl mb-2 mt-3">User Name / Email</h1>
            <input
              className="bg-gray-200 shadow-inner rounded p-2 flex-1"          
              type="email"
              aria-label="email address"
              placeholder="Enter Account Username of Email"
            />
            <h1 className="text-left text-xl mb-2 mt-3">Password</h1>
            <input
              className="bg-gray-200 shadow-inner rounded p-2 flex-1"
              type="email"
              aria-label="email address"
              placeholder="Enter Account Password"
            />
            <h1 className="text-left text-xl mb-2 mt-3">Re-Enter Password</h1>
            <input
              className="bg-gray-200 shadow-inner rounded p-2 flex-1"
              type="email"
              aria-label="email address"
              placeholder="Re-Enter Account Password"
            />
            <h1 className="text-left text-xl mb-2 mt-3">URL</h1>
            <input
              className="bg-gray-200 shadow-inner rounded p-2 flex-1"
              type="email"
              aria-label="email address"
              placeholder="Website URL"
            />
          </form>
        </div>
        
        <div className="p-8 justify-center items-center w-1/2">
          <h1 className="text-xl">Description</h1>
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

