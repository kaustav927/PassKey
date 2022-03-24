import Layout from '../components/layout/Layout';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AddKey = () => {

    return(
        <Layout>
            <Popup trigger={<button> Trigger</button>} position="right center">
                <div>Popup content here !!</div>
            </Popup>
        </Layout>
        
        
    );
};

export default AddKey;