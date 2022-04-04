import Layout from '../components/layout/Layout';
import Image from 'next/image';
//import mypic from '../img/dash_piechart.png';
import styles from "./dashboard.module.css";
import React, { useState, useCallback } from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell} from "recharts";

// set the data
const data = [
    {
      name: "Strong",
      passwords: 7,   
    },
    {
      name: "Medium",
      passwords: 4,
    },
    {
      name: "Weak",
      passwords: 4,
    },
  ];

const Dashboard = () => {
    return(
        <Layout>
            {/* this is the pie chart image */}
            <div className={styles.image}><Image src={'../img/dash_piechart.png'} alt="Simple chart num of users"/></div>
            
            {/* the following handles the bar graph */}
            <div className={styles.Graph}>
              <h4>Ratio of Password Strength</h4>
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
                barSize={70}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 36, right: 35 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />

                <Bar dataKey="passwords" fill="#82ca9d" /> 

              </BarChart>
            </div>

        </Layout>
          
    );
};
export default Dashboard;