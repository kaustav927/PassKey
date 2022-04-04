import Layout from '../components/layout/Layout';
import Login from './login/login';
import React, {useState} from "react";

const Home = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
      //if the user is not authenticated, the user cannot access the main page. The login page will be rendered. 

    const onLogin =()=>{
        console.log('clicked login')
        setIsAuthenticated(true);
    }

    return (
        
        isAuthenticated ? 
        <Layout>     
            <h3>Home</h3> 
        </Layout>
        : 
        <Login onLogin={onLogin}/>
        
    )
}
//when user authenticate, he/she will be guided to the main page.
export default Home;

/**
 * This component renders the main page of password manager application.
 */

/*
<div className="w-1/2 px-20 py-12 mx-auto bg-slate-200">
            <h2 className="text-3xl font-bold mb-2"> Title</h2>
              <button className="border-2 border-slate-300 px-12 py-2">Google</button>
          </div>
*/