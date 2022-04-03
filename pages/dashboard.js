import Layout from '../components/layout/Layout';
import Image from 'next/image';
import mypic from '../img/dash_piechart.png';
import styles from "./dashboard.module.css";
import React, { useState, useCallback } from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell} from "recharts";
    //set bar colours: green, yello, red
    const barColors = ["#008000", "#f2f236", "#f44336"]

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
                <Bar dataKey="passwords">
                  {
                    data.map((entry, index) => {
                        let color = barColors[0];
                        if (index == 1){
                         color = barColors[1];
                        }
                        else if (index == 2){
                          color = barColors[2];
                        }
                        return <Cell fill={color}/>;
                    })
                  }
                </Bar> 
              </BarChart>
            </div>

        </Layout>
          
    );
};

export default Dashboard;