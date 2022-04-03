import Layout from '../components/layout/Layout';
import Image from 'next/image';
import mypic from '../img/dash_piechart.png';
import styles from "./dashboard.module.css";

    // set the data
    var data = {
    header: ["Password Strength", "Passwords"],
    rows: [
      ["Strong", 1500],
      ["Medium", 87000],
      ["Weak", 175000]
    ]};


const Dashboard = () => {

    return(
        <Layout>
            <div className={styles.image}><Image src={mypic} alt="Simple pie chart of number of users"/></div>
        
            <div></div>

        </Layout>
          
    );
};

export default Dashboard;