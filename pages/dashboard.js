import Layout from '../components/layout/Layout';
import Image from 'next/image';
import mypic from '../img/dash_piechart.png';
import styles from "./dashboard.module.css";
import React, { useState, useCallback } from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

    // set the data
    const data = [
      {
        name: "Strong",
        passwords: 7
      },
      {
        name: "Medium",
        passwords: 4
      },
      {
        name: "Weak",
        passwords: 4
      },
      
    ];
  

const Dashboard = () => {

    return(
        <Layout>
            {/* this is the pie chart image */}
            <div className={styles.image}><Image src={mypic} alt="Simple pie chart of number of users"/></div>
            
            {/* the following handles the bar graph */}
            <div className={styles.Graph}>
              <h1>Ratio of Password Strength</h1>
              <BarChart
                width={600}
                height={400}
                data={data}
                margin={{
                  top: 2,
                  right: 50,
                  left: 20,
                  bottom: 5
                }}
                barSize={30}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="passwords" fill="#8884d8" background={{ fill: "#eee" }} />
              </BarChart>
            </div>

        </Layout>
          
    );
};

export default Dashboard;